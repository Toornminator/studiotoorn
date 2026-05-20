export type StickerLayout = {
  id: string;
  imagePath: string;
  alt?: string;
  /** Display height in px on desktop. Width is derived via `aspect`. */
  height?: number;
  /** Width / height ratio of the sticker artwork. Defaults to 1. */
  aspect?: number;
  initialRotation: number;
  /** Horizontal position as % of viewport width, top-left anchored. */
  posVw: number;
  /** Vertical position as % of viewport height. Can exceed 100 for stickers
   *  living below the first viewport. */
  posVh: number;
  /** Hide below this viewport width in px (handy for desktop-margin stickers). */
  hideBelowVw?: number;
};

/**
 * All stickers scattered across the page. Mounted once in StickerProvider
 * so they scroll with the document rather than reset per section.
 *
 * Positions are calibrated to avoid the polaroid cluster on the right of
 * each major section (Hero / About / Travel / Cookbook / Events / Contact
 * all carry a polaroid in their top-right at lg+ breakpoints). Stickers
 * sit either far left (~4-8 vw) or far right ABOVE / BELOW the polaroid
 * zone (~88-92 vw with offset posVh).
 *
 * Visitors can drag any sticker around; positions persist in localStorage
 * (key in `useStickerStore`). Bump that key after editing this list so
 * stale positions for removed/renamed stickers don't haunt repeat visitors.
 *
 * All current assets are 1254x1254 PNGs with transparent backgrounds, so
 * aspect ratio is 1:1 across the board.
 */
export const stickerLayout: StickerLayout[] = [
  // ── Hero (~0-100 vh) ──────────────────────────────────────────────
  {
    id: "gamba",
    imagePath: "/images/stickers/gamba.png",
    alt: "Tattoo-flash gamba met citroen en knoflook",
    initialRotation: -8,
    posVw: 8,
    posVh: 70,
    height: 160,
  },

  // ── About (~100-180 vh) ──────────────────────────────────────────
  // Polaroid is at right-[3vw] top-[6vh] of the section (~105-135 vh).
  // Drop the sticker BELOW it on the right edge.
  {
    id: "oyster",
    imagePath: "/images/stickers/oyster.png",
    alt: "Tattoo-flash oester met parel",
    initialRotation: 5,
    posVw: 90,
    posVh: 170,
    height: 140,
    hideBelowVw: 1024,
  },

  // ── Timeline (~180-870 vh, 9 chapters at ~70-80 vh each) ─────────
  // Polaroid clusters live in the main column. Stickers sit in the
  // viewport gutter (far left ~5 vw or far right ~90 vw).
  {
    id: "fish",
    imagePath: "/images/stickers/fish.png",
    alt: "Tattoo-flash vis met golven",
    initialRotation: -10,
    posVw: 5,
    posVh: 340,
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "mortar",
    imagePath: "/images/stickers/mortar.png",
    alt: "Tattoo-flash vijzel en stamper",
    initialRotation: 6,
    posVw: 90,
    posVh: 410,
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "whisk",
    imagePath: "/images/stickers/whisk.png",
    alt: "Tattoo-flash garde met bloemen",
    initialRotation: -8,
    posVw: 5,
    posVh: 480,
    height: 170,
    hideBelowVw: 1024,
  },
  {
    id: "baguette",
    imagePath: "/images/stickers/baguette.png",
    alt: "Tattoo-flash stokbrood met zon en ster",
    initialRotation: 10,
    posVw: 90,
    posVh: 560,
    height: 170,
    hideBelowVw: 1024,
  },
  {
    id: "skillet",
    imagePath: "/images/stickers/skillet.png",
    alt: "Tattoo-flash gietijzeren pan op vuur",
    initialRotation: -6,
    posVw: 5,
    posVh: 660,
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "roast",
    imagePath: "/images/stickers/roast.png",
    alt: "Tattoo-flash hele kip op schaal",
    initialRotation: 8,
    posVw: 90,
    posVh: 750,
    height: 160,
    hideBelowVw: 1024,
  },
  {
    id: "garlic",
    imagePath: "/images/stickers/garlic.png",
    alt: "Tattoo-flash knoflook met bloemen",
    initialRotation: 4,
    posVw: 5,
    posVh: 820,
    height: 150,
    hideBelowVw: 1024,
  },

  // ── Services (~870-1000 vh) ──────────────────────────────────────
  // Polaroid scatter is in the upper-center; sticker far right.
  {
    id: "lobster",
    imagePath: "/images/stickers/lobster.png",
    alt: "Tattoo-flash kreeft",
    initialRotation: -8,
    posVw: 90,
    posVh: 940,
    height: 170,
    hideBelowVw: 1024,
  },

  // ── Travel (~1000-1180 vh) ───────────────────────────────────────
  // Polaroid top-right, octopus far left mid-section.
  {
    id: "octopus",
    imagePath: "/images/stickers/octopus.png",
    alt: "Tattoo-flash octopus",
    initialRotation: 6,
    posVw: 5,
    posVh: 1070,
    height: 160,
    hideBelowVw: 1024,
  },

  // ── Stats (~1180-1240 vh) ────────────────────────────────────────
  // Three dense counter columns — sticker far right between sections.
  {
    id: "chili",
    imagePath: "/images/stickers/chili.png",
    alt: "Tattoo-flash chili pepper met vlammen",
    initialRotation: -10,
    posVw: 90,
    posVh: 1210,
    height: 150,
    hideBelowVw: 1024,
  },

  // ── Cookbook (~1240-1430 vh) ─────────────────────────────────────
  // Polaroid top-right. Knife sits far left, lemon far right mid-grid.
  {
    id: "chefs-knife",
    imagePath: "/images/stickers/chefs-knife.png",
    alt: "Tattoo-flash chef's knife",
    initialRotation: -12,
    posVw: 4,
    posVh: 1310,
    height: 190,
    hideBelowVw: 1024,
  },
  {
    id: "lemon",
    imagePath: "/images/stickers/lemon.png",
    alt: "Tattoo-flash citroen met bloesem",
    initialRotation: 6,
    posVw: 90,
    posVh: 1400,
    height: 140,
    hideBelowVw: 1024,
  },

  // ── Events (~1435-1620 vh) ───────────────────────────────────────
  // Polaroid top-right. Saucepan far left mid-list.
  {
    id: "saucepan",
    imagePath: "/images/stickers/saucepan.png",
    alt: "Tattoo-flash koperen steelpan",
    initialRotation: -7,
    posVw: 5,
    posVh: 1540,
    height: 150,
    hideBelowVw: 1024,
  },

  // ── Closing (~1620-1750 vh) ──────────────────────────────────────
  // Centered quote + video. Truffle on the right.
  {
    id: "truffle",
    imagePath: "/images/stickers/truffle.png",
    alt: "Tattoo-flash zwarte truffel op kussen",
    initialRotation: 8,
    posVw: 90,
    posVh: 1680,
    height: 160,
    hideBelowVw: 1024,
  },

  // ── Contact (~1750-1920 vh) ──────────────────────────────────────
  // Polaroid top-right. Cleaver far left near form.
  {
    id: "cleaver",
    imagePath: "/images/stickers/cleaver.png",
    alt: "Tattoo-flash hakmes",
    initialRotation: -10,
    posVw: 5,
    posVh: 1850,
    height: 170,
    hideBelowVw: 1024,
  },
];
