export type StickerLayout = {
  id: string;
  svgPath: string;
  alt?: string;
  size?: number;
  initialRotation: number;
  /** Horizontal position as % of viewport width, top-left anchored. */
  posVw: number;
  /**
   * Vertical position as % of viewport height. Values >100 place the
   * sticker below the first viewport — useful for stickers that should
   * land inside later sections (about, timeline, etc.).
   */
  posVh: number;
};

/**
 * All stickers scattered across the page. The provider mounts these once at
 * the document root so they scroll with the page rather than resetting per
 * section. New stickers added in later phases should append here with
 * sensible viewport-relative defaults.
 */
export const stickerLayout: StickerLayout[] = [
  // ── Hero section (first viewport) ──
  {
    id: "rose",
    svgPath: "/stickers/rose.svg",
    alt: "Tattoo flash rose",
    initialRotation: -12,
    posVw: 6,
    posVh: 14,
    size: 140,
  },
  {
    id: "swallow",
    svgPath: "/stickers/swallow.svg",
    alt: "Tattoo flash swallow",
    initialRotation: 8,
    posVw: 78,
    posVh: 12,
    size: 140,
  },
  {
    id: "anchor",
    svgPath: "/stickers/anchor.svg",
    alt: "Tattoo flash anchor",
    initialRotation: 15,
    posVw: 6,
    posVh: 68,
    size: 130,
  },
  {
    id: "dagger",
    svgPath: "/stickers/dagger.svg",
    alt: "Tattoo flash dagger",
    initialRotation: -8,
    posVw: 80,
    posVh: 70,
    size: 130,
  },
  {
    id: "heart",
    svgPath: "/stickers/heart.svg",
    alt: "Tattoo flash heart with TOORN banner",
    initialRotation: -20,
    posVw: 70,
    posVh: 46,
    size: 120,
  },

  // ── Timeline chapter stickers (deeper in the page) ──
  // Calibrated for desktop; the provider clamps to viewport edges on mobile.
  {
    id: "knife",
    svgPath: "/stickers/knife.svg",
    alt: "Chef's knife — Amsterdam chapter",
    initialRotation: -14,
    posVw: 83,
    posVh: 305,
    size: 110,
  },
  {
    id: "camera",
    svgPath: "/stickers/camera.svg",
    alt: "Camera — photography chapter",
    initialRotation: 10,
    posVw: 7,
    posVh: 380,
    size: 110,
  },
  {
    id: "sun",
    svgPath: "/stickers/sun.svg",
    alt: "Sun — Costa del Sol chapter",
    initialRotation: 18,
    posVw: 84,
    posVh: 450,
    size: 110,
  },
  {
    id: "table",
    svgPath: "/stickers/table.svg",
    alt: "Dressed table — private chef chapter",
    initialRotation: -10,
    posVw: 8,
    posVh: 525,
    size: 115,
  },
];
