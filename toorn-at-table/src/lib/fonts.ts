import {
  Alfa_Slab_One,
  IM_Fell_English,
  Permanent_Marker,
  Special_Elite,
} from "next/font/google";

/**
 * Type system — "oldschool tattoo / rock & roll private chef".
 *
 * - Alfa Slab One     → display: heavy slab serif, single-weight tattoo-
 *                       poster punch. Used on hero TOORN, section H2's,
 *                       big stat numbers.
 * - IM Fell English   → body: 18th-century irregular serif with a
 *                       beautiful italic. Reads like an old menu card or
 *                       Bourdain notebook page.
 * - Special Elite     → mono: worn typewriter — UI eyebrows, meta, form
 *                       labels.
 * - Permanent Marker  → hand: sharpie graffiti — Nick's signature lines.
 */

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  variable: "--font-alfa-slab-one",
  display: "swap",
  weight: ["400"],
});

export const imFellEnglish = IM_Fell_English({
  subsets: ["latin"],
  variable: "--font-im-fell-english",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400"],
});

export const specialElite = Special_Elite({
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap",
  weight: ["400"],
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
  weight: ["400"],
});

export const fontVariables = [
  alfaSlabOne.variable,
  imFellEnglish.variable,
  specialElite.variable,
  permanentMarker.variable,
].join(" ");
