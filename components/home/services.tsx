"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { services } from "@/lib/content";

export function Services() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  return (
    <section id="servizi" className="section-shell bg-white">
      <Container>
        <div className="max-w-[900px]">
          <div>
            <SectionLabel number="02">Competenze</SectionLabel>
            <h2 className="heading-xl mt-8 text-navy">Servizi</h2>
          </div>
        </div>

        <div className="mt-10 hidden border-t border-navy/12 pt-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center">
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
                  className={`group flex w-full items-center gap-4 border-b border-navy/10 py-3.5 text-left outline-none transition-colors duration-400 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue ${
                    isActive ? "text-navy" : "text-navy/46 hover:text-navy/75"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 transition-colors duration-400 ${isActive ? "bg-blue" : "bg-navy/16"}`}
                    aria-hidden="true"
                  />
                  <span className="flex-1 font-display text-[clamp(1.15rem,1.6vw,1.45rem)] font-medium tracking-[-0.025em]">
                    {service.title}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className={`text-blue transition-all duration-400 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-paper xl:min-h-[570px]">
            {services.map((service, index) => (
              <motion.div
                key={service.image}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: active === index ? 1 : 0, scale: active === index ? 1 : 1.015 }}
                transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={active !== index}
              >
                <Image
                  src={service.image}
                  alt={`Attività di ${service.title} dello Studio Schettino`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                  sizes="58vw"
                  preload={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:hidden">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.04 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image
                  src={service.image}
                  alt={`Attività di ${service.title} dello Studio Schettino`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center gap-3 border-b border-navy/12 py-4">
                <span className="font-mono text-[0.54rem] text-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium tracking-[-0.025em] text-navy">
                  {service.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
