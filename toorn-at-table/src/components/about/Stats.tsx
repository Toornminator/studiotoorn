import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A tight stat strip — three big animated numbers that count up when the
 * section enters view. Placed between Reizen and Kookboek as a moment of
 * pause; the typography matches the timeline so it reads as one continuous
 * chapter mark rather than a new theme.
 */
export function Stats() {
  return (
    <section
      aria-label="Statistieken"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-12 md:pb-32">
        <div className="grid grid-cols-1 gap-12 border-y border-ink/15 py-16 sm:grid-cols-3 md:gap-16 md:py-24">
          <Reveal className="flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              Landen bezocht
            </p>
            <p
              className="font-display italic leading-[0.85] text-ink"
              style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
            >
              <Counter value={27} />
            </p>
            <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
              Van San Sebastián tot Tokio.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              Jaar in het vak
            </p>
            <p
              className="font-display italic leading-[0.85] text-ink"
              style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
            >
              <Counter value={10} />
            </p>
            <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
              Sinds mijn 26e — geen jaar eerder.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              Tafels per maand
            </p>
            <p
              className="font-display italic leading-[0.85] text-ink"
              style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
            >
              <Counter value={6} />
            </p>
            <p className="font-serif italic text-ink/65" style={{ fontSize: 15 }}>
              Klein gehouden, met opzet.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
