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
        url: "https://www.rjuresanguinis.com/_next/image?url=%2Flogo.png&w=256&q=75",
        width: 256,
        height: 256,
        alt: "Jure Sanguinis - Resources",
      },
    ],
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesSection />;
}
