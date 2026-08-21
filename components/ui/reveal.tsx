"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  clip?: boolean;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className = "",
  clip = false,
  delay = 0,
  y = 18,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: clip ? 0 : y,
              clipPath: clip ? "inset(0 0 14% 0)" : "inset(0 0 0% 0)",
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: clip ? 0.9 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
