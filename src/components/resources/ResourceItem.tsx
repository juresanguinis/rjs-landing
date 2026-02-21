"use client";

import Link from "next/link";

interface ResourceItemProps {
  title: string;
  description: string;
  url: string;
}

export default function ResourceItem({ title, description, url }: ResourceItemProps) {
  const badge = title.trim().charAt(0).toUpperCase();

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-js-black/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(35,31,32,0.08)] transition duration-300 hover:-translate-y-1 hover:border-js-black/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,133,88,0.18),_transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-js-gray">Resource</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-js-black/10 bg-white text-sm font-semibold text-js-black">
          {badge}
        </span>
      </div>
      <h3
        className={`mt-4 text-2xl font-semibold text-js-black font-["Bodoni_MT","Didot","Times_New_Roman",serif]`}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm text-js-gray leading-relaxed">{description}</p>
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-js-black/10 bg-white px-4 py-2 text-sm font-semibold text-js-black shadow-[0_8px_18px_rgba(35,31,32,0.08)] transition duration-200 hover:border-js-black/30 hover:text-js-green"
        >
          View resource
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
