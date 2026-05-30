import { testimonials as staticTestimonials } from "@/content/testimonials";
import { pick, pickOptional } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { LocalisedTestimonial, Testimonial } from "@/lib/types";

/**
 * Testimonials data-access. Pure static (no Supabase round-trip): like
 * travel content, this is a curated, low-volume, trust-critical list that
 * Nick edits by hand. No "server-only" guard so the aggregate-rating
 * helpers can also feed the LocalBusiness JSON-LD in layout.tsx.
 */

function resolveTestimonial(t: LocalisedTestimonial, locale: Locale): Testimonial {
  return {
    slug: t.slug,
    quote: pick(t.quote, locale),
    author: t.author,
    context: pickOptional(t.context, locale),
    location: t.location,
    rating: clampRating(t.rating),
    date: t.date,
    source: t.source,
  };
}

function clampRating(rating: number | undefined): number {
  if (rating === undefined) return 5;
  return Math.min(5, Math.max(1, Math.round(rating)));
}

/** Resolved testimonials for the active locale, newest first. */
export function getTestimonials(locale: Locale): Testimonial[] {
  return staticTestimonials
    .map((t) => resolveTestimonial(t, locale))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export type TestimonialStats = {
  count: number;
  /** Mean rating, rounded to one decimal (e.g. 5, 4.9). */
  average: number;
};

/** Aggregate count + average rating. Locale-independent. */
export function getTestimonialStats(): TestimonialStats {
  const count = staticTestimonials.length;
  if (count === 0) return { count: 0, average: 0 };
  const sum = staticTestimonials.reduce((acc, t) => acc + clampRating(t.rating), 0);
  return { count, average: Math.round((sum / count) * 10) / 10 };
}

/**
 * Flattened review data for schema.org markup. Locale-neutral: uses the
 * English quote as the canonical review body so the structured data is
 * stable regardless of which locale renders the page.
 */
export function getTestimonialReviews() {
  return staticTestimonials.map((t) => ({
    slug: t.slug,
    author: t.author,
    rating: clampRating(t.rating),
    date: t.date,
    body: t.quote.en,
  }));
}
