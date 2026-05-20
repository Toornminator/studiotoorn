import { getEvents } from "@/lib/content/events";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { Sticker } from "@/components/sticker/Sticker";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { EventsList } from "./EventsList";

export async function Events() {
  const locale = await getCurrentLocale();
  const [events, t] = await Promise.all([getEvents(locale), getDictionary()]);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative w-full"
    >
      <Polaroid
        src="/images/polaroids/rietstulp.jpeg"
        alt="Sfeerbeeld Rietstulp"
        caption="Rietstulp"
        size="md"
        rotation={3}
        className="absolute right-[3vw] top-[6vh] z-10 hidden lg:block"
      />
      <Sticker
        src="/images/stickers/roast.png"
        alt="Tattoo-flash hele kip op schaal"
        size="md"
        rotation={-6}
        className="absolute left-[2vw] top-[20vh] z-10 hidden lg:block"
      />
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.events.eyebrow}
          </Reveal>
          <h2
            id="events-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.events.title} />
          </h2>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-2xl font-serif italic text-ink/75">
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {t.events.intro}
            </span>
          </Reveal>
        </header>

        <EventsList events={events} />
      </div>
    </section>
  );
}
