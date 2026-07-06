import { createRouter, RouterHistory } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

import { currentProxyPathPrefix } from "./lib/proxyPathPrefix.ts";

export function getRouter(history: RouterHistory) {
  // [t3code-vscode patch] route correctly when served behind a path-based
  // port proxy (code-server/Coder /proxy/<port>/ prefix)
  const basepath = currentProxyPathPrefix();
  return createRouter({
    routeTree,
    history,
    context: {},
    ...(basepath ? { basepath } : {}),
  });
}

export type AppRouter = ReturnType<typeof getRouter>;

declare module "@tanstack/react-router" {
  interface Register {
    router: AppRouter;
  }
}
