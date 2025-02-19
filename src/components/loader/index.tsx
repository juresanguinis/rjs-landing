'use client'

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-js-platinum">
      <motion.div
        className="w-16 h-16 border-4 border-js-green border-t-js-red rounded-full animate-spin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Loader;
