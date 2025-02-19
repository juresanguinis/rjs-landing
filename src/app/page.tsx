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
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
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
