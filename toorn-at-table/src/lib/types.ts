// Shared domain types. Mirrors the SQL schema in supabase/migrations.
// When you run `supabase gen types typescript --linked > src/lib/database.types.ts`
// keep these in sync, or remove these and import from generated types.
//
// Two shapes co-exist:
//  - `Localised*` types (LocalisedRecipe, LocalisedEventItem, ...) live in
//    `src/content/` and hold an EN/ES/NL trio for every translatable field.
//  - The plain types below (`Recipe`, `EventItem`, ...) are the resolved
//    shape consumed by components. The data-access layer in
//    `src/lib/content/*.ts` does the resolution per request locale.

import type { Locale } from "@/i18n/config";

/** Triple-language string. Every translatable content field uses this. */
export type LocalisedString = { en: string; es: string; nl: string };

/** Same as `LocalisedString`, but with paragraphs as an array per locale. */
export type LocalisedParagraphs = { en: string[]; es: string[]; nl: string[] };

export type RecipeCategory =
  | "voor"
  | "hoofd"
  | "bij"
  | "dessert"
  | "borrel"
  | "basis";

export type Season = "lente" | "zomer" | "herfst" | "winter" | "altijd";

export type RecipeIngredient = {
  group?: string;
  quantity?: string;
  ingredient: string;
  note?: string;
};

export type RecipeStep = {
  position: number;
  body: string;
};

export type Recipe = {
  slug: string;
  title: string;
  intro?: string;
  body?: string;
  category: RecipeCategory;
  seasons: Season[];
  difficulty?: 1 | 2 | 3 | 4 | 5;
  prepMinutes?: number;
  cookMinutes?: number;
  servings?: number;
  heroImage?: string;
  pairing?: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
};

export type LocalisedRecipeIngredient = {
  group?: LocalisedString;
  quantity?: LocalisedString;
  ingredient: LocalisedString;
  note?: LocalisedString;
};

export type LocalisedRecipeStep = {
  position: number;
  body: LocalisedString;
};

export type LocalisedRecipe = {
  slug: string;
  title: LocalisedString;
  intro?: LocalisedString;
  body?: LocalisedString;
  category: RecipeCategory;
  seasons: Season[];
  difficulty?: 1 | 2 | 3 | 4 | 5;
  prepMinutes?: number;
  cookMinutes?: number;
  servings?: number;
  heroImage?: string;
  pairing?: LocalisedString;
  ingredients: LocalisedRecipeIngredient[];
  steps: LocalisedRecipeStep[];
};

export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date
  startTime?: string;
  location: string;
  city?: string;
  menuTeaser?: string;
  description?: string;
  capacity?: number;
  spotsAvailable?: number;
  priceEur?: number;
  heroImage?: string;
  bookable: boolean;
};

export type LocalisedEventItem = {
  slug: string;
  title: LocalisedString;
  date: string;
  startTime?: string;
  location: LocalisedString;
  city?: string;
  menuTeaser?: LocalisedString;
  description?: LocalisedString;
  capacity?: number;
  spotsAvailable?: number;
  priceEur?: number;
  heroImage?: string;
  bookable: boolean;
};

export type TravelLocation = {
  slug: string;
  name: string;
  country?: string;
  year?: number;
  heroImage?: string;
  /** Position on the SVG map, 0–100 as percentage of map width / height. */
  mapX: number;
  mapY: number;
  intro?: string;
  body?: string;
  pullQuote?: string;
};

export type LocalisedTravelLocation = {
  slug: string;
  /** Display name on the stamp. Country names can stay one-string when they
   * read the same in every locale; we keep it localised for cases like
   * "Verenigde Staten" vs "United States" vs "Estados Unidos". */
  name: LocalisedString;
  country?: LocalisedString;
  year?: number;
  heroImage?: string;
  mapX: number;
  mapY: number;
  intro?: LocalisedString;
  body?: LocalisedString;
  pullQuote?: LocalisedString;
};

export type TimelineChapter = {
  id: string;
  number: string;
  period: string;
  yearShort: string;
  title: string;
  body: string[];
  marginalia?: string;
};

export type LocalisedTimelineChapter = {
  id: string;
  number: string;
  /** Short label that stays the same in every language (e.g. "JD", "'23"). */
  yearShort: string;
  period: LocalisedString;
  title: LocalisedString;
  body: LocalisedParagraphs;
  marginalia?: LocalisedString;
};

export type { Locale };
