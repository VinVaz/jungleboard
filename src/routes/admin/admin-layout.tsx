import { Outlet } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "../../components/ui/sidebar";
import MobileSidebar from "../../components/mobile-sidebar";
import NavItems from "../../components/nav-items";
import SidebarHeader from "../../components/sidebar-header";
import SidebarFooter from "../../components/sidebar-footer";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Mobile Sidebar */}
        <MobileSidebar />

        {/* Desktop Sidebar */}
        <Sidebar className="hidden lg:flex w-64 border-r bg-background">
          <SidebarHeader />
          <SidebarContent>
            <NavItems />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
