"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#fdf8ef_0%,_#f7f1e7_40%,_#f3ebe0_100%)] py-24 px-6">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-8 h-48 w-[620px] -translate-x-1/2 rounded-full bg-js-green/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`text-4xl md:text-6xl font-semibold text-js-black font-["Bodoni_MT","Didot","Times_New_Roman",serif]`}
        >
          Italian citizenship by descent, clearly explained.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-js-gray mt-5 max-w-2xl mx-auto"
        >
          Learn how the Jure Sanguinis process works, what documents matter most, and where to find
          trusted guidance from a community that has done it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/about-js"
            className="rounded-full bg-js-black px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(35,31,32,0.18)] transition hover:-translate-y-0.5"
          >
            Start with eligibility
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-js-black/20 bg-white px-6 py-3 text-sm font-semibold text-js-black transition hover:border-js-black/40"
          >
            Browse resources
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
