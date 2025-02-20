import TrackerSection from "@/pages-sections/tracker/TrackerSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracker - Jure Sanguinis",
  description:
    "This section is currently under construction. A tracker for Jure Sanguinis applications will be available soon.",
  keywords: [
    "Jure Sanguinis Tracker",
    "Italian Citizenship Progress",
    "Application Tracking",
    "Citizenship Status",
  ],
  openGraph: {
    title: "Tracker - Jure Sanguinis",
    description:
      "The Jure Sanguinis application tracker is currently under construction. Stay tuned for updates.",
    url: "https://rjuresanguinis.com/tracker",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "https://www.rjuresanguinis.com/_next/image?url=%2Flogo.png&w=256&q=75",
        width: 256,
        height: 256,
        alt: "Jure Sanguinis - Tracker",
      },
    ],
    type: "website",
  },
};

export default function TrackerPage() {
  return <TrackerSection />;
}
