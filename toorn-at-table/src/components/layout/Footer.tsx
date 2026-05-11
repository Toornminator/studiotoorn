import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="relative w-full bg-ink text-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-20 md:px-12 md:pb-16 md:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7" id="newsletter">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-mustard">
              Brief vanuit de keuken
            </p>
            <h2
              className="mt-4 font-display italic leading-[1.05]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Eens per maand een berichtje over wat ik kook, waar ik kook
              en wat eraan komt.
            </h2>
            <p
              className="mt-4 max-w-xl font-serif italic text-cream/75"
              style={{ fontSize: 16 }}
            >
              Geen spam, één klik om uit te schrijven, een receptje per
              brief. Bevestiging in je inbox.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream/50">
              TOORN at table
            </p>
            <p
              className="mt-4 font-display italic leading-[1.1]"
              style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
            >
              Private chef
              <br />
              Costa del Sol
            </p>
            <ul className="mt-6 space-y-1.5 font-serif italic text-cream/80" style={{ fontSize: 16 }}>
              <li>
                <a href="mailto:info@studiotoorn.com" className="hover:text-tattoo-mustard">
                  info@studiotoorn.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31614412102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tattoo-mustard"
                >
                  +31 6 14 41 21 02
                </a>
              </li>
            </ul>

            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/55">
              <li><a href="#kookboek" className="hover:text-tattoo-mustard">Kookboek</a></li>
              <li><a href="#events" className="hover:text-tattoo-mustard">Events</a></li>
              <li><a href="#contact" className="hover:text-tattoo-mustard">Contact</a></li>
              <li><a href="#over-nick" className="hover:text-tattoo-mustard">Over Nick</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 md:flex-row md:items-center">
          <p>© {year} TOORN at table — alle rechten voorbehouden.</p>
          <p>Gemaakt met liefde aan de Costa del Sol.</p>
        </div>
      </div>
    </footer>
  );
}
