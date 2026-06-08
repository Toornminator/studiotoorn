import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildAlternates, localizedHref } from "@/i18n/config";
import { getCurrentLocale, getDictionary } from "@/i18n/server";

// Title is a bare string; the root layout's title.template prepends
// "· TOORN at table" automatically, so the final SERP entry reads
// "Privacy · TOORN at table" without double-branding.
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  return {
    title: "Privacy",
    description:
      "What data TOORN at table collects, how it is used, who else sees it, and how to ask for it back. The full GDPR privacy notice for the Costa del Sol private chef service.",
    alternates: buildAlternates("/privacy", locale),
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage() {
  const [t, locale] = await Promise.all([getDictionary(), getCurrentLocale()]);
  return (
    <LegalPage
      eyebrow={t.privacy.eyebrow}
      title={t.privacy.title}
      lastUpdated={t.privacy.lastUpdated}
      intro={t.privacy.intro}
      sections={t.privacy.sections}
      contactNote={t.privacy.contactNote}
      backLabel="TOORN at table"
      homeHref={localizedHref("/", locale)}
    />
  );
}
