"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NAV_ROUTES } from "@/utils/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-js-platinum shadow-md z-50 md:hidden">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Jure Sanguinis Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger aria-label="Right Navigation Menu Button">
            <Menu className="text-js-black w-8 h-8" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-js-platinum text-js-black p-6">
            <SheetTitle>
              {/* Logo inside menu */}
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Jure Sanguinis Logo"
                  width={140}
                  height={50}
                />
              </div>
            </SheetTitle>
            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
              {NAV_ROUTES.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center gap-3 text-lg font-medium hover:text-js-red transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <route.icon className="w-6 h-6" />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
