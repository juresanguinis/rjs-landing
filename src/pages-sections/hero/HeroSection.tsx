"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-js-platinum py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-js-black"
      >
        Unlock Your Italian Heritage
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-js-gray mt-4 max-w-2xl"
      >
        Learn how to obtain your **Italian citizenship by descent (Jure Sanguinis)** with expert guidance and a helpful community.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="mt-6"
      >
        <Link
          href="/about-js"
          className="px-6 py-3 bg-js-green text-js-platinum rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-200"
        >
          Start Your Journey
        </Link>
      </motion.div>
    </section>
  );
}
