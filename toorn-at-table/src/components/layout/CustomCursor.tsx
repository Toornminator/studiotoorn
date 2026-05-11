"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "dot" | "link" | "grab";

const SPRING = { damping: 28, stiffness: 360, mass: 0.55 };
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
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  useEffect(() => {
    if (isCoarsePointer) return;

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as Element | null;
      if (!target) {
        setMode("dot");
        return;
      }
      if (target.closest('[data-cursor="grab"]')) {
        setMode("grab");
        return;
      }
      if (
        target.closest(
          'a, button, [role="button"], [data-cursor="link"], summary, label',
        )
      ) {
        setMode("link");
        return;
      }
      setMode("dot");
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
      document.body.style.cursor = previousCursor;
    };
  }, [isCoarsePointer, x, y]);

  if (isCoarsePointer) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {mode === "dot" && (
          <motion.svg
            key="dot"
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={MODE_TRANSITION}
          >
            <path d="M7 0 Q14 9 7 18 Q0 9 7 0 Z" fill="#1A1A1A" />
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
    </motion.div>
  );
}
