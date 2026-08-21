"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Container>
        <div className="relative py-16 sm:py-20 lg:py-24">
          <motion.div
            className="h-px origin-left bg-white/14"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          />

          <div className="relative mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
            <div>
              <motion.p
                className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-blue"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Iniziamo
              </motion.p>

              <motion.h2
                className="mt-4 max-w-[700px] font-display text-[clamp(2.4rem,3.8vw,4.3rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                Parliamo del tuo progetto.
              </motion.h2>

              <motion.p
                className="mt-5 max-w-[620px] text-[0.92rem] leading-7 text-white/52"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                Raccontaci obiettivi, esigenze e complessità del progetto.
                Valutiamo insieme il percorso più adatto.
              </motion.p>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="lg:justify-self-end"
            >
              <a
                href="#contatti"
                className="group inline-flex min-w-[180px] items-center justify-between gap-8 border border-white/28 px-6 py-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white outline-none transition-all duration-300 hover:border-blue hover:bg-white/[0.03] hover:text-blue focus-visible:ring-2 focus-visible:ring-blue"
              >
                Contattaci
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
