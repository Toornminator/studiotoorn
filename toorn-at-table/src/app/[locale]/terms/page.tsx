import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildAlternates, localizedHref } from "@/i18n/config";
import { getCurrentLocale, getDictionary, setRequestLocale } from "@/i18n/server";

type Params = { params: Promise<{ locale: string }> };

// Title is bare; the layout template appends "· TOORN at table".
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  setRequestLocale((await params).locale);
  const locale = await getCurrentLocale();
  return {
    title: "Terms",
    description:
      "How a private dinner, villa week, workshop or event booking with TOORN at table actually works. Booking flow, payment, cancellation tiers, allergy policy, applicable law.",
    alternates: buildAlternates("/terms", locale),
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({ params }: Params) {
  setRequestLocale((await params).locale);
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  return (
    <LegalPage
      eyebrow={t.terms.eyebrow}
      title={t.terms.title}
      lastUpdated={t.terms.lastUpdated}
      intro={t.terms.intro}
      sections={t.terms.sections}
      contactNote={t.terms.contactNote}
      backLabel="TOORN at table"
      homeHref={localizedHref("/", locale)}
    />
  );
}
