import { getRecipes } from "@/lib/content/recipes";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { localizedHref } from "@/i18n/config";
import { RecipeIndex } from "./RecipeIndex";

export async function Kookboek() {
  const locale = await getCurrentLocale();
  const [recipes, t] = await Promise.all([getRecipes(locale), getDictionary()]);

  return (
    <section
      id="cookbook"
      aria-labelledby="cookbook-heading"
      className="relative w-full"
    >
      <Polaroid
        src="/images/polaroids/schoonmaak.jpeg"
        alt={{
          en: "Closing time in the kitchen",
          es: "Hora de cierre en la cocina",
          nl: "Sluitingstijd in de keuken",
        }}
        caption={{
          en: "After service",
          es: "Después del servicio",
          nl: "Na de service",
        }}
        size="md"
        rotation={-3}
        className="absolute right-[max(6vw,120px)] top-[8vh] z-10 hidden lg:block"
      />
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-32 md:px-12 md:pt-32 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {t.cookbook.eyebrow}
          </Reveal>
          <h2
            id="cookbook-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text={t.cookbook.title} />
          </h2>
          <Reveal as="p" delay={0.2} className="mt-6 max-w-2xl font-serif italic text-ink/75">
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              {t.cookbook.intro}
            </span>
          </Reveal>

          {/* Doorway to the installable cookbook app (/cookbook). */}
          <Reveal delay={0.3} className="mt-7">
            <a
              href={localizedHref("/cookbook", locale)}
              data-cursor={t.cookbook.appLink}
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70 transition-colors hover:text-tattoo-red"
            >
              {t.cookbook.appLink}
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
        </header>

        <RecipeIndex recipes={recipes} />
      </div>
    </section>
  );
}
