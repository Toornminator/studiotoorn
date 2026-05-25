import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { getDictionary } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Privacy · TOORN at table",
  description:
    "What we know about you and what we don't. The full privacy notice for TOORN at table.",
  robots: { index: true, follow: true },
};

export default async function PrivacyPage() {
  const t = await getDictionary();
  return (
    <LegalPage
      eyebrow={t.privacy.eyebrow}
      title={t.privacy.title}
      lastUpdated={t.privacy.lastUpdated}
      intro={t.privacy.intro}
      sections={t.privacy.sections}
      contactNote={t.privacy.contactNote}
      backLabel="TOORN at table"
    />
  );
}
