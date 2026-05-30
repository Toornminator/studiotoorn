import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/server";

/**
 * FAQ — the objection-handling beat of CONVERT. Sits between the
 * testimonials and the booking form so the last doubts (price, allergies,
 * cancellation, insurance) are answered right before the visitor writes.
 *
 * Native <details>/<summary> accordion: accessible, keyboard-operable, and
 * zero client JS. Every answer is sourced from real, already-published
 * content (the booking terms + areas served), so nothing here is invented.
 *
 * Also emits FAQPage JSON-LD. Google rarely shows FAQ rich results for
 * non-institutional sites anymore, but the markup still feeds AI-search
 * answers (AI Overviews, ChatGPT, Perplexity) where the brand wants to be
 * cited for "private chef Marbella" style questions.
 */
export async function Faq() {
  const t = await getDictionary();
  const { eyebrow, title, intro, items } = t.faq;
  if (items.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red"
          >
            {eyebrow}
          </Reveal>
          <h2
            id="faq-heading"
            className="mt-4 max-w-3xl font-display leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={title} />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>{intro}</span>
          </Reveal>
        </header>

        <div className="mt-10 md:mt-14">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(0.3, i * 0.05)}>
              <details className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span
                    className="font-display text-ink transition-colors group-hover:text-tattoo-red"
                    style={{ fontSize: "clamp(19px, 1.9vw, 25px)", lineHeight: 1.15 }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-display text-tattoo-red transition-transform duration-300 group-open:rotate-[135deg]"
                    style={{ fontSize: 28, lineHeight: 1 }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="max-w-2xl pb-7 font-serif text-ink/75"
                  style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: 1.6 }}
                >
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
