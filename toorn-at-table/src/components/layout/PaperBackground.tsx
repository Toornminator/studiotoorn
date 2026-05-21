/**
 * Fixed cream paper backdrop sitting beneath the entire page.
 *
 * The grain texture is rendered as an SVG filter (`feTurbulence`),
 * which is gorgeous on desktop but expensive to paint on mobile
 * Safari — measurable LCP delay on a 4G iPhone. So the SVG is
 * hidden below md and the radial vignette carries the cream
 * warmth on its own. The grain returns at md+ where the GPU has
 * the room to paint it without stalling first paint.
 */
export function PaperBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-cream"
    >
      <svg
        className="absolute inset-0 hidden h-full w-full opacity-[0.07] mix-blend-multiply md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.1
                    0 0 0 0 0.08
                    0 0 0 0 0.06
                    0 0 0 0.55 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(232,220,196,0) 40%, rgba(26,26,26,0.05) 100%)",
        }}
      />
    </div>
  );
}
