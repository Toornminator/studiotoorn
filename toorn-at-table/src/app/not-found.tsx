import Image from "next/image";
import Link from "next/link";
import { getCurrentLocale } from "@/i18n/server";

/**
 * Branded 404. Renders inside the root layout, so the nav + footer stay in
 * place and a lost visitor always has a way back. Copy is locale-aware,
 * read from the same cookie the rest of the site uses.
 */

const COPY = {
  en: {
    eyebrow: "404 · off the menu",
    heading: "This one's not on the menu.",
    body: "The page you were after has been cleared away, or it never made it past the pass. Let me walk you back to the table.",
    cta: "Back to the table",
  },
  es: {
    eyebrow: "404 · fuera de carta",
    heading: "Esto no está en la carta.",
    body: "La página que buscabas ya se ha recogido, o nunca llegó a salir de la cocina. Te acompaño de vuelta a la mesa.",
    cta: "Volver a la mesa",
  },
  nl: {
    eyebrow: "404 · niet op de kaart",
    heading: "Dit staat niet op de kaart.",
    body: "De pagina die je zocht is afgeruimd, of heeft de pas nooit gehaald. Ik loop je terug naar de tafel.",
    cta: "Terug naar tafel",
  },
} as const;

export default async function NotFound() {
  const locale = await getCurrentLocale();
  const t = COPY[locale] ?? COPY.en;

  return (
    <section
      aria-labelledby="notfound-heading"
      className="relative flex flex-col items-center justify-center px-5 py-32 text-center sm:px-12"
      style={{ minHeight: "max(70svh, 520px)" }}
    >
      <Image
        src="/images/chef_skull_knife_transparent.png"
        alt=""
        width={785}
        height={800}
        className="h-16 w-auto opacity-90 sm:h-20"
      />

      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red sm:text-[11px]">
        {t.eyebrow}
      </p>

      <h1
        id="notfound-heading"
        className="mt-5 max-w-3xl font-display italic leading-[0.95] text-ink"
        style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
      >
        {t.heading}
      </h1>

      <p
        className="mt-6 max-w-xl font-serif italic text-ink/75"
        style={{ fontSize: "clamp(17px, 1.4vw, 19px)", lineHeight: 1.5 }}
      >
        {t.body}
      </p>

      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tattoo-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        {t.cta}
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
          <path
            d="M1 5 H13 M10 1 L13 5 L10 9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </svg>
      </Link>
    </section>
  );
}
