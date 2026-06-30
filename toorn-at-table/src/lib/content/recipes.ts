import "server-only";
import { recipes as staticRecipes } from "@/content/recipes";
import {
  pick,
  pickOptional,
  pickParagraphs,
} from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { LocalisedRecipe, Recipe } from "@/lib/types";

function resolveRecipe(r: LocalisedRecipe, locale: Locale): Recipe {
  return {
    slug: r.slug,
    title: pick(r.title, locale),
    intro: pickOptional(r.intro, locale),
    body: r.body ? pickParagraphs(r.body, locale) : undefined,
    category: r.category,
    seasons: r.seasons,
    difficulty: r.difficulty,
    prepMinutes: r.prepMinutes,
    cookMinutes: r.cookMinutes,
    servings: r.servings,
    heroImage: r.heroImage,
    pairing: pickOptional(r.pairing, locale),
    ingredients: r.ingredients.map((i) => ({
      group: pickOptional(i.group, locale),
      quantity: pickOptional(i.quantity, locale),
      ingredient: pick(i.ingredient, locale),
      note: pickOptional(i.note, locale),
    })),
    steps: r.steps.map((s) => ({
      position: s.position,
      body: pick(s.body, locale),
    })),
    essayImages: r.essayImages?.map((img) => ({
      src: img.src,
      alt: pick(img.alt, locale),
      caption: pickOptional(img.caption, locale),
      afterParagraph: img.afterParagraph,
    })),
    marginalia: r.marginalia?.map((n) => ({
      id: n.id,
      kind: n.kind,
      anchor: n.anchor,
      body: pick(n.body, locale),
      rotation: n.rotation,
    })),
    nowPlaying: r.nowPlaying,
    publishedAt: r.publishedAt,
  };
}

/** Every recipe slug, for generateStaticParams on the /recipes/[slug] route. */
export function getRecipeSlugs(): string[] {
  return staticRecipes.map((r) => r.slug);
}

/** A single resolved recipe by slug, or null if it doesn't exist. */
export async function getRecipe(
  slug: string,
  locale: Locale,
): Promise<Recipe | null> {
  const all = await getRecipes(locale);
  return all.find((r) => r.slug === slug) ?? null;
}

/**
 * All published recipes, resolved into the active locale. The cookbook is
 * authored in `src/content/recipes.ts` and shipped as part of the build, so
 * this is a pure in-memory map with no database round-trip.
 */
export async function getRecipes(locale: Locale): Promise<Recipe[]> {
  return staticRecipes.map((r) => resolveRecipe(r, locale));
}
