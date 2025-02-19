"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_ROUTES } from "@/utils/constants";

export default function ExploreServices() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-js-black"
        >
          Explore Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-js-gray mt-4 max-w-2xl mx-auto"
        >
          Discover the different resources and guides we offer to help you through the process of obtaining Italian citizenship.
        </motion.p>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NAV_ROUTES.filter(route => route.href !== "/").map((route, index) => (
          <motion.div
            key={route.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link
              href={route.href}
              className="block bg-js-platinum hover:bg-js-gray text-js-black p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <route.icon className="w-8 h-8 text-js-green" />
                <h3 className="text-xl font-semibold">{route.label}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
