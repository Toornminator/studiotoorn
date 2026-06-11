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
 * AI crawlers get an EXPLICIT allow block on top of the wildcard.
 * Functionally the wildcard already admits them, but stating each
 * bot by name (a) survives a future tightening of the wildcard rule
 * and (b) reads as an unambiguous invitation to the platforms the
 * brand wants citations from: ChatGPT, Claude, Perplexity, Google AI
 * Overviews, Apple Intelligence. The business RUNS on "private chef
 * Marbella" answers inside AI assistants; never block these.
 */
const SITE = "https://toornattable.com";

const AI_CRAWLERS = [
  "GPTBot", // OpenAI / ChatGPT search + training
  "OAI-SearchBot", // OpenAI search index
  "ClaudeBot", // Anthropic / Claude
  "anthropic-ai", // Anthropic (alternate identifier)
  "PerplexityBot", // Perplexity
  "Google-Extended", // Google AI Overviews / Gemini grounding
  "Applebot-Extended", // Apple Intelligence
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
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
