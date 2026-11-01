import type { Metadata } from "next";

/** Brand suffix the root layout's title template appends. */
const BRAND_SUFFIX = " · TOORN at table";
/** Roughly what Google shows of a title before it cuts it off. */
const TITLE_MAX = 60;
/** Roughly what Google shows of a meta description before it cuts it off. */
const DESCRIPTION_MAX = 155;

/**
 * Page title for search: the brand suffix only goes on when the whole
 * thing still fits. A long dish or area name is the part people search
 * for, so it keeps the room (Google shows the site name separately).
 */
export function seoTitle(title: string): Metadata["title"] {
  return title.length + BRAND_SUFFIX.length <= TITLE_MAX ? title : { absolute: title };
}

/**
 * Meta description cut to what Google displays: whole sentences when they
 * fit, otherwise cut at the last word boundary with an ellipsis. Never
 * mid-word, never trailing punctuation before the ellipsis.
 */
export function seoDescription(text: string | undefined, max = DESCRIPTION_MAX): string | undefined {
  if (!text) return undefined;
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sentences = clean.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  if (out.trim().length >= 70) return out.trim();
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.·]+$/, "")}…`;
}
