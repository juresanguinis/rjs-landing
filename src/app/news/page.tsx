import NewsSection from "@/pages-sections/news/NewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - Jure Sanguinis",
  description:
    "Stay updated with the latest news and developments about Jure Sanguinis and Italian citizenship by descent.",
  keywords: [
    "Jure Sanguinis News",
    "Italian Citizenship Updates",
    "Dual Citizenship News",
    "Italian Ancestry Updates",
  ],
  openGraph: {
    title: "News & Updates - Jure Sanguinis",
    description:
      "Check out the latest news and updates about Italian citizenship by descent, legal changes, and community insights.",
    url: "https://rjuresanguinis.com/news",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
        alt: "Jure Sanguinis - News & Updates",
      },
    ],
    type: "website",
  },
};

export default function NewsPage() {
  return <NewsSection />;
}
