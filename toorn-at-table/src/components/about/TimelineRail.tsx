"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import type { TimelineChapter } from "@/lib/types";

const CARD_EASE = [0.16, 1, 0.3, 1] as const;

function ChapterCard({
  chapter,
  chapterPrefix,
  reduceMotion,
  onActive,
}: {
  chapter: TimelineChapter;
  chapterPrefix: string;
  reduceMotion: boolean;
  onActive: (id: string) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const isActive = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isActive) onActive(chapter.id);
  }, [isActive, chapter.id, onActive]);

  return (
    <motion.article
      ref={ref}
      id={chapter.id}
      className="relative"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: CARD_EASE }}
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-tattoo-red">
          {chapterPrefix} {chapter.number}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:hidden">
          {chapter.period}
        </span>
      </div>
      <motion.h3
        className="mt-4 max-w-2xl font-display italic leading-[1.02] text-ink"
        style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: CARD_EASE, delay: 0.05 }}
      >
        {chapter.title}
      </motion.h3>
      <motion.div
        className="mt-6 max-w-2xl space-y-5 font-serif text-ink/85"
        style={{ fontSize: "clamp(17px, 1.25vw, 19px)", lineHeight: 1.6 }}
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: CARD_EASE, delay: 0.12 }}
      >
        {chapter.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </motion.div>
      {chapter.marginalia && (
        <motion.p
          className="mt-6 font-hand text-tattoo-red"
          style={{ fontSize: "20px" }}
          initial={reduceMotion ? false : { opacity: 0, rotate: -2 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, rotate: -1.5 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {chapter.marginalia}
        </motion.p>
      )}
    </motion.article>
  );
}

export function TimelineRail({
  chapters,
  eyebrow,
  title,
  chapterPrefix,
}: {
  chapters: TimelineChapter[];
  eyebrow: string;
  title: string;
  chapterPrefix: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState(chapters[0].id);
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="tijdlijn"
      aria-labelledby="timeline-heading"
      className="relative w-full bg-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-32 md:px-12 md:pb-48">
        <header className="border-t border-ink/15 pt-12 md:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
            {eyebrow}
          </p>
          <h2
            id="timeline-heading"
            className="mt-4 max-w-3xl font-display italic leading-[0.95] text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {title}
          </h2>
        </header>

        <div
          ref={railRef}
          className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12"
        >
          {/* Sticky year column */}
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-28">
              <div className="relative pl-1">
                <div
                  aria-hidden
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/15"
                />
                <motion.div
                  aria-hidden
                  className="absolute left-[7px] top-2 w-px origin-top bg-tattoo-red"
                  style={{
                    scaleY: reduceMotion ? 1 : scrollYProgress,
                    height: "calc(100% - 1rem)",
                  }}
                />
                <ul className="space-y-7 font-mono text-[11px] uppercase tracking-[0.22em]">
                  {chapters.map((c) => {
                    const active = c.id === activeId;
                    return (
                      <li key={c.id} className="relative pl-8">
                        <span
                          aria-hidden
                          className="absolute left-[3px] top-[3px] block h-2 w-2 rounded-full border transition-colors"
                          style={{
                            backgroundColor: active ? "#C8202A" : "#F4EDE0",
                            borderColor: active
                              ? "#C8202A"
                              : "rgba(26,26,26,0.4)",
                          }}
                        />
                        <span
                          className={`block transition-colors ${
                            active ? "text-tattoo-red" : "text-ink/45"
                          }`}
                        >
                          {c.yearShort}
                        </span>
                        <span
                          className={`mt-0.5 block text-[10px] tracking-[0.22em] transition-colors ${
                            active ? "text-ink/70" : "text-ink/35"
                          }`}
                        >
                          {c.period}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          {/* Cards column */}
          <div className="space-y-28 md:col-span-9 md:space-y-40">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                chapterPrefix={chapterPrefix}
                reduceMotion={reduceMotion}
                onActive={setActiveId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
