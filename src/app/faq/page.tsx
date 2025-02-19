import FAQSection from "@/pages-sections/faq/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions – Jure Sanguinis",
  description:
    "Find answers to common questions about obtaining Italian citizenship through Jure Sanguinis.",
  keywords: [
    "Jure Sanguinis FAQ",
    "Italian Citizenship Questions",
    "Citizenship by Descent FAQ",
    "Italian Ancestry FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions – Jure Sanguinis",
    description:
      "Explore our FAQ section to get answers to your questions about Italian citizenship by descent.",
    url: "https://rjuresanguinis.com/faq",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
        alt: "Jure Sanguinis - FAQ",
      },
    ],
    type: "website",
  },
};

export default function FAQPage() {
  return <FAQSection />;
}
