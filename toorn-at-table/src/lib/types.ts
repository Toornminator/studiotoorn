// Shared domain types. Mirrors the SQL schema in supabase/migrations.
// When you run `supabase gen types typescript --linked > src/lib/database.types.ts`
// keep these in sync, or remove these and import from generated types.

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
