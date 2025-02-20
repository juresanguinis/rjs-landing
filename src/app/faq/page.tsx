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
        url: "https://www.rjuresanguinis.com/_next/image?url=%2Flogo.png&w=256&q=75",
        width: 256,
        height: 256,
        alt: "Jure Sanguinis - FAQ",
      },
    ],
    type: "website",
  },
};

export default function FAQPage() {
  return <FAQSection />;
}
