"use client";

import { motion } from "framer-motion";
import { RESOURCES } from "@/utils/constants";
import ResourceItem from "@/components/resources/ResourceItem";

export default function ResourcesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-js-black"
        >
          Helpful Resources
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-js-gray mt-4 max-w-2xl mx-auto"
        >
          Explore tools and guides to help you navigate the Jure Sanguinis process with ease.
        </motion.p>
      </div>

      {/* Resource Items Grid */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          >
            <ResourceItem {...resource} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
