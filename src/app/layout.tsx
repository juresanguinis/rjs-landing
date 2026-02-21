import type { Metadata } from "next";
import "./globals.css";
import { Bentham } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const bentham = Bentham({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rjuresanguinis.com"),
  title: {
    default: "Jure Sanguinis - Italian Citizenship Guide",
    template: "%s | Jure Sanguinis",
  },
  description:
    "Discover how to claim your Italian citizenship through Jure Sanguinis with our detailed guides and community support.",
  applicationName: "Jure Sanguinis Guide",
  keywords: [
    "Jure Sanguinis",
    "Italian Citizenship",
    "Dual Citizenship",
    "Italian Descent",
    "Citizenship by Blood",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jure Sanguinis - Italian Citizenship Guide",
    description:
      "Discover how to claim your Italian citizenship through Jure Sanguinis with our detailed guides and community support.",
    url: "https://rjuresanguinis.com/",
    siteName: "Jure Sanguinis Guide",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
        alt: "Jure Sanguinis - Italian Citizenship Guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jure Sanguinis - Italian Citizenship Guide",
    description:
      "Discover how to claim your Italian citizenship through Jure Sanguinis with our detailed guides and community support.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased scroll-smooth ${bentham.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-[152px] md:pt-[150px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}