"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
      <Container>
        <motion.div
          className="h-px origin-left bg-white/22"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={reduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        />
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
          <motion.h2
            className="max-w-3xl font-display text-[clamp(2.4rem,4vw,4rem)] font-medium leading-[1.03] tracking-[-0.045em]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Parliamo del tuo progetto.
          </motion.h2>
          <a
            href="#contatti"
            className="group inline-flex w-fit items-center gap-3 bg-white px-5 py-3.5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-navy outline-none transition-colors hover:bg-cyan focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Contattaci
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </Container>
    </section>
  );
}
