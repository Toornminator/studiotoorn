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

/**
 * Marginal note rendered in the overlay margin (or inline on mobile).
 * Permanent-marker scrawls in Nick's voice — "I always burn step 3,"
 * "if you can't find oloroso, don't substitute," "first time I made
 * this it split, here's why." Anchored to a fixed slot in the overlay.
 *
 * - `scrawl`  — neutral aside, ink-grey, jittered rotation
 * - `tip`     — practical pointer, same look as scrawl
 * - `warning` — pre-emptive heads-up, tattoo-red, straight
 * - `wrong`   — postscript about a failed attempt, tattoo-red,
 *               struck-through preamble
 */
export type MarginalNoteKind = "scrawl" | "tip" | "warning" | "wrong";

export type MarginalNoteAnchor =
  | "intro"
  | "essay"
  | "ingredients"
  | "method"
  | `step-${number}`;

export type LocalisedMarginalNote = {
  /** Stable id — drives the deterministic rotation jitter. */
  id: string;
  kind: MarginalNoteKind;
  anchor: MarginalNoteAnchor;
  body: LocalisedString;
  /** Override the auto-jittered rotation (degrees). Optional. */
  rotation?: number;
};

export type MarginalNote = {
  id: string;
  kind: MarginalNoteKind;
  anchor: MarginalNoteAnchor;
  body: string;
  rotation?: number;
};

/**
 * Inline photo embedded in the essay-body of a recipe or dispatch.
 * `src` is a relative path under `public/images/recipes/{slug}/`.
 * `afterParagraph` is 0-indexed against the resolved body paragraphs.
 */
export type LocalisedEssayImage = {
  src: string;
  alt: LocalisedString;
  caption?: LocalisedString;
  afterParagraph: number;
};

export type EssayImage = {
  src: string;
  alt: string;
  caption?: string;
  afterParagraph: number;
};

/**
 * "What was playing." Track titles don't translate — `track` and
 * `artist` are bare strings. Either `spotifyTrackId` or `youtubeId`
 * (or neither) can be set; the component picks the first available
 * for the click-to-load embed.
 */
export type NowPlaying = {
  track: string;
  artist: string;
  spotifyTrackId?: string;
  youtubeId?: string;
};

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
  /**
   * Essay body — Bourdain-style story BEFORE the recipe. Multiple
   * paragraphs; `essayImages` get spliced in by `afterParagraph` index.
   * Was a single string until the May 2026 sauce upgrade.
   */
  body?: string[];
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
  essayImages?: EssayImage[];
  marginalia?: MarginalNote[];
  nowPlaying?: NowPlaying;
  /** ISO date — makes a recipe double as a dated dispatch when needed. */
  publishedAt?: string;
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
  body?: LocalisedParagraphs;
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
  essayImages?: LocalisedEssayImage[];
  marginalia?: LocalisedMarginalNote[];
  nowPlaying?: NowPlaying;
  publishedAt?: string;
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

/**
 * Photo dropped into a travel overlay's polaroid cluster. The src is a
 * path under /public; the caption is the handwritten line at the foot
 * of the polaroid frame and follows the brand rule of no em-dashes.
 * `rotation` overrides the auto-jittered tilt when a specific photo
 * needs a particular angle.
 */
export type TravelPolaroid = {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
};

export type LocalisedTravelPolaroid = {
  src: string;
  alt: LocalisedString;
  caption?: LocalisedString;
  rotation?: number;
};

/**
 * Short ambient video bound to a travel location — e.g. Yokohama's
 * 9:16 portrait shot of the old lady cooking. Plays muted on autoplay
 * loop inside the overlay; pure motion-photograph, not a "video."
 */
export type TravelClip = {
  src: string;
  alt: string;
  caption?: string;
};

export type LocalisedTravelClip = {
  src: string;
  alt: LocalisedString;
  caption?: LocalisedString;
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
  /** Cluster of polaroid photos shown at the foot of the travel overlay. */
  polaroids?: TravelPolaroid[];
  /** Optional ambient clip — 9:16 portrait, muted loop, no controls. */
  clip?: TravelClip;
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
  polaroids?: LocalisedTravelPolaroid[];
  clip?: LocalisedTravelClip;
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

/**
 * A guest testimonial. The single most important trust signal on a
 * private-chef site: a wealthy stranger will not hand over their kitchen
 * (and €3k+) without seeing that other people like them already loved it.
 *
 * NEVER fabricate these. Every entry must be a real quote from a real
 * guest, used with permission. The `quote` and `context` are trios so the
 * site can show them in the reader's language while keeping the original
 * intent; store the guest's own wording in their language and translate
 * the other two locales faithfully (no embellishment).
 */
export type LocalisedTestimonial = {
  slug: string;
  /** The review itself, in the guest's words. */
  quote: LocalisedString;
  /** Name as the guest agreed to be shown (e.g. "Charlotte M."). */
  author: string;
  /** Short occasion + place line, e.g. "Private dinner · La Zagaleta". */
  context?: LocalisedString;
  /** Language-neutral place name shown as a small tag (e.g. "Marbella"). */
  location?: string;
  /** 1–5 stars. Defaults to 5 when omitted. */
  rating?: number;
  /** ISO date (YYYY-MM-DD) the dinner happened. Drives schema datePublished. */
  date: string;
  /** Optional provenance marker shown as a tag (e.g. "Google", "Direct"). */
  source?: string;
};

/** Resolved testimonial consumed by components (single active locale). */
export type Testimonial = {
  slug: string;
  quote: string;
  author: string;
  context?: string;
  location?: string;
  rating: number;
  date: string;
  source?: string;
};

export type { Locale };
