# T3 Code for VS Code

Runs [T3 Code](https://github.com/pingdotgg/t3code) — a GUI for coding agents (Claude Code, Codex, Cursor, OpenCode) — inside a VS Code panel.

## How it works

T3 Code ships as a local server (`t3` on npm) with a web UI; its official desktop app is an Electron shell around that server. This extension does the same thing inside VS Code:

1. Installs a pinned `t3` into the extension's storage (first run only) and overlays a **patched web client** (see below)
2. Spawns `t3 serve <workspace-folder>` headlessly and captures the printed pairing URL (which carries the auth token)
3. Renders the UI in a webview iframe (tunneled via `asExternalUri`, so it also works in remote/SSH/codespaces/code-server sessions)

### The patched web client

Stock t3 loads assets and API endpoints from absolute paths (`/assets/…`, `/api/…`, `/ws`), which breaks behind **path-based port proxies** (code-server and Coder expose ports at `…/proxy/<port>/`). The bundled client is built from t3's source with runtime detection of a `/proxy/<port>` prefix: a `<base>` tag anchors assets, the router gets a matching `basepath`, and all API/WS URL builders preserve the prefix. Outside a path proxy it behaves identically to stock. Patches live in `patches/` as a reference diff.

## Requirements

- Node.js `>= 24.10` on your PATH (the `t3` server requires it)
- At least one agent CLI installed and authenticated (e.g. `claude`, `codex`, `cursor-agent`, or `opencode`)

## Usage

- **T3 Code: Open** — start the server (first run downloads `t3` via npx) and open the panel
- **T3 Code: Open in External Browser** — same server, but in your browser (fallback if the app refuses to render in an iframe)
- **T3 Code: Restart Server / Stop Server / Show Server Logs**

## Settings

| Setting | Default | Description |
| --- | --- | --- |
| `t3code.command` | `npx -y t3@latest` | How to launch the server. Set to `t3` if installed globally. |
| `t3code.port` | `0` | Fixed port, or `0` to auto-pick. |
| `t3code.stopServerOnExit` | `true` | Kill the server when VS Code closes. |

## Build & install

```bash
npm install
npm run compile
npm run package        # produces t3code-vscode-0.1.0.vsix
code --install-extension t3code-vscode-0.1.0.vsix
```
