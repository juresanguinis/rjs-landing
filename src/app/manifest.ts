import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jure Sanguinis Guide",
    short_name: "JS Guide",
    description:
      "Your comprehensive guide to obtaining Italian citizenship by descent (Jure Sanguinis).",
    start_url: "/",
    display: "standalone",
    background_color: "#E6E6E6", // js-platinum
    theme_color: "#138A36", // js-green
    icons: [
      {
        src: "/android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android/android-launchericon-144-144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/android/android-launchericon-96-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/android/android-launchericon-72-72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/android/android-launchericon-48-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/ios/180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/ios/152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/ios/167.png",
        sizes: "167x167",
        type: "image/png",
      },
      {
        src: "/ios/120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "/windows11/Square150x150Logo.scale-400.png",
        sizes: "600x600",
        type: "image/png",
      },
      {
        src: "/windows11/Square150x150Logo.scale-200.png",
        sizes: "300x300",
        type: "image/png",
      },
      {
        src: "/windows11/Square150x150Logo.scale-100.png",
        sizes: "150x150",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/homepage.png",
        type: "image/png",
        sizes: "2538x1313",
      },
    ],
    categories: ["education", "government", "legal"],
    orientation: "portrait-primary",
    lang: "en",
    dir: "ltr",
  };
}
