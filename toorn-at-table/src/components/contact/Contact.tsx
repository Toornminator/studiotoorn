import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/server";
import { BookingForm } from "./BookingForm";

export async function Contact() {
  const t = await getDictionary();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-4xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.contact.eyebrow}
          </Reveal>
          <h2
            id="contact-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.contact.title} />
          </h2>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-2xl font-serif italic text-ink/75">
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {t.contact.intro}
            </span>
          </Reveal>
        </header>

        <div className="mt-14 md:mt-20">
          <BookingForm />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-ink/15 pt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/65 sm:grid-cols-3">
          <div>
            <p className="text-ink/40">{t.contact.directEyebrow}</p>
            <a
              href="mailto:info@studiotoorn.com"
              className="mt-1 block normal-case tracking-normal text-ink hover:text-tattoo-red"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontStyle: "italic" }}
            >
              info@studiotoorn.com
            </a>
          </div>
          <div>
            <p className="text-ink/40">{t.contact.directWhatsApp}</p>
            <a
              href="https://wa.me/31614412102"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block normal-case tracking-normal text-ink hover:text-tattoo-red"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontStyle: "italic" }}
            >
              +31 6 14 41 21 02
            </a>
          </div>
          <div>
            <p className="text-ink/40">{t.contact.directBase}</p>
            <p
              className="mt-1 normal-case tracking-normal text-ink"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontStyle: "italic" }}
            >
              {t.contact.baseValue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
