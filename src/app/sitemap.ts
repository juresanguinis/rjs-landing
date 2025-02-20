import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rjuresanguinis.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about-js`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/community`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/faq`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/news`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/resources`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/tracker`, lastModified: new Date().toISOString() },
  ];
}
