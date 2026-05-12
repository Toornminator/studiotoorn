"use client";

import { motion, type Variants } from "framer-motion";

/**
 * Generic block reveal — fades + slides up when the element scrolls into
 * view. Used for paragraphs, meta strips, anything that doesn't need
 * per-word animation.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const MotionAs = motion[As as keyof typeof motion] as typeof motion.div;
  return (
    <MotionAs
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionAs>
  );
}

const lineVariants: Variants = {
  hidden: { y: "105%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.95,
      delay: 0.08 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * Word-by-word reveal — splits the string into words, each word slides up
 * from below a clip line. Best for big display headlines. Extra padding-
 * bottom on the wrapper to keep italic descenders from being clipped.
 */
export function RevealWords({
  text,
  className,
  as: As = "span",
  delayStart = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  delayStart?: number;
}) {
  const words = text.split(/\s+/);

  const Tag = motion[As] as typeof motion.span;
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delayStart }}
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-flex overflow-hidden align-baseline"
          style={{ paddingBottom: "0.16em", marginBottom: "-0.16em" }}
        >
          <motion.span
            custom={i}
            variants={lineVariants}
            className="inline-block"
            style={{ whiteSpace: "pre" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
