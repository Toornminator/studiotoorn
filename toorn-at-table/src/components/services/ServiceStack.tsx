"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useScrollMap } from "@/components/ui/useScrollMap";
import { Polaroid } from "@/components/polaroid/Polaroid";
import type { LocalisedString } from "@/lib/types";

export type ServiceCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  photo: { src: string; alt: LocalisedString; caption: LocalisedString };
};

/** Each card sits a hair off square, like menus dealt onto a table. */
const TILT = [-1.1, 0.8, -0.5, 1];

/**
 * The four ways to book, dealt like menu cards: each one pins a little
 * lower than the last, and as the next card slides over it the one
 * underneath sinks back (scales down, darkens a touch), so you end with a
 * stack on the table rather than a grid. Transform/opacity only.
 *
 * Reduced motion keeps the pinning (it is just layout) but drops the
 * sinking. Below md the polaroid is left off to keep each card short
 * enough to pin on a phone.
 */
export function ServiceStack({ cards }: { cards: ServiceCard[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <ul ref={ref} className="relative mt-14 md:mt-20">
      {cards.map((card, i) => (
        <StackCard
          key={card.title}
          card={card}
          index={i}
          total={cards.length}
          progress={scrollYProgress}
          reduce={reduce}
        />
      ))}
    </ul>
  );
}

function StackCard({
  card,
  index,
  total,
  progress,
  reduce,
}: {
  card: ServiceCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const depth = total - 1 - index; // cards still to come on top of this one
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : 1 - depth * 0.05]);
  const shade = useScrollMap(progress, [start, 1], [0, reduce ? 0 : depth * 0.07]);

  return (
    <li
      className="sticky h-[64svh] last:h-auto md:h-[70svh]"
      style={{ top: `calc(5.5rem + ${index * 1.4}rem)` }}
    >
      <motion.article
        style={{ scale, rotate: TILT[index % TILT.length], transformOrigin: "50% 0%" }}
        className="relative overflow-hidden border border-ink/15 bg-cream shadow-[0_-12px_40px_-24px_rgba(20,16,12,0.45),0_24px_50px_-30px_rgba(20,16,12,0.5)]"
      >
        <div className="flex gap-10 p-7 md:p-12">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-tattoo-red">
              {String(index + 1).padStart(2, "0")} · {card.eyebrow}
            </p>
            <h3
              className="mt-4 font-display leading-[1.05] text-ink"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
            >
              {card.title}
            </h3>
            <p className="mt-5 max-w-lg font-serif text-ink/80" style={{ fontSize: 16.5, lineHeight: 1.6 }}>
              {card.body}
            </p>
            <a
              href={card.href}
              data-cursor={card.cta}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-tattoo-red"
            >
              {card.cta}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                <path d="M1 5 H11 M8 1 L11 5 L8 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="hidden shrink-0 self-center md:block">
            <Polaroid
              src={card.photo.src}
              alt={card.photo.alt}
              caption={card.photo.caption}
              size="md"
              rotation={index % 2 === 0 ? 4 : -4}
            />
          </div>
        </div>
        {/* The sink: a faint shadow laid over cards further down the stack. */}
        <motion.div aria-hidden style={{ opacity: shade }} className="pointer-events-none absolute inset-0 bg-ink" />
      </motion.article>
    </li>
  );
}
