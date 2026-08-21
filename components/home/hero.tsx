"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[88svh] items-center overflow-hidden bg-paper pt-24 text-navy lg:min-h-[90svh]"
    >
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-20">
        <div className="lg:col-span-5 lg:pr-4">
          <motion.p
            className="section-label text-ink/52"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <span className="text-blue">Studio Schettino</span>
            <span className="h-px w-8 bg-navy/25" />
            Ingegneria
          </motion.p>

          <h1 id="hero-title" className="heading-hero mt-8 sm:mt-10">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.82, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Progettazioni
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em] text-blue">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.82, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                integrate.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-md text-base leading-7 text-ink/64 sm:text-lg sm:leading-8"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            Progettazioni integrate, direzione lavori, project e BIM Management.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            <a
              href="#studio"
              className="group inline-flex items-center gap-3 bg-navy px-5 py-3.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white outline-none transition-colors hover:bg-blue focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
            >
              Scopri lo studio
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contatti"
              className="border-b border-navy/30 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy outline-none transition-colors hover:border-blue hover:text-blue focus-visible:ring-2 focus-visible:ring-blue"
            >
              Contatti
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[420px] overflow-hidden bg-[#e6eaec] sm:min-h-[560px] lg:col-span-7 lg:min-h-[650px] xl:min-h-[700px]"
          initial={reduceMotion ? false : { clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image
            src="/images/hero/ss106-tunnel.jpg"
            alt="Grande infrastruttura lungo la SS106 visitata dal team Studio Schettino"
            fill
            preload
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
          <motion.span
            className="absolute inset-x-0 bottom-0 h-1 origin-left bg-blue"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
