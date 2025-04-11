"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Works", path: "/works" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Create a handler function to close the menu
  const handleRouteChange = () => {
    if (open) setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background">
      <div className="flex items-center justify-between py-5 px-5 md:px-10">
        <Link
          href="/"
          className="font-display text-xl font-medium transition-opacity hover:opacity-80"
          onClick={handleRouteChange}
        >
          YUYA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-base font-medium transition-opacity hover:opacity-80 ${
                    pathname === item.path ? "opacity-100" : "opacity-70"
                  }`}
                  onClick={handleRouteChange}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger aria-label="Menu" className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] border-none">
            <nav className="mt-10">
              <ul className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`block text-lg font-medium transition-opacity hover:opacity-80 ${
                        pathname === item.path ? "opacity-100" : "opacity-70"
                      }`}
                      onClick={handleRouteChange}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
