"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from "@/data/navigation-links";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

function AppNavigation() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navigationLinks.map((navigationLink) => {
            const isContact = navigationLink.label === "Contact";

            return (
              <NavigationMenuItem key={navigationLink.href}>
                <NavigationMenuLink
                  className={
                    isContact
                      ? buttonVariants({ variant: "default" })
                      : navigationMenuTriggerStyle()
                  }
                  asChild
                >
                  <Link href={navigationLink.href}>{navigationLink.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="block md:hidden" asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              To navigate the page click the link below.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4 pt-0">
            <nav>
              <ul className="grid gap-4">
                {navigationLinks.map((navigationLink) => {
                  return (
                    <li
                      key={navigationLink.href}
                      className="text-sm font-medium"
                    >
                      <Link
                        href={navigationLink.href}
                        onClick={() => {
                          setIsSheetOpen(false);
                        }}
                      >
                        {navigationLink.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { AppNavigation };
