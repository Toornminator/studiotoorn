import { getTravelLocations } from "@/lib/content/travel";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { StampGrid } from "./StampGrid";

export async function Travel() {
  const locale = await getCurrentLocale();
  const [locations, t] = await Promise.all([
    getTravelLocations(locale),
    getDictionary(),
  ]);

  return (
    <section
      id="reizen"
      aria-labelledby="travel-heading"
      className="relative w-full"
    >
      <Polaroid
        src="/images/polaroids/whatsapp-1.jpeg"
        alt={{
          en: "On the road, photo of Nick",
          es: "En camino, foto de Nick",
          nl: "Onderweg, foto van Nick",
        }}
        caption={{
          en: "On the road",
          es: "En camino",
          nl: "Onderweg",
        }}
        size="md"
        rotation={4}
        className="absolute right-[max(6vw,120px)] top-[10vh] z-10 hidden lg:block"
      />
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-32 md:px-12 md:pt-32 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            {t.travel.eyebrow}
          </Reveal>
          <h2
            id="travel-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.travel.title} />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {t.travel.intro}
            </span>
          </Reveal>
        </header>

        {locations.length === 0 ? (
          <p className="mt-16 font-serif italic text-ink/55">
            {t.travel.emptyState}
          </p>
        ) : (
          <StampGrid locations={locations} />
        )}
      </div>
    </section>
  );
}
