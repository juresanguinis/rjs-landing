import type { Metadata } from "next";
import "./globals.css";
import { Bentham } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const bentham = Bentham({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jure Sanguinis - Italian Citizenship Guide",
  description: "Discover how to claim your Italian citizenship through Jure Sanguinis with our detailed guides and community support.",
  keywords: [
    "Jure Sanguinis",
    "Italian Citizenship",
    "Dual Citizenship",
    "Italian Descent",
    "Citizenship by Blood",
  ],
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