import AboutJsSection from "@/pages-sections/aboutjs/AboutJsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jure Sanguinis - Italian Citizenship by Descent",
  description:
    "Learn about Jure Sanguinis, the process of obtaining Italian citizenship by descent. Explore eligibility, required documents, and application methods.",
  keywords: [
    "Jure Sanguinis",
    "Italian Citizenship",
    "Italian Dual Citizenship",
    "Citizenship by Descent",
    "Italian Ancestry",
    "How to get Italian citizenship",
    "Applying for Italian citizenship",
    "Italian Consulate",
    "Jure Sanguinis Process",
    "Jure Sanguinis Eligibility",
  ],
  openGraph: {
    title: "About Jure Sanguinis - Italian Citizenship by Descent",
    description:
      "Explore everything about Jure Sanguinis, from eligibility to application steps, and learn how to claim your Italian citizenship through ancestry.",
    url: "https://rjuresanguinis.com/about-js",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
        alt: "Jure Sanguinis - Italian Citizenship Guide",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutJsSection />;
}