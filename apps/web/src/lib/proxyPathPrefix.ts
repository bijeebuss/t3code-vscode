/**
 * [t3code-vscode patch] Path-based reverse proxy support (code-server /
 * Coder expose ports under e.g. …/proxy/3773/). Mirrors
 * packages/client-runtime/src/proxyPathPrefix.ts for use in the web app.
 */

const PROXY_PREFIX_RE = /^(.*\/proxy\/\d+)(?:\/|$)/;

export function proxyPathPrefixOf(pathname: string): string {
  const match = pathname.match(PROXY_PREFIX_RE);
  return match ? match[1] : "";
}

/** The proxy prefix the current page is being served under, or "". */
export function currentProxyPathPrefix(): string {
  return proxyPathPrefixOf(window.location.pathname);
}

export function withProxyPrefixedPath(url: URL, suffix: string): void {
  url.pathname = proxyPathPrefixOf(url.pathname) + suffix;
}
