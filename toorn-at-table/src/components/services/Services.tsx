import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/server";

/**
 * "Diensten" / Services / Servicios — four bookable formats per the brand
 * bible (deel 05). Async server component, pulls labels and bodies from
 * the locale dictionary.
 */
export async function Services() {
  const t = await getDictionary();

  const cards = [
    { ...t.services.cards.privateDinner, href: "#contact" },
    { ...t.services.cards.villaTakeover, href: "#contact" },
    { ...t.services.cards.workshops, href: "#contact" },
    { ...t.services.cards.events, href: "#events" },
  ] as const;

  return (
    <section
      id="diensten"
      aria-labelledby="services-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.services.eyebrow}
          </Reveal>
          <h2
            id="services-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.services.title} />
          </h2>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-2xl font-serif italic text-ink/75">
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {t.services.intro}
            </span>
          </Reveal>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-ink/15 bg-ink/15 md:mt-20 md:grid-cols-2">
          {cards.map((card, i) => (
            <li key={card.title} className="bg-cream p-7 md:p-12">
              <Reveal delay={Math.min(0.3, i * 0.08)}>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
                  {String(i + 1).padStart(2, "0")} · {card.eyebrow}
                </p>
                <h3
                  className="mt-4 font-display leading-[1.05] text-ink"
                  style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-5 max-w-md font-serif text-ink/80"
                  style={{ fontSize: 16, lineHeight: 1.55 }}
                >
                  {card.body}
                </p>
                <a
                  href={card.href}
                  data-cursor={card.cta}
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70 transition-colors hover:text-tattoo-red"
                >
                  {card.cta}
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
