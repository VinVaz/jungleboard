// router.ts
import { Router, Route, RootRoute } from "@tanstack/react-router";
import App from "./App";
import Home from "./routes/home";
import About from "./routes/about";

const rootRoute = new RootRoute({
  component: App, // <-- your App stays as layout
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
