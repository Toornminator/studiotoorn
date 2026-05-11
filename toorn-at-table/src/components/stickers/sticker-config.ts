import type { StickerProps } from "./Sticker";

/**
 * The full set of stickers scattered across the page. The provider mounts
 * these once in the root layout so they scroll with the document instead of
 * resetting between sections. Coordinates are absolute pixels from the top
 * of the document; tweak in tandem with section heights when adding more.
 */
export const stickerConfig: StickerProps[] = [];
