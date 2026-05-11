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
 * Asset aspect ratios were measured from the processed PNGs in
 * /public/stickers/ — keep these in sync when assets are replaced.
 */
export const stickerLayout: StickerLayout[] = [
  // ── Hero (first viewport) ──
  {
    id: "clover",
    imagePath: "/stickers/clover.png",
    alt: "Four-leaf clover tattoo flash",
    initialRotation: -10,
    posVw: 5,
    posVh: 14,
    height: 150,
    aspect: 0.696,
  },
  {
    id: "vino-veritas",
    imagePath: "/stickers/vino-veritas.png",
    alt: "Vino Veritas eagle tattoo flash",
    initialRotation: 6,
    posVw: 78,
    posVh: 10,
    height: 200,
    aspect: 0.764,
  },
  {
    id: "pint",
    imagePath: "/stickers/pint.png",
    alt: "Tall pint glass tattoo flash",
    initialRotation: 12,
    posVw: 6,
    posVh: 64,
    height: 170,
    aspect: 0.657,
  },
  {
    id: "ufo-cow",
    imagePath: "/stickers/ufo-cow.png",
    alt: "UFO abducting a cow tattoo flash",
    initialRotation: -6,
    posVw: 70,
    posVh: 48,
    height: 170,
    aspect: 0.665,
  },
  {
    id: "honey",
    imagePath: "/stickers/honey.png",
    alt: "Honey bottle with shot glass tattoo flash",
    initialRotation: -14,
    posVw: 82,
    posVh: 66,
    height: 170,
    aspect: 0.660,
  },

  // ── Timeline chapter stickers (desktop only) ──
  {
    id: "boxer",
    imagePath: "/stickers/boxer.png",
    alt: "Boxer 'I'm Still Standing' — Amsterdam grind",
    initialRotation: -14,
    posVw: 84,
    posVh: 305,
    height: 170,
    aspect: 0.668,
    hideBelowVw: 768,
  },
  {
    id: "film-camera",
    imagePath: "/stickers/film-camera.png",
    alt: "Film strip wrapped camera with rose — photography chapter",
    initialRotation: 10,
    posVw: 5,
    posVh: 380,
    height: 200,
    aspect: 0.540,
    hideBelowVw: 768,
  },
  {
    id: "palm-treasure",
    imagePath: "/stickers/palm-treasure.png",
    alt: "Palm tree with treasure chest and sunset — Costa del Sol",
    initialRotation: 14,
    posVw: 84,
    posVh: 450,
    height: 200,
    aspect: 0.631,
    hideBelowVw: 768,
  },
  {
    id: "burger-wings",
    imagePath: "/stickers/burger-wings.png",
    alt: "Winged burger with halo — private chef chapter",
    initialRotation: -10,
    posVw: 6,
    posVh: 525,
    height: 170,
    aspect: 0.706,
    hideBelowVw: 768,
  },
];
