import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecipeArticle } from "@/components/kookboek/RecipeArticle";
import { RecipeStructuredData } from "@/components/seo/StructuredData";
import { getRecipe, getRecipeSlugs } from "@/lib/content/recipes";
import { getCurrentLocale, getDictionary, setRequestLocale } from "@/i18n/server";
import { buildAlternates, localizedHref, LOCALES } from "@/i18n/config";
import { seoDescription, seoTitle } from "@/lib/seo";

const SITE_URL = "https://toornattable.com";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getRecipeSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  setRequestLocale(localeParam);
  const locale = await getCurrentLocale();
  const recipe = await getRecipe(slug, locale);
  if (!recipe) return {};

  const description = seoDescription(recipe.intro ?? recipe.body?.[0]);

  return {
    title: seoTitle(recipe.title),
    description,
    alternates: buildAlternates(`/recipes/${slug}`, locale),
    openGraph: {
      type: "article",
      title: `${recipe.title} · TOORN at table`,
      description,
      url: `${SITE_URL}${localizedHref(`/recipes/${slug}`, locale)}`,
      images: recipe.heroImage ? [recipe.heroImage] : undefined,
    },
  };
}

export default async function RecipePage({ params }: Params) {
  const { locale: localeParam, slug } = await params;
  setRequestLocale(localeParam);
  const [locale, t] = await Promise.all([getCurrentLocale(), getDictionary()]);
  const recipe = await getRecipe(slug, locale);
  if (!recipe) notFound();

  return (
    <>
      <RecipeStructuredData recipe={recipe} locale={locale} />
      <RecipeArticle recipe={recipe} t={t} locale={locale} />
    </>
  );
}
