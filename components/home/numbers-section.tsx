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
    <section aria-label="Numeri dello Studio" className="relative overflow-hidden bg-blue py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-[0.05em] -top-[0.28em] font-display text-[38vw] font-medium leading-none tracking-[-0.12em] text-white/[0.035]" aria-hidden="true">
        SIS
      </div>
      <Container className="relative">
        <div className="mb-14 flex items-center gap-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/52 sm:mb-20">
          <span className="text-cyan">Data / Studio</span>
          <span className="h-px w-10 bg-white/35" />
          <span>Valori verificati</span>
        </div>
        {realNumbers.map((item, index) => (
          <motion.div
            key={item.label}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.65 }}
            className="grid items-end gap-5 border-t border-white/22 py-9 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-10"
          >
            <p className="font-display text-[clamp(6rem,15vw,16rem)] font-medium leading-[0.72] tracking-[-0.1em] lg:col-span-6">
              <Counter value={item.value} />{item.suffix}
            </p>
            <div className="flex items-end justify-between gap-6 lg:col-span-6 lg:pb-3">
              <p className="max-w-lg font-display text-[clamp(1.7rem,3.6vw,4.1rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em] text-white/82">
                {item.label}
              </p>
              <span className="shrink-0 font-mono text-[0.54rem] text-cyan">N.{String(index + 1).padStart(2, "0")}</span>
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
