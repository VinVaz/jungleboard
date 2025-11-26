import { Outlet } from "@tanstack/react-router";

export default function RootLayout() {
  return (
    <div>
      <header>Public Header</header>
      <Outlet />
    </div>
  );
}
