import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { BookingForm } from "./BookingForm";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-4xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            Hoofdstuk 06 · Aan tafel
          </Reveal>
          <h2
            id="contact-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text="Vertel me wat je in gedachten hebt. Ik denk binnen een dag mee." />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              Een private dinner aan huis, een villa-week, een verjaardag,
              zomaar — alles past, als de tafel maar belangrijk is. Hoe meer
              ik weet, hoe scherper het eerste voorstel.
            </span>
          </Reveal>
        </header>

        <div className="mt-14 md:mt-20">
          <BookingForm />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-ink/15 pt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/65 sm:grid-cols-3">
          <div>
            <p className="text-ink/40">Direct</p>
            <a
              href="mailto:info@studiotoorn.com"
              className="mt-1 block normal-case tracking-normal text-ink hover:text-tattoo-red"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontStyle: "italic" }}
            >
              info@studiotoorn.com
            </a>
          </div>
          <div>
            <p className="text-ink/40">WhatsApp</p>
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
            <p className="text-ink/40">Basis</p>
            <p
              className="mt-1 normal-case tracking-normal text-ink"
              style={{ fontFamily: "var(--font-serif), serif", fontSize: 16, fontStyle: "italic" }}
            >
              Costa del Sol, Spanje
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
