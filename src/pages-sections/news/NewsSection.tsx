"use client";

import { motion } from "framer-motion";
import { NEWS_ITEMS } from "@/utils/constants";

export default function NewsSection() {
  const heroStory = NEWS_ITEMS[0];
  const topStories = NEWS_ITEMS.slice(1, 5);
  const briefs = NEWS_ITEMS.slice(5, 12);
  const editorial = NEWS_ITEMS.slice(12, 15);

  return (
    <section className="py-16 px-6 bg-[radial-gradient(ellipse_at_top,_#fdf8ef_0%,_#f6eee1_50%,_#f2e6d6_100%)]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 border-y border-js-black/20 py-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-js-gray">The Jure Sanguinis Gazette</p>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`text-4xl md:text-6xl font-bold text-js-black font-["Bodoni_MT","Didot","Times_New_Roman",serif]`}
              >
                February 2026 Edition
              </motion.h2>
            </div>
            <div className="text-sm text-js-gray flex items-center gap-3">
              <span className="uppercase tracking-[0.2em]">Monthly Briefing</span>
              <span className="h-4 w-px bg-js-black/20" />
              <span>Curated from r/juresanguinis</span>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-base md:text-lg text-js-gray max-w-3xl"
          >
            The most relevant community news, legal updates, and recognition stories this month.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 space-y-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur border border-js-black/10 shadow-[0_12px_40px_rgba(35,31,32,0.08)] rounded-2xl p-8"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-js-gray">
                <span>{heroStory.category}</span>
                <span>Feature</span>
              </div>
              <h3 className={`mt-4 text-3xl md:text-4xl font-semibold text-js-black font-["Bodoni_MT","Didot","Times_New_Roman",serif]`}>
                {heroStory.title}
              </h3>
              <p className="mt-4 text-base md:text-lg text-js-gray">{heroStory.summary}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm text-js-gray">By {heroStory.author}</span>
                <a
                  href={heroStory.url}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-js-black border-b border-js-black/40 hover:border-js-black"
                >
                  Read the full thread
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>

            <div>
              <div className="flex items-center justify-between border-b border-js-black/10 pb-3">
                <h4 className="text-lg font-semibold uppercase tracking-[0.2em] text-js-black">
                  Top Stories
                </h4>
                <span className="text-xs uppercase tracking-[0.2em] text-js-gray">This month</span>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {topStories.map((story, index) => (
                  <motion.article
                    key={story.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    className="bg-white/70 border border-js-black/10 rounded-xl p-5 shadow-[0_8px_24px_rgba(35,31,32,0.05)]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-js-gray">{story.category}</p>
                    <h5 className="mt-3 text-xl font-semibold text-js-black">
                      {story.title}
                    </h5>
                    <p className="mt-3 text-sm text-js-gray">{story.summary}</p>
                    <a
                      href={story.url}
                      className="mt-4 inline-flex text-sm font-semibold text-js-black border-b border-js-black/30 hover:border-js-black"
                    >
                      Continue reading
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/80 border border-js-black/10 rounded-2xl p-6 shadow-[0_12px_30px_rgba(35,31,32,0.06)]">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-js-black">Briefs</h4>
                <span className="text-xs text-js-gray">Most relevant</span>
              </div>
              <div className="mt-4 space-y-4">
                {briefs.map((story) => (
                  <div key={story.title} className="border-b border-js-black/10 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-js-gray">{story.category}</p>
                    <a href={story.url} className="mt-2 block text-base font-semibold text-js-black">
                      {story.title}
                    </a>
                    <p className="mt-2 text-sm text-js-gray">{story.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-js-black text-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(35,31,32,0.18)]">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Editorial Desk</h4>
              <p className="mt-3 text-xl font-semibold">Legal signals worth watching</p>
              <p className="mt-3 text-sm text-white/80">
                A quick scan of critical legal developments shaping the next quarter.
              </p>
              <div className="mt-4 space-y-3">
                {editorial.map((story) => (
                  <a
                    key={story.title}
                    href={story.url}
                    className="block text-sm font-semibold text-white/90 hover:text-white"
                  >
                    {story.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
