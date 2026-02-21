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
          className={`text-2xl md:text-3xl font-semibold text-js-black font-["Bodoni_MT","Didot","Times_New_Roman",serif]`}
        >
          Site Sections
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-base text-js-gray mt-4 max-w-2xl mx-auto"
        >
          A quick entry point to every section of the guide.
        </motion.p>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {NAV_ROUTES.filter(route => route.href !== "/").map((route, index) => (
          <motion.div
            key={route.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link
              href={route.href}
              className="group block rounded-2xl border border-js-black/10 bg-white p-5 text-js-black shadow-[0_10px_24px_rgba(35,31,32,0.06)] transition hover:-translate-y-1 hover:border-js-black/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-js-black/10 bg-js-platinum text-js-green">
                    <route.icon className="h-5 w-5" />
                  </span>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{route.label}</h3>
                    <p className="text-xs text-js-gray">Open section</p>
                  </div>
                </div>
                <span className="text-lg text-js-gray transition group-hover:text-js-black">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
