import { getTimelineChapters } from "@/lib/content/timeline";
import { getCurrentLocale, getDictionary } from "@/i18n/server";
import { TimelineRail } from "./TimelineRail";

/**
 * Timeline server wrapper. Resolves chapters into the active locale and
 * hands them, together with the localised section headers, to the
 * presentational client component that owns the sticky-rail interaction.
 */
export async function Timeline() {
  const locale = await getCurrentLocale();
  const [chapters, t] = await Promise.all([
    Promise.resolve(getTimelineChapters(locale)),
    getDictionary(),
  ]);

  return (
    <TimelineRail
      chapters={chapters}
      eyebrow={t.timeline.eyebrow}
      title={t.timeline.title}
      chapterPrefix={t.timeline.chapterPrefix}
    />
  );
}
