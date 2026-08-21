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
      className="relative flex min-h-svh items-end overflow-hidden bg-navy text-white"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero/ss106-tunnel.jpg"
          alt="Grande infrastruttura lungo la SS106 visitata dal team Studio Schettino"
          fill
          preload
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,19,38,0.72)_0%,rgba(2,19,38,0.34)_48%,rgba(2,19,38,0.08)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#021326]/55 via-transparent to-[#021326]/10" />

      <Container className="relative z-10 pb-14 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <h1 id="hero-title" className="heading-hero-brand text-white">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                Studio
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.09em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.27, ease: [0.22, 1, 0.36, 1] }}
              >
                Schettino
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/72 sm:text-xs"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Progettazione <span className="px-2 text-cyan">/</span> Infrastrutture <span className="px-2 text-cyan">/</span> BIM
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <a
              href="#studio"
              className="group inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy outline-none transition-colors hover:bg-cyan focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Scopri lo studio
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contatti"
              className="border-b border-white/45 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white outline-none transition-colors hover:border-cyan hover:text-cyan focus-visible:ring-2 focus-visible:ring-cyan"
            >
              Contatti
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
