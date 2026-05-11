export type StickerLayout = {
  id: string;
  svgPath: string;
  alt?: string;
  size?: number;
  initialRotation: number;
  /** Position expressed as a percentage of the viewport, top-left anchored. */
  posVw: number;
  posVh: number;
};

/**
 * All stickers scattered across the page. The provider mounts these once at
 * the document root so they scroll with the page rather than resetting per
 * section. New stickers added in later phases should append here with
 * sensible viewport-relative defaults.
 */
export const stickerLayout: StickerLayout[] = [
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
];
