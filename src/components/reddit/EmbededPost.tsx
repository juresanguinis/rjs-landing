"use client";

import { useEffect } from "react";

interface EmbededPostProps {
  title: string;
  postUrl: string;
  user: string;
  userUrl: string;
  sub: string;
  subUrl: string;
}

export default function EmbededPost({
  title,
  postUrl,
  user,
  userUrl,
  sub,
  subUrl
}: EmbededPostProps) {
  useEffect(() => {
    // Dynamically load the Reddit embed script
    const script = document.createElement("script");
    script.src = "https://embed.reddit.com/widgets.js";
    script.async = true;
    script.charset = "UTF-8";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto my-6">
      <blockquote className="reddit-embed-bq" style={{ height: "316px" }} data-embed-height="316">
        <a href={postUrl}>{title}</a>
        <br /> by <a href={userUrl}>{user}</a> in <a href={subUrl}>{sub}</a>
      </blockquote>
    </div>
  );
}
