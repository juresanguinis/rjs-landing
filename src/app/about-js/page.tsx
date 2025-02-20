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
        url: "https://www.rjuresanguinis.com/_next/image?url=%2Flogo.png&w=256&q=75",
        width: 256,
        height: 256,
        alt: "Jure Sanguinis - Italian Citizenship Guide",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutJsSection />;
}