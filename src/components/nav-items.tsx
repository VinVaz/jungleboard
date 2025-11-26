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
          {sidebarItems.map(({ id, href, icon, label }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton asChild>
                <Link key={id} to={href} activeOptions={{ exact: true }}>
                  <img src={icon} className="size-5" />
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
