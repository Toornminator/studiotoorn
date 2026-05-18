"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n/client";
import type { MarginalNote } from "@/lib/types";

/**
 * Permanent-marker margin scrawl. Renders inside the recipe / dispatch
 * overlay anchored to a fixed slot (intro, essay, ingredients, method,
 * step-N). On desktop it floats out into the right gutter via absolute
 * positioning; on mobile it falls back to an inline aside since there
 * is no gutter.
 *
 * Rotation is deterministic per `id` so SSR and client hydration agree —
 * the same trick StampGrid uses.
 */

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function jitter(seed: string, range: number): number {
  return (hash(seed) % (range * 2 + 1)) - range;
}

const KIND_CLASSNAMES: Record<MarginalNote["kind"], string> = {
  scrawl: "text-ink/70",
  tip: "text-ink/70",
  warning: "text-tattoo-red",
  wrong: "text-tattoo-red",
};

export function MarginNote({
  note,
  className = "",
}: {
  note: MarginalNote;
  className?: string;
}) {
  const t = useT();
  const reduceMotion = useReducedMotion() ?? false;
  const isStraight = note.kind === "warning" || note.kind === "wrong";
  const rotation =
    note.rotation ?? (isStraight ? 0 : jitter(note.id, 5));
  const colour = KIND_CLASSNAMES[note.kind];
  const prefix =
    note.kind === "warning"
      ? t.marginalia.warningPrefix
      : note.kind === "wrong"
        ? t.marginalia.wrongPrefix
        : null;

  return (
    <motion.aside
      initial={reduceMotion ? false : { opacity: 0, y: 6, rotate: rotation }}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, rotate: rotation }
      }
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`font-hand leading-[1.25] ${colour} ${className}`}
      style={{
        fontSize: "clamp(15px, 1.1vw, 17px)",
        transform: `rotate(${rotation}deg)`,
      }}
      aria-label={note.kind === "wrong" ? "what went wrong" : undefined}
    >
      {prefix && (
        <span className="mr-1 line-through opacity-70">{prefix}</span>
      )}
      {note.body}
    </motion.aside>
  );
}

/**
 * Convenience wrapper that picks every note with a given anchor out of
 * a recipe's `marginalia` array. The overlay calls this once per slot
 * so callers don't have to filter by hand.
 */
export function MarginNotesForAnchor({
  notes,
  anchor,
  className = "",
}: {
  notes: MarginalNote[] | undefined;
  anchor: MarginalNote["anchor"];
  className?: string;
}) {
  if (!notes) return null;
  const filtered = notes.filter((n) => n.anchor === anchor);
  if (filtered.length === 0) return null;
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {filtered.map((n) => (
        <MarginNote key={n.id} note={n} />
      ))}
    </div>
  );
}
