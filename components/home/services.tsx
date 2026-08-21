"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { services } from "@/lib/content";

export function Services() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = services[active];

  return (
    <section id="servizi" className="bg-white py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col gap-8 border-b border-navy/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel number="02">Competenze</SectionLabel>
            <h2 className="heading-xxl mt-8 text-navy">Servizi</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/58">
            Otto aree operative, presentate attraverso le fotografie originali delle
            attività dello studio.
          </p>
        </div>

        <div className="mt-10 hidden min-h-[670px] grid-cols-[minmax(420px,0.9fr)_1.35fr] border-b border-navy/12 lg:grid">
          <div className="flex flex-col border-r border-navy/12 pr-9 xl:pr-14">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group flex flex-1 items-center gap-5 border-b border-navy/10 py-3 text-left outline-none transition-colors last:border-b-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue ${
                  active === index ? "text-blue" : "text-navy/38 hover:text-navy"
                }`}
              >
                <span className="w-8 font-mono text-[0.62rem] tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.45rem,2.2vw,2.65rem)] font-medium leading-none tracking-[-0.045em]">
                  {service.title}
                </span>
                <ArrowUpRight
                  size={18}
                  className={`ml-auto transition-transform duration-300 ${
                    active === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="relative ml-9 overflow-hidden bg-navy xl:ml-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={current.image}
                  alt={`Attività di ${current.title} dello Studio Schettino`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: current.imagePosition ?? "center" }}
                  sizes="58vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8 xl:p-10">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cyan">
                  Area / {String(active + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] text-white xl:text-5xl">
                  {current.title}
                </p>
              </div>
              <span className="grid size-12 place-items-center border border-white/30 text-white">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:hidden">
          {services.map((service, index) => (
            <article key={service.title} className="group border-b border-navy/15 pb-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <Image
                  src={service.image}
                  alt={`Attività di ${service.title} dello Studio Schettino`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 grid size-9 place-items-center bg-navy font-mono text-[0.6rem] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-5 pt-5">
                <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-navy">
                  {service.title}
                </h3>
                <ArrowUpRight className="shrink-0 text-blue" size={18} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
