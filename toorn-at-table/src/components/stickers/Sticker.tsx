"use client";

import { useEffect, useRef, useState } from "react";
import { animated, to, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { useStickerStore } from "./useStickerStore";

const SPRING_CONFIG = { tension: 300, friction: 30 };
const BASE_Z = 40;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export type StickerProps = {
  id: string;
  imagePath: string;
  initialX: number;
  initialY: number;
  initialRotation?: number;
  width: number;
  height: number;
  alt?: string;
};

export function Sticker({
  id,
  imagePath,
  initialX,
  initialY,
  initialRotation = 0,
  width,
  height,
  alt = "",
}: StickerProps) {
  const hasHydrated = useStickerStore((s) => s.hasHydrated);
  const stored = useStickerStore((s) => s.positions[id]);
  const setPosition = useStickerStore((s) => s.setPosition);
  const setRotation = useStickerStore((s) => s.setRotation);
  const bringToFront = useStickerStore((s) => s.bringToFront);

  const startX = stored?.x ?? initialX;
  const startY = stored?.y ?? initialY;
  const startRot = stored?.rotation ?? initialRotation;
  const baseZ = stored?.zIndex ?? BASE_Z;

  const [{ x, y, rotate, scale }, api] = useSpring(() => ({
    x: initialX,
    y: initialY,
    rotate: initialRotation,
    scale: 1,
    config: SPRING_CONFIG,
  }));

  const [isDragging, setIsDragging] = useState(false);
  const baseRotRef = useRef(initialRotation);

  useEffect(() => {
    if (!hasHydrated) return;
    baseRotRef.current = startRot;
    api.start({
      x: startX,
      y: startY,
      rotate: startRot,
      immediate: true,
    });
  }, [hasHydrated, startX, startY, startRot, api]);

  const bind = useGesture(
    {
      onDragStart: () => {
        bringToFront(id);
        baseRotRef.current = rotate.get();
        setIsDragging(true);
      },
      onDrag: ({ offset: [ox, oy], velocity: [vx] }) => {
        const tilt = clamp(baseRotRef.current + vx * 10, -20, 20);
        api.start({ x: ox, y: oy, rotate: tilt, scale: 1.05 });
      },
      onDragEnd: ({ offset: [ox, oy] }) => {
        const wobble = (Math.random() - 0.5) * 4;
        const finalRot = baseRotRef.current + wobble;
        api.start({ x: ox, y: oy, rotate: finalRot, scale: 1 });
        setPosition(id, ox, oy);
        setRotation(id, finalRot);
        setIsDragging(false);
      },
      onHover: ({ hovering }) => {
        if (isDragging) return;
        api.start({ scale: hovering ? 1.05 : 1 });
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
      },
    },
  );

  const transform = to(
    [x, y, rotate, scale],
    (tx, ty, r, s) =>
      `translate3d(${tx}px, ${ty}px, 0) rotate(${r}deg) scale(${s})`,
  );

  return (
    <animated.div
      {...bind()}
      data-cursor="grab"
      className="absolute top-0 left-0 select-none will-change-transform"
      style={{
        width,
        height,
        transform,
        zIndex: isDragging ? 1000 : baseZ,
        pointerEvents: "auto",
        touchAction: "none",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagePath}
        alt={alt}
        draggable={false}
        className="pointer-events-none h-full w-full select-none"
        style={{
          userSelect: "none",
          objectFit: "contain",
          filter: isDragging
            ? "drop-shadow(0 14px 24px rgba(26,26,26,0.28))"
            : "drop-shadow(0 5px 10px rgba(26,26,26,0.18))",
          transition: "filter 220ms ease",
        }}
      />
    </animated.div>
  );
}
