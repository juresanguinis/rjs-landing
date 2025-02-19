"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundSection() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-js-platinum text-center p-6"
    >
      <h1 className="text-5xl font-bold text-js-black">404</h1>
      <p className="text-lg text-js-gray mt-4">Page not found.</p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-js-green text-js-platinum rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-200"
        >
          Go to Home
        </Link>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-js-red text-js-platinum rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </motion.div>
  );
}
