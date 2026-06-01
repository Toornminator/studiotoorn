"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

type CursorMode = "dot" | "link" | "grab";

const MODE_TRANSITION = { duration: 0.18, ease: "easeOut" } as const;

function subscribeCoarsePointer(callback: () => void) {
  const media = window.matchMedia("(pointer: coarse)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

function getCoarsePointerServer() {
  return false;
}

export function CustomCursor() {
  const isCoarsePointer = useSyncExternalStore(
    subscribeCoarsePointer,
    getCoarsePointer,
    getCoarsePointerServer,
  );
  const [mode, setMode] = useState<CursorMode>("dot");
  const [label, setLabel] = useState<string | null>(null);
  const modeRef = useRef<CursorMode>("dot");
  const labelRef = useRef<string | null>(null);
  // Bound directly to the pointer (no spring): the cursor must track 1:1
  // with zero perceived lag. A spring here reads as a delay.
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  useEffect(() => {
    if (isCoarsePointer) return;

    // `cursor: none` on body alone is not enough: Tailwind's
    // `cursor-pointer` utility and the user-agent default on
    // <a>/<button> both win the CSS cascade and the system pointer
    // pops back over interactive elements. Adding a class to <html>
    // lets a global rule in globals.css force `cursor: none
    // !important` on every element + pseudo-element underneath.
    document.documentElement.classList.add("custom-cursor-active");

    const setModeIfChanged = (next: CursorMode) => {
      if (modeRef.current === next) return;
      modeRef.current = next;
      setMode(next);
    };
    const setLabelIfChanged = (next: string | null) => {
      if (labelRef.current === next) return;
      labelRef.current = next;
      setLabel(next);
    };

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as Element | null;
      if (!target) {
        setModeIfChanged("dot");
        setLabelIfChanged(null);
        return;
      }
      // Grab is a reserved keyword for sticker drag — no label.
      if (target.closest('[data-cursor="grab"]')) {
        setModeIfChanged("grab");
        setLabelIfChanged(null);
        return;
      }
      // Any other data-cursor value becomes the floating pill label.
      const labelEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (labelEl?.dataset.cursor && labelEl.dataset.cursor !== "grab") {
        setModeIfChanged("link");
        setLabelIfChanged(labelEl.dataset.cursor);
        return;
      }
      if (
        target.closest('a, button, [role="button"], summary, label')
      ) {
        setModeIfChanged("link");
        setLabelIfChanged(null);
        return;
      }
      setModeIfChanged("dot");
      setLabelIfChanged(null);
    };

    const handleLeave = () => {
      x.set(-200);
      y.set(-200);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isCoarsePointer, x, y]);

  if (isCoarsePointer) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {mode === "dot" && (
          <motion.svg
            key="dot"
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={MODE_TRANSITION}
            // Warm-grey fork picks up the brand palette but reads on both
            // the cream body and the ink footer. The doubled drop-shadow
            // is the trick: the dark shadow lifts it off cream, the
            // hairline white halo lifts it off the ink footer + the
            // preloader, so the mark never visually disappears.
            style={{
              filter:
                "drop-shadow(0 1px 1.5px rgba(20,16,12,0.45)) drop-shadow(0 0 1px rgba(244,237,224,0.5))",
            }}
          >
            <g
              stroke="#7a756c"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Four tines */}
              <line x1="3" y1="2" x2="3" y2="14" />
              <line x1="8" y1="2" x2="8" y2="14" />
              <line x1="13" y1="2" x2="13" y2="14" />
              <line x1="18" y1="2" x2="18" y2="14" />
              {/* Cross-bar where the tines meet the handle */}
              <line x1="3" y1="14" x2="18" y2="14" />
              {/* Handle */}
              <line x1="10.5" y1="14" x2="10.5" y2="24" />
            </g>
          </motion.svg>
        )}
        {mode === "link" && (
          <motion.div
            key="link"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={MODE_TRANSITION}
            className="rounded-full border-2 border-ink"
            style={{ width: 34, height: 34 }}
          />
        )}
        {mode === "grab" && (
          <motion.svg
            key="grab"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: 8 }}
            transition={MODE_TRANSITION}
          >
            <circle cx="17" cy="17" r="14" fill="#1A1A1A" />
            <g stroke="#F4EDE0" strokeWidth="2" strokeLinecap="round">
              <line x1="11" y1="14" x2="11" y2="22" />
              <line x1="15" y1="11" x2="15" y2="23" />
              <line x1="19" y1="11" x2="19" y2="23" />
              <line x1="23" y1="14" x2="23" y2="22" />
            </g>
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Floating label pill — appears to the side of the cursor when the
          hovered element advertises a verb via data-cursor. */}
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, x: 4, y: 4, scale: 0.85 }}
            animate={{ opacity: 1, x: 22, y: 18, scale: 1 }}
            exit={{ opacity: 0, x: 4, y: 4, scale: 0.85 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute left-0 top-0 whitespace-nowrap rounded-full bg-ink px-3 py-1 font-mono uppercase text-cream"
            style={{ fontSize: 10, letterSpacing: "0.18em" }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
