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
    <section id="servizi" className="relative overflow-hidden bg-navy py-28 text-white sm:py-36 lg:py-48">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.035]" />
      <Container className="relative">
        <div className="grid gap-10 border-b border-white/16 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
          <div className="lg:col-span-4">
            <SectionLabel number="02" light>Competenze</SectionLabel>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(5rem,12vw,13rem)] font-medium uppercase leading-[0.72] tracking-[-0.09em]">
              Servizi
            </h2>
          </div>
        </div>

        <div className="mt-12 hidden lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-7">
            {services.map((service, index) => {
              const isActive = active === index;
              return (
                <button
                  key={service.title}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group grid w-full grid-cols-[46px_1fr_30px] items-center gap-4 border-b border-white/14 py-5 text-left outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan xl:grid-cols-[56px_1fr_36px] ${
                    isActive ? "text-white" : "text-white/32 hover:text-white/78"
                  }`}
                >
                  <span className={`font-mono text-[0.58rem] tracking-[0.18em] transition-colors ${isActive ? "text-cyan" : "text-white/28"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-[clamp(2rem,3.35vw,4.25rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em]">
                      {service.title}
                    </span>
                    <span className={`mt-2 block overflow-hidden font-mono text-[0.52rem] uppercase tracking-[0.17em] text-white/42 transition-all duration-500 ${isActive ? "max-h-6 opacity-100" : "max-h-0 opacity-0"}`}>
                      Area operativa / Studio Schettino
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className={`transition-all duration-500 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative lg:col-span-5">
            <div className="sticky top-28 h-[calc(100svh-9rem)] min-h-[610px] max-h-[780px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.045 }}
                  animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Image
                    src={current.image}
                    alt={`Attività di ${current.title} dello Studio Schettino`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: current.imagePosition ?? "center" }}
                    sizes="42vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/72 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 border-t border-white/30 pt-5 xl:inset-x-8 xl:bottom-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="font-mono text-[0.54rem] uppercase tracking-[0.18em] text-cyan">
                      Area / {String(active + 1).padStart(2, "0")} — 08
                    </p>
                    <p className="mt-3 font-display text-3xl font-medium uppercase leading-none tracking-[-0.045em] text-white xl:text-4xl">
                      {current.title}
                    </p>
                  </div>
                  <span className="size-3 border border-cyan" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
          {services.map((service, index) => (
            <article key={service.title} className="group relative aspect-[4/5] overflow-hidden bg-[#071d38]">
              <Image
                src={service.image}
                alt={`Attività di ${service.title} dello Studio Schettino`}
                fill
                className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.035]"
                style={{ objectPosition: service.imagePosition ?? "center" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/5 to-transparent" />
              <span className="absolute left-5 top-5 font-mono text-[0.58rem] tracking-[0.18em] text-white/75">
                {String(index + 1).padStart(2, "0")} / 08
              </span>
              <div className="absolute inset-x-5 bottom-5 border-t border-white/30 pt-4">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-[clamp(1.75rem,7vw,2.8rem)] font-medium uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="shrink-0 text-cyan" size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
