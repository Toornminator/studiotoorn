import { Reveal, RevealWords } from "@/components/ui/Reveal";

/**
 * "Diensten" — the four ways guests can book Nick. Sourced directly from
 * the May 2026 brand bible (deel 05 · aanbod & publiek). No prices on the
 * page by design: everything is op aanvraag and tailored to the gast.
 *
 * Layout is a 1×4 (mobile) → 2×2 (md+) grid of hairline-divided cards,
 * each with a short slab title, mono eyebrow, serif body and a mono CTA
 * that scrolls to the booking form (events card jumps to the agenda
 * instead).
 */

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

const SERVICES: Service[] = [
  {
    id: "private-dinner",
    eyebrow: "Aan jouw tafel",
    title: "Private dinner",
    body:
      "Ik kook bij jou thuis of in je villa. Eén avond, één tafel, één menu dat we vooraf samen vastleggen. Van inkoop tot uitserveren tot opruimen. Jij ontvangt je gasten en houdt je glas vast.",
    cta: { label: "Plan een avond", href: "#contact" },
  },
  {
    id: "villa-takeover",
    eyebrow: "Een vaste chef voor een week",
    title: "Villa takeover",
    body:
      "Een hele week op locatie — diners, en lunches of ontbijten waar gewenst. Ik beweeg mee in het ritme van het gezelschap: één avond rauw vuur, een ander een Italiaans dorps-menu, alles vers van de markt.",
    cta: { label: "Boek een week", href: "#contact" },
  },
  {
    id: "workshops",
    eyebrow: "Hands-on in mijn tempo",
    title: "Kookworkshops",
    body:
      "Klein gezelschap, jouw keuken of de mijne. Eén gerecht of een hele line-up, alles meelopend met de seizoenen. Wat ik je leer: techniek bovenal — een goede basis maakt elke avond beter.",
    cta: { label: "Vraag aan", href: "#contact" },
  },
  {
    id: "events",
    eyebrow: "Door Nick georganiseerd",
    title: "Eigen events",
    body:
      "Diners die ik zelf organiseer: een vuurplaats-avond op een finca, een olijfboomgaard-tafel, een Dining under the Stars op het strand. Open inschrijving, kleine groep, telkens een andere plek.",
    cta: { label: "Bekijk de agenda", href: "#events" },
  },
];

export function Services() {
  return (
    <section
      id="diensten"
      aria-labelledby="services-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            Diensten · Wat je kunt boeken
          </Reveal>
          <h2
            id="services-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text="Vier manieren om aan tafel te zitten." />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              Geen vaste tarieven — alles op maat. Hieronder de vorm; de
              invulling bespreken we samen.
            </span>
          </Reveal>
        </header>

        {/* Grid: cards on cream-warm with hairline gutters via bg-ink/15 +
            gap-px on the container. */}
        <ul
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-ink/15 bg-ink/15 md:mt-20 md:grid-cols-2"
        >
          {SERVICES.map((service, i) => (
            <li key={service.id} className="bg-cream p-7 md:p-12">
              <Reveal delay={Math.min(0.3, i * 0.08)}>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
                  {String(i + 1).padStart(2, "0")} · {service.eyebrow}
                </p>
                <h3
                  className="mt-4 font-display leading-[1.05] text-ink"
                  style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-5 max-w-md font-serif text-ink/80"
                  style={{ fontSize: 16, lineHeight: 1.55 }}
                >
                  {service.body}
                </p>
                <a
                  href={service.cta.href}
                  data-cursor={service.cta.label}
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70 transition-colors hover:text-tattoo-red"
                >
                  {service.cta.label}
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 5 H11 M8 1 L11 5 L8 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
