'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function ErrorSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-js-platinum text-center p-6"
    >
      <h1 className="text-5xl font-bold text-js-black">Oops!</h1>
      <p className="text-lg text-js-gray mt-4">
        Something went wrong. Please try again later.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-js-green text-js-platinum rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-200"
      >
        Back to Home
      </Link>
    </motion.div>
  );
}
