"use client";

import { ABOUT_STEPS } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutJsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-js-black text-center"
        >
          About Jure Sanguinis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-js-gray mt-4 max-w-3xl mx-auto text-center"
        >
          Jure Sanguinis, meaning &quot;right of blood,&quot; is the legal principle that allows individuals of Italian descent to claim **Italian citizenship** through their ancestry. Our community, **r/JureSanguinis**, provides comprehensive guidance to help you navigate the process.
        </motion.p>

        {/* Steps Breakdown */}
        <div className="mt-10 space-y-12">
          {ABOUT_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              className="bg-js-platinum p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-js-black">{step.title}</h3>
              <p className="text-js-gray mt-2">{step.description}</p>
              <ul className="list-disc list-inside mt-2 text-js-green">
                {step.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
