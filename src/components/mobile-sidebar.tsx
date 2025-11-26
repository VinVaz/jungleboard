"use client";

import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavItems from "./nav-items";

export default function MobileSidebar() {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 border-b">
      <Link to="/" className="flex items-center gap-2">
        <img src="/assets/icons/logo.svg" className="size-7" />
        <h1 className="font-semibold text-lg">Tourvisto</h1>
      </Link>

      <Sheet>
        <SheetTrigger>
          <img src="/assets/icons/menu.svg" className="size-7" />
        </SheetTrigger>

        <SheetContent side="left" className="p-0 w-64">
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
}
