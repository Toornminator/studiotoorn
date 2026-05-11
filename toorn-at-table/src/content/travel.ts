import type { TravelLocation } from "@/lib/types";

/**
 * Travel locations marked on the hand-drawn map. The map uses a custom SVG
 * of Europe + Mediterranean — coordinates are 0–100 (percentage of the map's
 * width / height).
 *
 * Empty until Nick hands over the actual list of 5–8 places he wants on
 * the map. Add entries here; the map and overlay pick them up automatically.
 */
export const travelLocations: TravelLocation[] = [];
