export * from "@t3tools/shared/advertisedEndpoint";

import { withProxyPrefixedPath } from "../proxyPathPrefix.ts";

export const environmentEndpointUrl = (httpBaseUrl: string, pathname: string): string => {
  const url = new URL(httpBaseUrl);
  // [t3code-vscode patch] keep a /proxy/<port> path prefix if present
  withProxyPrefixedPath(url, pathname);
  url.search = "";
  url.hash = "";
  return url.toString();
};
