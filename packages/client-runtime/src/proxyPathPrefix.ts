/**
 * [t3code-vscode patch] Support for path-based reverse proxies.
 *
 * Environments like code-server and Coder expose ports under a path prefix
 * (e.g. /@user/workspace.agent/apps/code-server/proxy/3773/). The stock
 * client assumes the server lives at an origin root; these helpers detect a
 * /proxy/<port> prefix in a URL path so request builders can preserve it.
 * URLs without such a prefix behave exactly as before.
 */

const PROXY_PREFIX_RE = /^(.*\/proxy\/\d+)(?:\/|$)/;

/** Extract the /…/proxy/<port> prefix from a URL path, or "" if none. */
export function proxyPathPrefixOf(pathname: string): string {
  const match = pathname.match(PROXY_PREFIX_RE);
  return match ? match[1] : "";
}

/** Append `suffix` (which must start with "/") after any proxy prefix in `url`. */
export function withProxyPrefixedPath(url: URL, suffix: string): void {
  url.pathname = proxyPathPrefixOf(url.pathname) + suffix;
}
