"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { teamMembers } from "@/lib/content";

const layouts = [
  "lg:col-span-4",
  "lg:col-span-3 lg:mt-24",
  "lg:col-span-3 lg:mt-10",
  "lg:col-span-2 lg:mt-36",
  "lg:col-span-3",
  "lg:col-span-3 lg:mt-20",
  "lg:col-span-4 lg:mt-6",
  "lg:col-span-2 lg:mt-32",
  "lg:col-span-4 lg:mt-12",
  "lg:col-span-2 lg:mt-36",
  "lg:col-span-3",
  "lg:col-span-3 lg:mt-20",
  "lg:col-span-4 lg:col-start-5 lg:mt-4",
];

const ratios = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-square",
  "aspect-square",
];

export function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="relative overflow-hidden bg-paper py-28 sm:py-36 lg:py-48">
      <div className="pointer-events-none absolute inset-y-0 left-1/4 hidden w-px bg-navy/[0.06] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-navy/[0.06] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-3/4 hidden w-px bg-navy/[0.06] lg:block" />

      <Container className="relative">
        <div className="grid gap-10 border-b border-navy/12 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
          <div className="lg:col-span-3">
            <SectionLabel number="03">People</SectionLabel>
            <p className="mt-8 font-mono text-[0.58rem] uppercase leading-6 tracking-[0.18em] text-ink/40">
              Persone / Competenze<br />Studio / Rende
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <motion.h2
              className="font-display text-[clamp(4.5rem,11vw,12rem)] font-medium uppercase leading-[0.76] tracking-[-0.085em] text-navy"
              initial={reduceMotion ? false : { opacity: 0, y: 42 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Il team
            </motion.h2>
          </div>
        </div>

        <div className="mt-16 grid gap-x-5 gap-y-16 sm:grid-cols-2 sm:gap-y-20 lg:mt-24 lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:gap-y-28">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              className={`group ${layouts[index]}`}
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`relative overflow-hidden bg-[#dbe0e2] ${ratios[index]}`}>
                <motion.div
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { scale: 1.06 }}
                  whileInView={reduceMotion ? undefined : { scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1, delay: (index % 4) * 0.04, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} dello Studio Schettino`}
                    fill
                    loading="eager"
                    className="object-cover object-top transition-transform duration-[1100ms] ease-out group-hover:scale-[1.035]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw"
                  />
                </motion.div>
                <motion.div
                  className="pointer-events-none absolute inset-0 origin-bottom bg-paper"
                  initial={reduceMotion ? false : { scaleY: 1 }}
                  whileInView={reduceMotion ? undefined : { scaleY: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.9, delay: (index % 4) * 0.04, ease: [0.76, 0, 0.24, 1] }}
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors duration-700 group-hover:bg-navy/10" />
                <span className="absolute right-3 top-3 size-3 text-white/80 before:absolute before:left-1/2 before:top-0 before:h-full before:w-px before:bg-current after:absolute after:left-0 after:top-1/2 after:h-px after:w-full after:bg-current" aria-hidden="true" />
                <span className="absolute bottom-3 left-3 font-mono text-[0.52rem] tracking-[0.16em] text-white/75">
                  P.{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 border-t border-navy/15 pt-4">
                <h3 className="font-display text-[clamp(1.35rem,2.2vw,2.25rem)] font-medium leading-none tracking-[-0.045em] text-navy transition-transform duration-500 group-hover:translate-x-1.5">
                  {member.name}
                </h3>
                <p className="mt-2 font-mono text-[0.56rem] uppercase tracking-[0.17em] text-blue">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
