import type { MetadataRoute } from "next";
import { recipes } from "@/content/recipes";

/**
 * Sitemap generator. Next.js App Router serves the output at /sitemap.xml.
 *
 * The site is trilingual with URL-based locales: English at the root, Spanish
 * under /es, Dutch under /nl. Every route is listed once at its English URL
 * with `alternates.languages` pointing at the Spanish and Dutch variants, so
 * Google emits hreflang and crawls all three. The home entry also carries an
 * image sitemap of every recipe hero so the photos can rank in Image search.
 */
const SITE = "https://toornattable.com";

/** hreflang alternates for an English route path ("/" for the home page). */
function langs(path: string): Record<string, string> {
  const suffix = path === "/" ? "" : path;
  return { es: `${SITE}/es${suffix}`, nl: `${SITE}/nl${suffix}` };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const recipeImages = recipes
    .filter((r) => r.heroImage)
    .map((r) => `${SITE}${r.heroImage as string}`);

  const recipeRoutes: MetadataRoute.Sitemap = recipes.map((r) => ({
    url: `${SITE}/recipes/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: { languages: langs(`/recipes/${r.slug}`) },
    images: r.heroImage ? [`${SITE}${r.heroImage}`] : undefined,
  }));

  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: langs("/") },
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
      alternates: { languages: langs("/the-table") },
    },
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: langs("/privacy") },
    },
    {
      url: `${SITE}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: langs("/terms") },
    },
    ...recipeRoutes,
  ];
}
