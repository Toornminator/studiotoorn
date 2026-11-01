export type StickerLayout = {
  id: string;
  imagePath: string;
  alt?: string;
  /** Display height in px on desktop. Width is derived via `aspect`. */
  height?: number;
  /** Width / height ratio of the sticker artwork. Defaults to 1. */
  aspect?: number;
  initialRotation: number;
  /** id of the section the sticker belongs to. No section on the page, no sticker. */
  anchor: string;
  /** Distance in px from the top of that section to the sticker's centre. */
  top: number;
  /** Which page gutter it sits in. */
  side: "left" | "right";
  /** Hide below this viewport width in px (handy for desktop-margin stickers). */
  hideBelowVw?: number;
};

/**
 * Tattoo-flash stickers scattered in the page gutters, each pinned to a
 * section (by id) at a fixed offset from that section's top, and centred
 * in the left or right gutter beside the 72rem content column. Anchoring
 * to sections instead of viewport-heights keeps them clear of the content
 * when sections change length, and keeps them off pages that don't have
 * that section at all.
 *
 * Mind the pinned sections: the timeline stage stays on screen for a long
 * scroll, so its stickers sit beside the header, never down in the stage.
 *
 * Visitors can drag any sticker around; positions persist in localStorage
 * (key in `useStickerStore`). Bump that key after editing this list so
 * stale positions don't haunt repeat visitors.
 *
 * All current assets are 1254x1254 PNGs with transparent backgrounds, so
 * aspect ratio is 1:1 across the board.
 */
export const stickerLayout: StickerLayout[] = [
  {
    id: "gamba",
    imagePath: "/images/stickers/gamba.png",
    alt: "Tattoo-flash gamba met citroen en knoflook",
    initialRotation: -8,
    anchor: "hero",
    top: 560,
    side: "left",
    height: 150,
  },
  {
    id: "oyster",
    imagePath: "/images/stickers/oyster.png",
    alt: "Tattoo-flash oester met parel",
    initialRotation: 5,
    anchor: "about",
    top: 820,
    side: "right",
    height: 140,
    hideBelowVw: 1024,
  },
  {
    id: "fish",
    imagePath: "/images/stickers/fish.png",
    alt: "Tattoo-flash vis met golven",
    initialRotation: -10,
    anchor: "timeline",
    top: 160,
    side: "right",
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "mortar",
    imagePath: "/images/stickers/mortar.png",
    alt: "Tattoo-flash vijzel en stamper",
    initialRotation: 6,
    anchor: "services",
    top: 220,
    side: "right",
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "lobster",
    imagePath: "/images/stickers/lobster.png",
    alt: "Tattoo-flash kreeft",
    initialRotation: -8,
    anchor: "services",
    top: 1050,
    side: "left",
    height: 160,
    hideBelowVw: 1024,
  },
  {
    id: "skillet",
    imagePath: "/images/stickers/skillet.png",
    alt: "Tattoo-flash gietijzeren pan op vuur",
    initialRotation: -6,
    anchor: "the-evening",
    top: 380,
    side: "left",
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "octopus",
    imagePath: "/images/stickers/octopus.png",
    alt: "Tattoo-flash octopus",
    initialRotation: 6,
    anchor: "travels",
    top: 260,
    side: "right",
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "chefs-knife",
    imagePath: "/images/stickers/chefs-knife.png",
    alt: "Tattoo-flash chef's knife",
    initialRotation: -12,
    anchor: "cookbook",
    top: 760,
    side: "left",
    height: 180,
    hideBelowVw: 1024,
  },
  {
    id: "lemon",
    imagePath: "/images/stickers/lemon.png",
    alt: "Tattoo-flash citroen met bloesem",
    initialRotation: 6,
    anchor: "cookbook",
    top: 1500,
    side: "right",
    height: 140,
    hideBelowVw: 1024,
  },
  {
    id: "saucepan",
    imagePath: "/images/stickers/saucepan.png",
    alt: "Tattoo-flash koperen steelpan",
    initialRotation: -7,
    anchor: "events",
    top: 300,
    side: "left",
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "truffle",
    imagePath: "/images/stickers/truffle.png",
    alt: "Tattoo-flash zwarte truffel op kussen",
    initialRotation: 8,
    anchor: "closing",
    top: 240,
    side: "right",
    height: 150,
    hideBelowVw: 1024,
  },
  {
    id: "chili",
    imagePath: "/images/stickers/chili.png",
    alt: "Tattoo-flash chili pepper met vlammen",
    initialRotation: -10,
    anchor: "guests",
    top: 180,
    side: "right",
    height: 140,
    hideBelowVw: 1024,
  },
  {
    id: "garlic",
    imagePath: "/images/stickers/garlic.png",
    alt: "Tattoo-flash knoflook met bloemen",
    initialRotation: 4,
    anchor: "faq",
    top: 260,
    side: "left",
    height: 140,
    hideBelowVw: 1024,
  },
  {
    id: "cleaver",
    imagePath: "/images/stickers/cleaver.png",
    alt: "Tattoo-flash hakmes",
    initialRotation: -10,
    anchor: "contact",
    top: 620,
    side: "left",
    height: 170,
    hideBelowVw: 1024,
  },
];
