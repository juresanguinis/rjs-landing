"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NAV_ROUTES } from "@/utils/constants";

export default function DesktopNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-screen bg-js-platinum shadow-md z-50"
    >
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

        {/* Navigation */}
        <div className="hidden md:flex gap-6">
          {NAV_ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-js-black font-medium hover:text-js-red transition-colors"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
