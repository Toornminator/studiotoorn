"use client";

/**
 * Infinite horizontal marquee — duplicates the items list so the loop is
 * seamless. Pure CSS animation (defined in globals.css) so it stays
 * smooth even on lower-end devices and pauses cleanly under
 * prefers-reduced-motion via the global override.
 */
export function Marquee({
  items,
  duration = 38,
  separator = "·",
  className = "",
}: {
  items: string[];
  /** Loop duration in seconds. Lower = faster. */
  duration?: number;
  separator?: string;
  className?: string;
}) {
  // Triple the items so the track is wide enough for even the longest
  // viewports without seeing the seam.
  const track = [...items, ...items, ...items];

  return (
    <div
      className={`group relative w-full overflow-hidden border-y border-ink/15 bg-cream-warm/35 py-7 md:py-9 ${className}`}
    >
      <div
        className="flex w-max animate-marquee whitespace-nowrap will-change-transform"
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display italic leading-none text-ink md:mx-10 md:gap-10"
            style={{ fontSize: "clamp(28px, 4.4vw, 60px)" }}
          >
            {item}
            <span aria-hidden className="text-tattoo-red text-[0.7em]">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
