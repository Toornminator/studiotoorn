import type { MetadataRoute } from "next";
import { areas } from "@/content/areas";
import { recipes } from "@/content/recipes";
import { LOCALES, localizedHref, type Locale } from "@/i18n/config";

/**
 * Sitemap generator. Next.js App Router serves the output at /sitemap.xml.
 *
 * The site is trilingual with URL-based locales: English at the root, Spanish
 * under /es, Dutch under /nl. Every page is listed once PER LANGUAGE, each
 * entry carrying the full hreflang set (en, es, nl, x-default). Listing only
 * the English URLs with the others as alternates left Search Console unable
 * to tie the Spanish and Dutch pages to the sitemap ("temporary processing
 * error"), and several of them sat at "crawled, not indexed".
 *
 * lastmod is only given where it is honest (a recipe's publish date, the
 * build for the home page). Stamping every URL with the build time on each
 * deploy teaches Google to ignore lastmod altogether.
 *
 * The home entries also carry an image sitemap of every recipe hero so the
 * photos can rank in Image search.
 */
const SITE = "https://toornattable.com";

function url(path: string, locale: Locale): string {
  return `${SITE}${localizedHref(path, locale)}`;
}

/** The full hreflang set for a route, shared by all its language entries. */
function languages(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(LOCALES.map((l) => [l, url(path, l)])),
    "x-default": url(path, "en"),
  };
}

type Entry = Omit<MetadataRoute.Sitemap[number], "url" | "alternates">;

/** One entry per language for a route. */
function route(path: string, entry: Entry): MetadataRoute.Sitemap {
  const alternates = { languages: languages(path) };
  return LOCALES.map((locale) => ({ ...entry, url: url(path, locale), alternates }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const recipeImages = recipes
    .filter((r) => r.heroImage)
    .map((r) => `${SITE}${r.heroImage as string}`);

  return [
    ...route("/", {
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${SITE}/images/chef_skull_knife_transparent.png`,
        `${SITE}/images/nick-portrait.jpg`,
        ...recipeImages,
      ],
    }),
    // Service-area landing pages: the "private chef in [place]" entry
    // points for search and AI assistants. High priority on purpose;
    // these pages ARE the acquisition funnel.
    ...areas.flatMap((a) =>
      route(`/private-chef/${a.slug}`, { changeFrequency: "monthly", priority: 0.9 }),
    ),
    ...route("/cookbook", { changeFrequency: "weekly", priority: 0.8 }),
    ...route("/the-table", { changeFrequency: "weekly", priority: 0.7 }),
    ...route("/reviews", { changeFrequency: "monthly", priority: 0.4 }),
    ...route("/privacy", { changeFrequency: "yearly", priority: 0.3 }),
    ...route("/terms", { changeFrequency: "yearly", priority: 0.3 }),
    ...recipes.flatMap((r) =>
      route(`/recipes/${r.slug}`, {
        lastModified: r.publishedAt ? new Date(r.publishedAt) : undefined,
        changeFrequency: "monthly",
        priority: 0.6,
        images: r.heroImage ? [`${SITE}${r.heroImage}`] : undefined,
      }),
    ),
  ];
}
