"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  type MotionValue,
} from "framer-motion";
import { useScrollMap } from "@/components/ui/useScrollMap";

/**
 * Text that inks itself in as you read it: every word starts as a faint
 * pencil ghost and takes on full ink as the scroll passes over it, so the
 * line fills at exactly the reader's pace. Scrubbed, never autonomous;
 * reduced motion gets the finished line.
 *
 * `lines` are rendered with a break between them on sm+ and share one
 * scroll range, so a two-line quote inks continuously.
 */
export function InkWords({ lines, className }: { lines: string[]; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 48%"] });

  const words = lines.map((l) => l.split(/\s+/).filter(Boolean));
  const total = words.reduce((n, w) => n + w.length, 0);
  // Index of each line's first word in the whole quote.
  const offsets = words.map((_, li) => words.slice(0, li).reduce((n, w) => n + w.length, 0));

  return (
    <span ref={ref} className={className}>
      {words.map((lineWords, li) => (
        <span key={li}>
          {li > 0 && (
            <>
              <br className="hidden sm:inline" />{" "}
            </>
          )}
          {lineWords.map((w, wi) => {
            const i = offsets[li] + wi;
            return (
              <Word key={`${li}-${wi}`} progress={scrollYProgress} index={i} total={total} reduce={reduce}>
                {w}
                {wi < lineWords.length - 1 ? " " : ""}
              </Word>
            );
          })}
        </span>
      ))}
    </span>
  );
}

function Word({
  children,
  progress,
  index,
  total,
  reduce,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  index: number;
  total: number;
  reduce: boolean;
}) {
  const start = index / total;
  const end = start + 1.5 / total;
  const opacity = useScrollMap(progress, [start, end], [reduce ? 1 : 0.14, 1]);
  const blur = useScrollMap(progress, [start, end], reduce ? ["blur(0px)", "blur(0px)"] : ["blur(1.5px)", "blur(0px)"]);
  return (
    <motion.span style={{ opacity, filter: blur, whiteSpace: "pre" }} className="inline-block">
      {children}
    </motion.span>
  );
}
