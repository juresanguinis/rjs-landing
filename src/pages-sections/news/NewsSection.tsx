"use client";

import { motion } from "framer-motion";

export default function NewsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-js-black"
        >
          Latest News & Updates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-js-gray mt-4 max-w-2xl mx-auto"
        >
          Stay tuned! This section will be updated with the latest news and announcements related to Jure Sanguinis.
        </motion.p>
      </div>
    </section>
  );
}
