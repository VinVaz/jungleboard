import {
  Router,
  Outlet,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SidebarProvider } from "./components/ui/sidebar";

/* ------------------------ ROOT ------------------------ */

const rootRoute = createRootRoute({
  component: () => (
    <SidebarProvider>
      <Outlet />
      <TanStackRouterDevtools />
    </SidebarProvider>
  ),
});

/* ------------------------ PUBLIC ROOT LAYOUT ------------------------ */

import RootLayout from "./routes/root/page-layout";
import GamesPage from "./routes/root/games-page";
import SignIn from "./routes/root/sign-in";

const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "root-layout",
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: "/",
  component: GamesPage,
});

const signInRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: "sign-in",
  component: SignIn,
});

/* ------------------------ ADMIN LAYOUT ------------------------ */

import AdminLayout from "./routes/admin/admin-layout";
import Dashboard from "./routes/admin/dashboard";
import Games from "./routes/admin/games";
import Providers from "./routes/admin/providers";
import Players from "./routes/admin/players";
import Transactions from "./routes/admin/transactions";

const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin-layout",
  component: AdminLayout,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "dashboard",
  component: Dashboard,
});

const adminGamesRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "games",
  component: Games,
});

const adminProvidersRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "providers",
  component: Providers,
});

const adminPlayersRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "players",
  component: Players,
});

const adminTransactionsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: "transactions",
  component: Transactions,
});

/* ------------------------ ROUTE TREE ------------------------ */

const routeTree = rootRoute.addChildren([
  publicLayoutRoute.addChildren([homeRoute, signInRoute]),

  adminLayoutRoute.addChildren([
    adminDashboardRoute,
    adminGamesRoute,
    adminProvidersRoute,
    adminPlayersRoute,
    adminTransactionsRoute,
  ]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
