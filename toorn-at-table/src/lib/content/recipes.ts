import "server-only";
import { recipes as staticRecipes } from "@/content/recipes";
import { getSupabaseServer } from "@/lib/supabase/server";
import { pick, pickOptional } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type {
  LocalisedRecipe,
  Recipe,
  RecipeCategory,
  Season,
} from "@/lib/types";

type RecipeRow = {
  slug: string;
  title: string;
  intro: string | null;
  body: string | null;
  category: RecipeCategory;
  seasons: Season[] | null;
  difficulty: number | null;
  prep_minutes: number | null;
  cook_minutes: number | null;
  servings: number | null;
  hero_image: string | null;
  pairing: string | null;
  position: number;
};

type IngredientRow = {
  recipe_id: string;
  group_name: string | null;
  position: number;
  quantity: string | null;
  ingredient: string;
  note: string | null;
};

type StepRow = {
  recipe_id: string;
  position: number;
  body: string;
};

function resolveRecipe(r: LocalisedRecipe, locale: Locale): Recipe {
  return {
    slug: r.slug,
    title: pick(r.title, locale),
    intro: pickOptional(r.intro, locale),
    body: pickOptional(r.body, locale),
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
  };
}

export async function getRecipes(locale: Locale): Promise<Recipe[]> {
  const supabase = getSupabaseServer();
  if (!supabase) return staticRecipes.map((r) => resolveRecipe(r, locale));

  const { data: rows, error } = await supabase
    .from("recipes")
    .select("*")
    .not("published_at", "is", null)
    .order("position", { ascending: true })
    .returns<(RecipeRow & { id: string })[]>();

  if (error || !rows || rows.length === 0) {
    return staticRecipes.map((r) => resolveRecipe(r, locale));
  }

  const ids = rows.map((r) => r.id);
  const [{ data: ings }, { data: steps }] = await Promise.all([
    supabase
      .from("recipe_ingredients")
      .select("*")
      .in("recipe_id", ids)
      .order("position", { ascending: true })
      .returns<IngredientRow[]>(),
    supabase
      .from("recipe_steps")
      .select("*")
      .in("recipe_id", ids)
      .order("position", { ascending: true })
      .returns<StepRow[]>(),
  ]);

  // Supabase schema is currently single-language. Until it grows EN/ES/NL
  // columns, the cloud copy ignores `locale` and returns rows as-is.
  return rows.map((r) => ({
    slug: r.slug,
    title: r.title,
    intro: r.intro ?? undefined,
    body: r.body ?? undefined,
    category: r.category,
    seasons: r.seasons ?? [],
    difficulty: (r.difficulty as Recipe["difficulty"]) ?? undefined,
    prepMinutes: r.prep_minutes ?? undefined,
    cookMinutes: r.cook_minutes ?? undefined,
    servings: r.servings ?? undefined,
    heroImage: r.hero_image ?? undefined,
    pairing: r.pairing ?? undefined,
    ingredients: (ings ?? [])
      .filter((i) => i.recipe_id === r.id)
      .map((i) => ({
        group: i.group_name ?? undefined,
        quantity: i.quantity ?? undefined,
        ingredient: i.ingredient,
        note: i.note ?? undefined,
      })),
    steps: (steps ?? [])
      .filter((s) => s.recipe_id === r.id)
      .map((s) => ({ position: s.position, body: s.body })),
  }));
}
