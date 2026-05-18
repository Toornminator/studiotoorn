import { Parallax } from "@/components/ui/Parallax";
import { getDictionary } from "@/i18n/server";
import { Portrait } from "./Portrait";

/**
 * About / Nick's story section. Async server component pulling its copy
 * from the locale dictionary; the actual portrait + parallax stay client
 * children underneath.
 */
export async function About() {
  const t = await getDictionary();

  return (
    <section
      id="over-nick"
      aria-labelledby="about-heading"
      className="relative w-full"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-12 md:py-40">
        <div className="md:col-span-5">
          <Parallax intensity={60} className="relative mx-auto w-full max-w-[320px] md:max-w-none">
            <Portrait />
            <span className="absolute -bottom-3 -right-3 rotate-[-4deg] bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cream">
              {t.about.portraitCaption}
            </span>
          </Parallax>
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.about.eyebrow}
          </p>

          <h2
            id="about-heading"
            className="mt-5 font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(40px, 6.5vw, 84px)" }}
          >
            {t.about.headlineLine1}
            <br />
            {t.about.headlineLine2}
            <br />
            <span className="text-ink/70">{t.about.headlineLine3}</span>
          </h2>

          <div
            className="mt-8 space-y-5 font-serif text-ink/85"
            style={{ fontSize: "clamp(17px, 1.3vw, 19px)", lineHeight: 1.55 }}
          >
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
            <p>{t.about.body3}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
            <span>{t.about.chip1}</span>
            <span aria-hidden className="text-ink/30">·</span>
            <span>{t.about.chip2}</span>
            <span aria-hidden className="text-ink/30">·</span>
            <span>{t.about.chip3}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
