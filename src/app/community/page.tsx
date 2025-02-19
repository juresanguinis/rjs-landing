import CommunitySection from "@/pages-sections/community/CommunitySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Discussions – Jure Sanguinis Reddit Highlights",
  description:
    "Explore the latest community discussions, legal updates, and experiences shared by users on the Jure Sanguinis subreddit.",
  keywords: [
    "Jure Sanguinis",
    "Italian Citizenship",
    "Reddit Discussions",
    "Italian Ancestry",
    "Dual Citizenship",
    "Citizenship by Descent",
    "Jure Sanguinis Process",
    "Applying for Italian Citizenship",
    "Reddit Immigration Advice",
  ],
  openGraph: {
    title: "Community Discussions – Jure Sanguinis Reddit Highlights",
    description:
      "Stay informed with trending discussions, expert advice, and real-world experiences about obtaining Italian citizenship by descent.",
    url: "https://rjuresanguinis.com/community",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "/assets/JS_banner_208_desktop.png",
        width: 1200,
        height: 630,
        alt: "Jure Sanguinis - Community Highlights",
      },
    ],
    type: "website",
  },
};

export default function CommunityPage() {
  return <CommunitySection />;
}
