"use client";

import Image from "next/image";
import Link from "next/link";

// Statick images import
import desktopBanner from '@/assets/JS_banner_208_desktop.png';
import mobileBanner from '@/assets/JS_banner_mobile.jpg';

export default function Banner() {
  return (
    <section className="relative w-screen h-[50vh] md:h-[10vh] overflow-hidden">
      <Link href="https://www.reddit.com/r/juresanguinis/" target="_blank" rel="noopener noreferrer">
        <Image
          src={desktopBanner}
          alt="Jure Sanguinis Banner"
          fill
          className="hidden md:block object-cover"
          priority
        />
        <Image
          src={mobileBanner}
          alt="Jure Sanguinis Mobile Banner"
          fill
          className="md:hidden object-cover"
          priority
        />
      </Link>
    </section>
  );
}
