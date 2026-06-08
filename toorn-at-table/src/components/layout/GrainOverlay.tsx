/**
 * Foreground film grain. Sits as a fixed, pointer-events-none layer OVER the
 * scrolling content (z-40: above the page body at z-10, below the nav at z-50,
 * the overlays at z-300+ and the cursor at z-1000). The existing
 * PaperBackground grain lives behind the content and gets hidden wherever a
 * cream panel paints over it; this thin film unifies the whole composition
 * with a single, consistent "printed on paper" texture instead.
 *
 * soft-light at ~5% reads as tactile fibre, not noise. Desktop only — the
 * feTurbulence tile is cheap to paint there, but on mobile Safari a
 * full-viewport noise layer measurably hurts first paint, and the texture is a
 * polish detail, not load-bearing.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden opacity-[0.05] mix-blend-soft-light md:block"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23g)' opacity='0.6'/></svg>\")",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
