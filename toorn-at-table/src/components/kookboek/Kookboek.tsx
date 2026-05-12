import { getRecipes } from "@/lib/content/recipes";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import { RecipeIndex } from "./RecipeIndex";

export async function Kookboek() {
  const recipes = await getRecipes();

  return (
    <section
      id="kookboek"
      aria-labelledby="kookboek-heading"
      className="relative w-full"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 pb-32 md:px-12 md:pt-32 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <Reveal as="p" className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            Hoofdstuk 04 · Het Kookboek
          </Reveal>
          <h2
            id="kookboek-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            <RevealWords text="Recepten die ik thuis maak — eerlijke producten, simpele techniek, Spaanse zon." />
          </h2>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-6 max-w-2xl font-serif italic text-ink/75"
          >
            <span style={{ fontSize: "clamp(17px, 1.25vw, 19px)" }}>
              Een klein, groeiend kookboek. Pak er een avond een uit, kook
              voor wie je liefhebt, drink er iets bij dat er volgens mij bij
              past.
            </span>
          </Reveal>
        </header>

        <RecipeIndex recipes={recipes} />
      </div>
    </section>
  );
}
