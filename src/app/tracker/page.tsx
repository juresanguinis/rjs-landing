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
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
        alt: "Jure Sanguinis - Tracker",
      },
    ],
    type: "website",
  },
};

export default function TrackerPage() {
  return <TrackerSection />;
}
