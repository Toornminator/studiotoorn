import type { MetadataRoute } from "next";

/**
 * robots.txt generator. Next.js App Router serves the output at
 * /robots.txt automatically and crawlers pick it up at the host root.
 *
 *  - Allow `/` so the public site, /privacy, /terms and the auto-
 *    generated /opengraph-image.png, /twitter-image.png, /icon.png,
 *    /apple-icon.png all stay crawlable.
 *  - Disallow `/api/*` — server actions and the newsletter confirm
 *    handler are not crawler bait.
 *  - Disallow `/_next/*` — the Next.js asset bundle is not useful
 *    SERP content and serving 200s on those URLs can confuse bots.
 *  - Sitemap line at the bottom points crawlers at the structured
 *    URL list so they don't have to discover the routes themselves.
 *
 * AI crawlers (GPTBot, ClaudeBot, anthropic-ai, Google-Extended,
 * etc.) are not blocked. Nick's site benefits from showing up in
 * AI overviews and search summaries; if that ever changes, add the
 * specific user-agent + disallow here.
 */
const SITE = "https://toornattable.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
