"use client";

import Link from "next/link";

interface ResourceItemProps {
  title: string;
  description: string;
  url: string;
}

export default function ResourceItem({ title, description, url }: ResourceItemProps) {
  return (
    <div className="bg-js-platinum p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-js-black">{title}</h3>
      <p className="text-js-gray mt-2">{description}</p>
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-js-green font-semibold hover:underline"
        >
          Learn More →
        </Link>
      )}
    </div>
  );
}
