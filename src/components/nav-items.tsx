import { Link } from "@tanstack/react-router";
import { sidebarItems } from "../constants";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
} from "./ui/sidebar";

export default function NavItems() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {sidebarItems.map(({ id, href, icon: Icon, label }) => (
            <SidebarMenuItem
              key={label}
              className="py-3 mb-2 rounded-2xl bg-sidebar-primary cursor-pointer
           text-sidebar-foreground hover:text-sidebar-accent-overlay
           hover:bg-sidebar-accent transition"
            >
              <SidebarMenuButton asChild>
                <Link
                  key={id}
                  to={href}
                  activeOptions={{ exact: true }}
                  className="flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  {label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
