"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/ui/container";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[94svh] overflow-hidden bg-navy text-white sm:min-h-svh"
    >
      <motion.div
        className="absolute -inset-y-[10%] inset-x-0"
        style={{ y: reduceMotion ? "0%" : imageY }}
        initial={reduceMotion ? false : { scale: 1.075 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero/ss106-tunnel.jpg"
          alt="Grande infrastruttura visitata dal team Studio Schettino lungo la SS106"
          fill
          preload
          className="object-cover object-[64%_center] sm:object-[55%_center]"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,248,248,0.58)_0%,rgba(246,248,248,0.06)_22%,transparent_42%),linear-gradient(0deg,rgba(2,11,25,0.88)_0%,rgba(2,11,25,0.28)_40%,transparent_72%)]" />
      <div className="absolute inset-y-0 left-[var(--page-gutter)] hidden w-px bg-white/18 lg:block" />

      <motion.div
        className="pointer-events-none absolute inset-0 z-20 bg-navy"
        initial={reduceMotion ? false : { clipPath: "inset(0 0 0% 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 1.15, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
      />

      <Container className="relative flex min-h-[94svh] flex-col justify-end pb-7 pt-36 sm:min-h-svh sm:pb-9">
        <motion.div
          className="mb-5 flex items-center gap-4 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-white/68 sm:mb-7"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
        >
          <span className="text-cyan">SIS / Engineering</span>
          <span className="h-px w-9 bg-white/45" />
          <span>Rende · Cosenza</span>
        </motion.div>

        <h1
          id="hero-title"
          className="font-display text-[clamp(4.1rem,8.8vw,10.6rem)] font-medium uppercase leading-[0.78] tracking-[-0.085em]"
        >
          <span className="block overflow-hidden sm:hidden">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Studio
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em] sm:hidden">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Schettino
            </motion.span>
          </span>
          <span className="hidden overflow-hidden pb-[0.08em] sm:block">
            <motion.span
              className="block whitespace-nowrap"
              initial={reduceMotion ? false : { y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Studio Schettino
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-7 flex items-end justify-between gap-6 border-t border-white/28 pt-5"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <p className="max-w-[16rem] text-[0.58rem] uppercase leading-5 tracking-[0.19em] text-white/58 sm:max-w-none">
            Progettazione · Infrastrutture · BIM
          </p>
          <a
            href="#studio"
            aria-label="Scorri alla sezione Studio"
            className="group flex shrink-0 items-center gap-3 text-[0.58rem] uppercase tracking-[0.2em] text-white/62 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan"
          >
            <span className="hidden sm:inline">Scopri</span>
            <ArrowDown className="transition-transform duration-500 group-hover:translate-y-1.5" size={16} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
