"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { realNumbers } from "@/lib/content";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(reduceMotion ? value : 0);
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(motionValue, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, motionValue, reduceMotion, value]);

  const formattedDisplay = String(display).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return <span ref={ref}>{formattedDisplay}</span>;
}

export function NumbersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Numeri dello Studio" className="border-y border-navy/10 bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid md:grid-cols-3">
          {realNumbers.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              className="border-b border-navy/10 py-6 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="font-display text-[clamp(3.35rem,5vw,4.2rem)] font-medium leading-none tracking-[-0.05em] text-navy">
                <Counter value={item.value} />{item.suffix}
              </p>
              <p className="mt-4 max-w-[15rem] text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.14em] text-ink/52">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
