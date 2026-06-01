import type { MetadataRoute } from "next";
import { recipes } from "@/content/recipes";

/**
 * Sitemap generator. Next.js App Router serves the output at
 * /sitemap.xml automatically.
 *
 * Three routes ship the public surface area today:
 *   - / (home)         — the long-scroll landing page, top priority
 *   - /privacy         — legal notice
 *   - /terms           — booking terms
 *
 * The home entry also embeds an image sitemap with every recipe hero
 * photo. That tells Google Images each picture lives on this page so
 * recipe images can rank independently in Image search results.
 *
 * Note on i18n: the site is multilingual (EN / ES / NL) but every
 * language is served off the same root URL via a locale cookie. Until
 * we add URL-based locale paths (/en, /es, /nl) Google can only
 * crawl a single language version. The sitemap therefore lists each
 * route once — adding `alternates` with the same URL would be
 * actively confusing to crawlers. Hreflang work is a follow-up.
 */
const SITE = "https://toornattable.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const recipeImages = recipes
    .filter((r) => r.heroImage)
    .map((r) => `${SITE}${r.heroImage as string}`);

  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${SITE}/images/chef_skull_knife_transparent.png`,
        `${SITE}/images/nick-portrait.jpg`,
        ...recipeImages,
      ],
    },
    {
      url: `${SITE}/the-table`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
