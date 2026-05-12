import { getEvents } from "@/lib/content/events";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { EventsList } from "./EventsList";

export async function Events() {
  const events = await getEvents();

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            Hoofdstuk 05 · Events
          </Reveal>
          <h2
            id="events-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text="Komende dinners — open tafels, korte gastenlijsten." />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              Een paar keer per maand kook ik aan een lange tafel waar je een
              plek kunt boeken. Kleine gezelschappen, lokale producten, telkens
              een andere plek aan de Costa.
            </span>
          </Reveal>
        </header>

        <EventsList events={events} />
      </div>
    </section>
  );
}
