import * as vscode from "vscode";
import { spawn, type ChildProcess } from "node:child_process";
import * as fs from "node:fs"
import * as path from "node:path";

/**
 * T3 Code for VS Code.
 *
 * Mirrors the architecture of t3code's own desktop app (an Electron shell
 * around the `t3` server): we spawn `t3 serve` headlessly, capture the
 * pairing URL it prints (which carries the auth token in the URL fragment),
 * and render the web UI in a webview iframe.
 */

const PAIRING_URL_RE = /Pairing URL:\s*(https?:\/\/\S+)/;
const STARTUP_TIMEOUT_MS = 180_000; // first run may need to download t3

/**
 * The t3 version the bundled path-proxy-patched web client was built from.
 * The extension installs exactly this version and overlays the patched
 * client over its dist/client, so UI and server always match.
 */
const T3_VERSION = "0.0.28";
const CLIENT_PATCH_REV = 2; // bump when the bundled patched client changes

interface ServerState {
  process: ChildProcess;
  /** Resolves with the pairing URL once the server prints it. */
  pairingUrl: Promise<string>;
}

let server: ServerState | undefined;
let panel: vscode.WebviewPanel | undefined;
let output: vscode.OutputChannel;
let statusItem: vscode.StatusBarItem;
/** Fires with each chunk of server output — drives the loading screen. */
const serverLog = new vscode.EventEmitter<string>();

export function activate(context: vscode.ExtensionContext) {
  output = vscode.window.createOutputChannel("T3 Code");
  statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusItem.command = "t3code.open";
  context.subscriptions.push(output, statusItem);

  context.subscriptions.push(
    vscode.commands.registerCommand("t3code.open", () => openPanel(context)),
    vscode.commands.registerCommand("t3code.openInBrowser", () => openInBrowser(context)),
    vscode.commands.registerCommand("t3code.restart", async () => {
      stopServer();
      await openPanel(context);
    }),
    vscode.commands.registerCommand("t3code.stop", () => {
      stopServer();
      panel?.dispose();
      vscode.window.setStatusBarMessage("T3 Code server stopped.", 3000);
    }),
    vscode.commands.registerCommand("t3code.showLogs", () => output.show()),
  );
}

export function deactivate() {
  const config = vscode.workspace.getConfiguration("t3code");
  if (config.get<boolean>("stopServerOnExit", true)) {
    stopServer();
  }
}

function config() {
  return vscode.workspace.getConfiguration("t3code");
}

function workspaceCwd(): string | undefined {
  return vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
}

function stopServer() {
  if (server) {
    output.appendLine("[t3code] stopping server");
    try {
      server.process.kill();
    } catch {
      // already dead
    }
    server = undefined;
  }
  statusItem.hide();
}

/** Recursively copy a directory (fs.cpSync exists on all supported Node/Electron versions). */
function copyDir(src: string, dest: string): void {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
}

function runLogged(cmd: string, args: string[], cwd: string): Promise<void> {
  return new Promise((resolve, reject) => {
    output.appendLine(`[t3code] running: ${cmd} ${args.join(" ")}`);
    const child = spawn(cmd, args, {
      cwd,
      env: { ...process.env, FORCE_COLOR: "0", NO_COLOR: "1" },
      stdio: ["ignore", "pipe", "pipe"],
      shell: process.platform === "win32",
    });
    const onData = (chunk: Buffer) => {
      const text = chunk.toString();
      output.append(text);
      serverLog.fire(text);
    };
    child.stdout!.on("data", onData);
    child.stderr!.on("data", onData);
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`)),
    );
  });
}

/**
 * Install t3@T3_VERSION into the extension's storage dir and overlay the
 * bundled path-proxy-patched web client over its dist/client. Idempotent —
 * a marker file skips the work on subsequent runs.
 */
async function ensureManagedInstall(context: vscode.ExtensionContext): Promise<string> {
  const installDir = path.join(context.globalStorageUri.fsPath, "t3-server");
  const binPath = path.join(installDir, "node_modules", "t3", "dist", "bin.mjs");
  const clientDir = path.join(installDir, "node_modules", "t3", "dist", "client");
  const marker = path.join(installDir, `.patched-${T3_VERSION}-r${CLIENT_PATCH_REV}`);

  if (fs.existsSync(marker) && fs.existsSync(binPath)) {
    return binPath;
  }

  fs.mkdirSync(installDir, { recursive: true });
  serverLog.fire("Installing t3 server (first run only)…\n");
  await runLogged(
    "npm",
    ["install", `t3@${T3_VERSION}`, "--prefix", installDir, "--no-audit", "--no-fund", "--loglevel", "error"],
    installDir,
  );
  if (!fs.existsSync(binPath)) {
    throw new Error(`t3 install did not produce ${binPath}. Check "T3 Code: Show Server Logs".`);
  }

  const patchedClient = path.join(context.extensionUri.fsPath, "client");
  if (!fs.existsSync(path.join(patchedClient, "index.html"))) {
    throw new Error("Bundled patched web client is missing from the extension.");
  }
  output.appendLine(`[t3code] overlaying patched web client onto ${clientDir}`);
  copyDir(patchedClient, clientDir);
  fs.writeFileSync(marker, "");
  return binPath;
}

async function ensureServer(context: vscode.ExtensionContext): Promise<ServerState> {
  if (server && server.process.exitCode === null && !server.process.killed) {
    return server;
  }

  // An explicit t3code.command overrides the managed install (patched client
  // won't apply — path-proxied environments then get the guidance screen).
  const commandSetting = config().get<string>("command", "").trim();
  let cmd: string;
  let baseArgs: string[];
  if (commandSetting) {
    [cmd, ...baseArgs] = commandSetting.split(/\s+/);
  } else {
    cmd = process.execPath.includes("node") ? process.execPath : "node";
    baseArgs = [await ensureManagedInstall(context)];
  }
  const port = config().get<number>("port", 3773);
  const cwd = workspaceCwd();

  // `t3 serve [cwd]` runs headless (no browser) and prints pairing details.
  const args = [...baseArgs, "serve"];
  if (cwd) args.push(cwd);
  if (port > 0) args.push("--port", String(port));

  output.appendLine(`[t3code] starting: ${cmd} ${args.join(" ")}`);

  const child = spawn(cmd, args, {
    cwd: cwd ?? process.env.HOME,
    env: { ...process.env, FORCE_COLOR: "0", NO_COLOR: "1" },
    stdio: ["ignore", "pipe", "pipe"],
    shell: process.platform === "win32",
  });

  const pairingUrl = new Promise<string>((resolve, reject) => {
    let resolved = false;
    let buffer = "";

    const timeout = setTimeout(() => {
      if (!resolved) {
        reject(new Error(`T3 Code server did not print a pairing URL within ${STARTUP_TIMEOUT_MS / 1000}s. Check "T3 Code: Show Server Logs".`));
      }
    }, STARTUP_TIMEOUT_MS);

    const onData = (chunk: Buffer) => {
      const text = chunk.toString();
      output.append(text);
      serverLog.fire(text);
      if (resolved) return;
      buffer += text;
      const match = buffer.match(PAIRING_URL_RE);
      if (match) {
        resolved = true;
        clearTimeout(timeout);
        resolve(match[1]);
      }
    };

    child.stdout!.on("data", onData);
    child.stderr!.on("data", (chunk: Buffer) => {
      const text = chunk.toString();
      output.append(text);
      serverLog.fire(text);
    });

    child.on("error", (err) => {
      clearTimeout(timeout);
      if (!resolved) reject(new Error(`Failed to launch T3 Code server (${err.message}). Is Node >= 24.10 available on PATH?`));
    });
    child.on("exit", (code) => {
      output.appendLine(`\n[t3code] server exited with code ${code}`);
      clearTimeout(timeout);
      if (!resolved) reject(new Error(`T3 Code server exited early (code ${code}). Check "T3 Code: Show Server Logs".`));
      if (server?.process === child) {
        server = undefined;
        statusItem.hide();
      }
    });
  });

  server = { process: child, pairingUrl };
  return server;
}

interface ResolvedAccess {
  /** URL to load in the panel / browser. */
  url: string;
  /** Raw pairing URL on the workspace's localhost. */
  localUrl: string;
  /**
   * True when asExternalUri mapped the server under a path prefix (e.g.
   * Coder/code-server's /proxy/<port>/). The t3 SPA uses absolute asset and
   * API paths, so it cannot work behind a path-based proxy — the panel shows
   * guidance instead of a broken iframe in that case.
   */
  pathProxied: boolean;
}

/**
 * Resolve how the panel should reach the server. In "auto" mode the pairing
 * URL is mapped through asExternalUri (preserving the #token fragment, which
 * asExternalUri drops); in "localhost" mode it is used as-is, for users who
 * forward the port to their own machine (browsers treat http://localhost as
 * a trustworthy origin, so the iframe is allowed even from an HTTPS page).
 */
async function resolveAccess(context: vscode.ExtensionContext): Promise<ResolvedAccess> {
  const raw = await (await ensureServer(context)).pairingUrl;
  const parsed = new URL(raw);
  if (config().get<string>("accessMode", "auto") === "localhost") {
    output.appendLine(`[t3code] access mode localhost: ${raw}`);
    return { url: raw, localUrl: raw, pathProxied: false };
  }
  // The pairing token normally rides in the #fragment, but auth-redirect
  // chains (e.g. Coder's proxy login flow) drop fragments. The pair page
  // also accepts ?token= (which survives redirects), so move it there.
  const hashParams = new URLSearchParams(parsed.hash.slice(1));
  const token = hashParams.get("token");
  const search = token
    ? `${parsed.search ? parsed.search + "&" : "?"}token=${encodeURIComponent(token)}`
    : parsed.search;
  const base = vscode.Uri.parse(`${parsed.protocol}//${parsed.host}${parsed.pathname}${search}`);
  const external = await vscode.env.asExternalUri(base);
  const externalStr = external.toString(true);
  const url = externalStr + parsed.hash;
  const pathProxied = new URL(externalStr).pathname !== parsed.pathname;
  output.appendLine(`[t3code] pairing URL: ${raw} -> ${url}${pathProxied ? " (path-proxied: t3 UI cannot load here)" : ""}`);
  return { url, localUrl: raw, pathProxied };
}

async function withStartupProgress<T>(task: () => Promise<T>): Promise<T | undefined> {
  try {
    return await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: "Starting T3 Code server…" },
      task,
    );
  } catch (err) {
    stopServer();
    const message = err instanceof Error ? err.message : String(err);
    const pick = await vscode.window.showErrorMessage(`T3 Code: ${message}`, "Show Logs");
    if (pick === "Show Logs") output.show();
    return undefined;
  }
}

async function openInBrowser(context: vscode.ExtensionContext) {
  const access = await withStartupProgress(() => resolveAccess(context));
  if (!access) return;
  // A path-proxied URL is just as broken in a browser tab — prefer the raw
  // localhost URL and let the user's port-forward carry it.
  const target = access.pathProxied ? access.localUrl : access.url;
  await vscode.env.openExternal(vscode.Uri.parse(target));
  statusItem.text = "$(sparkle) T3 Code";
  statusItem.tooltip = "T3 Code server is running";
  statusItem.show();
}

/** Turn a raw server/npm log chunk into a short human-readable stage label. */
function stageForLogChunk(text: string): string | undefined {
  if (/T3 Code server is ready/i.test(text)) return "Server ready — connecting…";
  if (/Authentication|pairing/i.test(text)) return "Authenticating…";
  if (/listening|http/i.test(text)) return "Starting server…";
  if (/npm|npx|Download|resolv|fetch|reify|install|added \d+ package/i.test(text)) {
    return "Downloading t3 (first run only)…";
  }
  return undefined;
}

async function openPanel(context: vscode.ExtensionContext) {
  if (panel && server && server.process.exitCode === null) {
    panel.reveal();
    return;
  }
  panel?.dispose();

  panel = vscode.window.createWebviewPanel(
    "t3code",
    "T3 Code",
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    },
  );
  panel.iconPath = vscode.Uri.joinPath(context.extensionUri, "media", "icon.svg");
  panel.onDidDispose(() => {
    panel = undefined;
  });

  const thisPanel = panel;
  const firstRun = context.globalState.get<boolean>("t3code.hasStartedOnce") !== true;
  thisPanel.webview.html = renderLoadingScreen(firstRun);

  // Stream server output into the loading screen as stage updates.
  const logSub = serverLog.event((text) => {
    const stage = stageForLogChunk(text);
    if (stage) thisPanel.webview.postMessage({ type: "stage", stage });
  });
  thisPanel.onDidDispose(() => logSub.dispose());

  // Let the loading screen's buttons trigger commands (retry / show logs).
  thisPanel.webview.onDidReceiveMessage(async (msg) => {
    if (msg?.type === "showLogs") output.show();
    if (msg?.type === "retry") void vscode.commands.executeCommand("t3code.restart");
    if (msg?.type === "useLocalhost") {
      await config().update("accessMode", "localhost", vscode.ConfigurationTarget.Global);
      // Re-render this panel directly — t3code.open would early-return on
      // the already-open panel.
      const raw = await (await ensureServer(context)).pairingUrl;
      thisPanel.webview.html = renderWebview(raw);
      statusItem.text = "$(sparkle) T3 Code";
      statusItem.tooltip = "T3 Code server is running — click to open";
      statusItem.show();
    }
  });

  try {
    const access = await resolveAccess(context);
    await context.globalState.update("t3code.hasStartedOnce", true);
    if (thisPanel !== panel) return; // panel was closed/replaced while starting
    // The managed install ships a path-proxy-patched web client, so a
    // path-proxied URL is fine there. Only a user-supplied t3 (stock client,
    // absolute asset/API paths) can't render behind a path proxy.
    const usingManagedInstall = !config().get<string>("command", "").trim();
    if (access.pathProxied && !usingManagedInstall) {
      thisPanel.webview.html = renderProxyGuidance(access.localUrl);
      return;
    }
    thisPanel.webview.postMessage({ type: "stage", stage: "Ready" });
    thisPanel.webview.html = renderWebview(access.url);
    statusItem.text = "$(sparkle) T3 Code";
    statusItem.tooltip = "T3 Code server is running — click to open";
    statusItem.show();
  } catch (err) {
    stopServer();
    const message = err instanceof Error ? err.message : String(err);
    if (thisPanel === panel) {
      thisPanel.webview.html = renderErrorScreen(message);
    } else {
      void vscode.window.showErrorMessage(`T3 Code: ${message}`);
    }
  } finally {
    logSub.dispose();
  }
}

/**
 * Loading screen with a progress bar. npx/t3 give no real percentage, so the
 * bar advances asymptotically toward 95% on a time budget (~30s first run,
 * ~8s after) and snaps to 100% when the app swaps in. Stage text is updated
 * live from server output via postMessage.
 */
function renderLoadingScreen(firstRun: boolean): string {
  const budgetMs = firstRun ? 30_000 : 8_000;
  const initialStage = firstRun ? "Downloading t3 (first run only)…" : "Starting T3 Code server…";
  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';" />
  <style>
    html, body { height: 100%; margin: 0; }
    body {
      display: flex; align-items: center; justify-content: center;
      background: var(--vscode-editor-background, #111);
      color: var(--vscode-foreground, #ccc);
      font-family: var(--vscode-font-family, sans-serif);
    }
    .box { width: min(420px, 80vw); text-align: center; }
    .logo { font-size: 28px; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 24px; }
    .logo span { color: #7c3aed; }
    .track {
      height: 6px; border-radius: 3px; overflow: hidden;
      background: var(--vscode-progressBar-background, #7c3aed);
      opacity: 0.25;
    }
    .track-wrap { position: relative; }
    .fill {
      position: absolute; inset: 0 auto 0 0; width: 0%;
      height: 6px; border-radius: 3px;
      background: var(--vscode-progressBar-background, #7c3aed);
      transition: width 0.4s ease;
    }
    .stage { margin-top: 14px; font-size: 12px; opacity: 0.8; min-height: 1.2em; }
    .pct { margin-top: 4px; font-size: 11px; opacity: 0.5; font-variant-numeric: tabular-nums; }
  </style>
</head>
<body>
  <div class="box">
    <div class="logo">T3 <span>Code</span></div>
    <div class="track-wrap"><div class="track"></div><div class="fill" id="fill"></div></div>
    <div class="stage" id="stage">${initialStage}</div>
    <div class="pct" id="pct">0%</div>
  </div>
  <script>
    const fill = document.getElementById("fill");
    const pctEl = document.getElementById("pct");
    const stageEl = document.getElementById("stage");
    const budget = ${budgetMs};
    const start = performance.now();
    let pct = 0;
    // Ease toward 95% over the time budget; never appear stuck.
    const timer = setInterval(() => {
      const t = (performance.now() - start) / budget;
      const target = 95 * (1 - Math.exp(-2.2 * t));
      pct = Math.max(pct, Math.min(95, target));
      fill.style.width = pct.toFixed(1) + "%";
      pctEl.textContent = Math.round(pct) + "%";
    }, 250);
    window.addEventListener("message", (e) => {
      const msg = e.data;
      if (msg && msg.type === "stage") {
        stageEl.textContent = msg.stage;
        // Milestones pull the bar forward past the time-based estimate.
        if (/Starting server/.test(msg.stage)) pct = Math.max(pct, 70);
        if (/Authenticating|Server ready/.test(msg.stage)) pct = Math.max(pct, 90);
        if (msg.stage === "Ready") { clearInterval(timer); pct = 100; }
        fill.style.width = pct + "%";
        pctEl.textContent = Math.round(pct) + "%";
      }
    });
  </script>
</body>
</html>`;
}

/**
 * Shown when the environment maps the server under a path prefix (Coder /
 * code-server path proxy). The t3 web app uses absolute asset & API paths
 * (/assets/…, /api/…), which escape the prefix — so instead of a broken
 * iframe, explain the two working setups.
 */
function renderProxyGuidance(localUrl: string): string {
  const port = new URL(localUrl).port || "80";
  const workspace = process.env.CODER_WORKSPACE_NAME;
  const forwardCmd = workspace
    ? `coder port-forward ${workspace} --tcp ${port}:${port}`
    : `ssh -L ${port}:localhost:${port} <remote>`;
  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';" />
  <style>
    html, body { height: 100%; margin: 0; }
    body {
      display: flex; align-items: center; justify-content: center;
      background: var(--vscode-editor-background, #111);
      color: var(--vscode-foreground, #ccc);
      font-family: var(--vscode-font-family, sans-serif);
    }
    .box { width: min(560px, 88vw); }
    .title { font-size: 16px; font-weight: 600; margin-bottom: 10px; }
    .title span { color: #7c3aed; }
    p, li { font-size: 12.5px; line-height: 1.55; opacity: 0.88; }
    code {
      font-family: var(--vscode-editor-font-family, monospace); font-size: 11.5px;
      background: var(--vscode-textCodeBlock-background, #2a2a2a);
      padding: 2px 5px; border-radius: 3px;
    }
    .step { margin: 14px 0; padding: 12px 14px; border-radius: 6px;
      background: var(--vscode-textCodeBlock-background, #1d1d1d); }
    .step b { font-size: 12.5px; }
    button {
      margin-top: 6px; padding: 6px 14px; border: none; border-radius: 3px; cursor: pointer;
      font-size: 12.5px; background: var(--vscode-button-background, #7c3aed);
      color: var(--vscode-button-foreground, #fff);
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="title">T3 <span>Code</span> is running — but this environment can't display it yet</div>
    <p>The server is up at <code>${localUrl.replace(/#.*$/, "")}</code>, but VS Code here exposes ports
    through a <b>path-based proxy</b> (e.g. <code>…/proxy/${port}/</code>). The t3 app loads its assets and API
    from absolute paths (<code>/assets/…</code>, <code>/api/…</code>), which escape that prefix — so the page
    can't render. Two ways to fix it:</p>
    <div class="step">
      <b>Option 1 — forward the port to your machine</b> (works right now)<br/>
      <p>Run this on your <i>local</i> machine, then click the button:</p>
      <code>${forwardCmd}</code><br/>
      <button id="useLocalhost">I'm forwarding — connect via localhost</button>
    </div>
    <div class="step">
      <b>Option 2 — enable subdomain apps on your Coder deployment</b> (one-time infra fix)<br/>
      <p>Set <code>CODER_WILDCARD_ACCESS_URL</code> (plus wildcard DNS/TLS, e.g. <code>*.coder.example.com</code>).
      Ports then proxy at a subdomain root and this panel works with no local forwarding.</p>
    </div>
  </div>
  <script>
    const vscode = acquireVsCodeApi();
    document.getElementById("useLocalhost").addEventListener("click", () => vscode.postMessage({ type: "useLocalhost" }));
  </script>
</body>
</html>`;
}

function renderErrorScreen(message: string): string {
  const escaped = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';" />
  <style>
    html, body { height: 100%; margin: 0; }
    body {
      display: flex; align-items: center; justify-content: center;
      background: var(--vscode-editor-background, #111);
      color: var(--vscode-foreground, #ccc);
      font-family: var(--vscode-font-family, sans-serif);
    }
    .box { width: min(480px, 85vw); text-align: center; }
    .title { font-size: 16px; font-weight: 600; color: var(--vscode-errorForeground, #f66); margin-bottom: 12px; }
    .msg { font-size: 12.5px; opacity: 0.85; line-height: 1.5; word-break: break-word; }
    .actions { margin-top: 20px; display: flex; gap: 10px; justify-content: center; }
    button {
      padding: 6px 14px; border: none; border-radius: 3px; cursor: pointer; font-size: 12.5px;
      background: var(--vscode-button-background, #7c3aed);
      color: var(--vscode-button-foreground, #fff);
    }
    button.secondary {
      background: var(--vscode-button-secondaryBackground, #3a3a3a);
      color: var(--vscode-button-secondaryForeground, #ccc);
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="title">T3 Code failed to start</div>
    <div class="msg">${escaped}</div>
    <div class="actions">
      <button id="retry">Retry</button>
      <button id="logs" class="secondary">Show Logs</button>
    </div>
  </div>
  <script>
    const vscode = acquireVsCodeApi();
    document.getElementById("retry").addEventListener("click", () => vscode.postMessage({ type: "retry" }));
    document.getElementById("logs").addEventListener("click", () => vscode.postMessage({ type: "showLogs" }));
  </script>
</body>
</html>`;
}

function renderWebview(url: string): string {
  const origin = new URL(url).origin;
  return /* html */ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; frame-src ${origin} https: http://localhost:* http://127.0.0.1:*; style-src 'unsafe-inline';" />
  <style>
    html, body { height: 100%; margin: 0; padding: 0; overflow: hidden; background: #111; }
    iframe { width: 100%; height: 100%; border: none; display: block; }
    .fallback {
      position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
      color: #999; font-family: sans-serif; font-size: 13px; z-index: -1; text-align: center; padding: 2rem;
    }
  </style>
</head>
<body>
  <div class="fallback">
    Loading T3 Code…<br /><br />
    If nothing appears, the app may refuse to load in an iframe —
    run “T3 Code: Open in External Browser” from the command palette instead.
  </div>
  <iframe src="${url}" allow="clipboard-read; clipboard-write"></iframe>
</body>
</html>`;
}
