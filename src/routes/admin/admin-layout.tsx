import { Outlet } from "@tanstack/react-router";

export default function AdminLayout() {
  return (
    <div>
      <nav>Admin Sidebar</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
