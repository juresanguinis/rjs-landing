"use client";

import { motion } from "framer-motion";
import EmbededPost from "@/components/reddit/EmbededPost";
import { EMBEDED_POSTS } from "@/utils/constants/";

export default function CommunitySection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-js-black"
        >
          Community Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-js-gray mt-4 max-w-2xl mx-auto"
        >
          Stay up to date with the latest discussions, legal updates, and success stories from our vibrant Jure Sanguinis community.
        </motion.p>
      </div>

      {/* Reddit Posts Grid */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EMBEDED_POSTS.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <EmbededPost
              title={post.title}
              postUrl={post.post}
              user={post.user}
              userUrl={post.by}
              sub={post.sub}
              subUrl={post.in}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
