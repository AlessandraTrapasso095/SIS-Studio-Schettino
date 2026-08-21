"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { realNumbers } from "@/lib/content";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(reduceMotion ? value : 0);
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, motionValue, reduceMotion, value]);

  return <span ref={ref}>{display.toLocaleString("it-IT")}</span>;
}

export function NumbersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Numeri dello Studio" className="bg-blue text-white">
      <Container className="grid md:grid-cols-3">
        {realNumbers.map((item, index) => (
          <motion.div
            key={item.label}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.65 }}
            className="border-b border-white/18 py-12 md:border-b-0 md:border-r md:px-8 md:py-16 md:first:pl-0 md:last:border-r-0 lg:py-20"
          >
            <p className="font-display text-[clamp(4.3rem,8vw,8.5rem)] font-medium leading-none tracking-[-0.075em]">
              <Counter value={item.value} />{item.suffix}
            </p>
            <p className="mt-5 max-w-[13rem] text-[0.65rem] uppercase leading-5 tracking-[0.2em] text-white/63">
              {item.label}
            </p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
