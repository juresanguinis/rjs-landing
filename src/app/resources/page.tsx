import ResourcesSection from "@/pages-sections/resources/ResourcesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources – Jure Sanguinis",
  description:
    "Explore essential tools, guides, and resources to help you through the Italian citizenship recognition process.",
  keywords: [
    "Jure Sanguinis Resources",
    "Italian Citizenship Tools",
    "Citizenship by Descent Guides",
    "Italian Ancestry Resources",
  ],
  openGraph: {
    title: "Resources – Jure Sanguinis",
    description:
      "Browse our collection of helpful tools and guides designed to make your Jure Sanguinis journey easier.",
    url: "https://rjuresanguinis.com/resources",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
        alt: "Jure Sanguinis - Resources",
      },
    ],
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesSection />;
}
