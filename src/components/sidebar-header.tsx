import { Link } from "@tanstack/react-router";
import { SidebarHeader as MySidebarHeader } from "./ui/sidebar";

export default function SidebarHeader() {
  return (
    <MySidebarHeader>
      <Link to="/" className="flex items-center gap-2 p-4">
        <img src="/assets/images/logo.png" className="size-10" />
        <h1 className="font-semibold text-xl">JungleBoard</h1>
      </Link>
    </MySidebarHeader>
  );
}
