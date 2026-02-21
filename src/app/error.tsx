"use client";

import ErrorSection from "@/pages-sections/error/Error";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
  description: "The application encountered an unexpected error.",
  robots: {
    index: false,
    follow: false,
  },
};

const Error = () => {
  return <ErrorSection />;
};

export default Error;