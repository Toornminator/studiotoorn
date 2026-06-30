import "server-only";
import { timelineChapters as staticChapters } from "@/components/about/timeline-data";
import { pick, pickOptional, pickParagraphs } from "@/lib/content/i18n";
import type { Locale } from "@/i18n/config";
import type { LocalisedTimelineChapter, TimelineChapter } from "@/lib/types";

function resolveChapter(
  c: LocalisedTimelineChapter,
  locale: Locale,
): TimelineChapter {
  return {
    id: c.id,
    number: c.number,
    yearShort: c.yearShort,
    period: pick(c.period, locale),
    title: pick(c.title, locale),
    body: pickParagraphs(c.body, locale),
    marginalia: pickOptional(c.marginalia, locale),
  };
}

/**
 * Resolve the static timeline chapters into the active locale. The
 * chapters are part of the brand bible (Nick's life story) and ship with
 * the build.
 */
export function getTimelineChapters(locale: Locale): TimelineChapter[] {
  return staticChapters.map((c) => resolveChapter(c, locale));
}
