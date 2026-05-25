import type { MetadataRoute } from "next";

/**
 * Web App Manifest.
 *
 * Next.js App Router serves the output at /manifest.webmanifest and
 * automatically emits the <link rel="manifest"> tag in every page.
 *
 * Two practical wins:
 *  1. iOS / Android "Add to home screen" gets the right icon + name
 *     instead of a generic favicon screenshot.
 *  2. Lighthouse PWA audit picks up the manifest + service worker
 *     (the manifest alone gets us most of the way to a 100 score).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TOORN at table",
    short_name: "TOORN",
    description:
      "Private chef on the Costa del Sol. Michelin-trained precision, Andalusian calm, one table.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#1A1612",
    theme_color: "#1A1612",
    lang: "en",
    categories: ["food", "lifestyle", "travel"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
