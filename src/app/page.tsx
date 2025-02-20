import Banner from "@/pages-sections/hero/Banner";
import HeroSection from "@/pages-sections/hero/HeroSection";
import ExploreServices from "@/pages-sections/hero/ExploreServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jure Sanguinis - Claim Your Italian Citizenship by Descent",
  description:
    "Discover how to obtain Italian citizenship through Jure Sanguinis. Explore eligibility, step-by-step guidance, and community support to reclaim your Italian heritage.",
  keywords: [
    "Jure Sanguinis",
    "Italian Citizenship",
    "Citizenship by Descent",
    "Italian Ancestry",
    "Dual Citizenship",
    "Italian Citizenship Guide",
    "How to get Italian citizenship",
    "Jure Sanguinis Process",
    "Eligibility for Italian Citizenship",
  ],
  openGraph: {
    title: "Jure Sanguinis - Claim Your Italian Citizenship by Descent",
    description:
      "Learn how to claim your Italian citizenship through Jure Sanguinis. Follow our step-by-step guide, understand eligibility, and join a supportive community.",
    url: "https://rjuresanguinis.com/",
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

export default function HeroPage() {
  return (
    <>
      <Banner />
      <HeroSection />
      <ExploreServices />
    </>
  );
}
