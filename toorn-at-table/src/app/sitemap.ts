import type { MetadataRoute } from "next";

/**
 * Sitemap generator. Next.js App Router serves the output at
 * /sitemap.xml automatically.
 *
 * Three routes ship the public surface area today:
 *   - / (home)         — the long-scroll landing page, top priority
 *   - /privacy         — legal notice
 *   - /terms           — booking terms
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
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
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
