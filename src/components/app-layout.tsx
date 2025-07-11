"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Presentation,
  Mail,
  PanelLeft,
  UserCircle,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/concepts", icon: Presentation, label: "Case Studies" },
  { href: "/about", icon: UserCircle, label: "About" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

function NavLink({ href, icon: Icon, label, pathname, inSheet = false }: { href: string; icon: React.ElementType; label: string; pathname: string; inSheet?: boolean; }) {
  const isActive = pathname === href;
  
  if (inSheet) {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          isActive && "bg-muted text-primary"
        )}
      >
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
        isActive && "text-primary"
      )}
    >
      <Icon className="mr-2 h-4 w-4 transition-all group-hover:scale-110" />
      <span>{label}</span>
    </Link>
  );
}


function NavLinks({ inSheet = false }: { inSheet?: boolean }) {
  const pathname = usePathname();
  return (
    <nav className={cn(
      "flex gap-2",
      inSheet ? "flex-col" : "items-center"
    )}>
      {navItems.map((item) => (
        <NavLink key={item.href} {...item} pathname={pathname} inSheet={inSheet} />
      ))}
    </nav>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline-block">David's Data Analysis Hub</span>
        </Link>
        
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
             <div className="flex h-16 items-center border-b px-6">
                 <Link href="/" className="flex items-center gap-2 font-semibold">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <span>Data Portfolio</span>
                </Link>
            </div>
            <div className="p-4">
              <NavLinks inSheet={true} />
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
