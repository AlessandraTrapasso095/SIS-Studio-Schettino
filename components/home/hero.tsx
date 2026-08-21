"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-navy text-white"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero/ss106-tunnel.jpg"
          alt="Grande infrastruttura visitata dal team Studio Schettino lungo la SS106"
          fill
          preload
          className="object-cover object-[62%_center] sm:object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,11,25,0.86)_0%,rgba(2,11,25,0.57)_42%,rgba(2,11,25,0.12)_75%),linear-gradient(0deg,rgba(2,11,25,0.68)_0%,transparent_50%)]" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.09]" />

      <span className="absolute left-[7.5%] top-0 hidden h-full w-px bg-white/12 lg:block" />
      <span className="absolute right-[7.5%] top-0 hidden h-full w-px bg-white/12 lg:block" />

      <Container className="relative flex min-h-svh flex-col justify-end pb-10 pt-36 sm:pb-12 lg:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <motion.div
              className="mb-6 flex items-center gap-4 text-[0.64rem] font-semibold uppercase tracking-[0.25em] text-white/70 sm:mb-8"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <span className="text-cyan">SIS / 2026</span>
              <span className="h-px w-10 bg-white/50" />
              <span>Ingegneria integrata</span>
            </motion.div>

            <h1
              id="hero-title"
              className="font-display text-[clamp(3.2rem,9.1vw,10.8rem)] font-medium uppercase leading-[0.78] tracking-[-0.075em]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  Studio
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em] leading-[0.84] text-white/98">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                >
                  Schettino
                </motion.span>
              </span>
            </h1>

            <motion.div
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.19em] text-white/72 sm:mt-10"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span>Progettazione</span>
              <span className="text-cyan">/</span>
              <span>Infrastrutture</span>
              <span className="text-cyan">/</span>
              <span>BIM</span>
            </motion.div>
          </div>

          <motion.div
            className="border-l border-white/25 pl-6 text-sm leading-7 text-white/68 lg:mb-4"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <p>
              Impiantistica · Antincendio · Sicurezza e Consulenza · Formazione ·
              Opere Strategiche · Progettazione civile
            </p>
          </motion.div>
        </div>

        <div className="mt-10 flex items-end justify-between border-t border-white/25 pt-5 sm:mt-12">
          <p className="text-[0.58rem] uppercase tracking-[0.2em] text-white/45">
            Concept demo non ufficiale
          </p>
          <a
            href="#studio"
            aria-label="Scorri alla sezione Studio"
            className="group flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
          >
            Scroll
            <span className="grid size-9 place-items-center border border-white/25 transition-colors group-hover:border-cyan group-hover:text-cyan">
              <ArrowDown size={14} />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
