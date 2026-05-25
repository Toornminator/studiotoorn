import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Terms · TOORN at table",
  description:
    "How a booking works, in plain words. Terms of service for TOORN at table.",
  robots: { index: true, follow: true },
};

export default async function TermsPage() {
  const t = await getDictionary();
  return (
    <LegalPage
      eyebrow={t.terms.eyebrow}
      title={t.terms.title}
      lastUpdated={t.terms.lastUpdated}
      intro={t.terms.intro}
      sections={t.terms.sections}
      contactNote={t.terms.contactNote}
      backLabel="TOORN at table"
    />
  );
}
