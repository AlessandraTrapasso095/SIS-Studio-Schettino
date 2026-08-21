import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { newsItems } from "@/lib/content";

export function NewsSection() {
  const [featured, ...otherNews] = newsItems;

  return (
    <section id="news" className="section-shell bg-white">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader number="07" eyebrow="News" title="News" />

          <ArrowLink
            href="http://www.studioschettino.it/notizie/"
            target="_blank"
            rel="noreferrer"
          >
            Tutte le news
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.55fr_0.75fr] lg:gap-12 xl:gap-16">
          <Reveal>
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-navy">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority={false}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 68vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/75">
                    {featured.date}
                  </p>

                  <h3 className="mt-4 max-w-3xl font-display text-[2rem] font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-[2.7rem] xl:text-[3.2rem]">
                    {featured.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-3 text-sm font-medium text-white">
                    <span>Leggi la notizia</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-3xl line-clamp-2 text-[0.95rem] leading-7 text-ink/62">
                {featured.excerpt}
              </p>
            </a>
          </Reveal>

          <div className="flex flex-col gap-10">
            {otherNews.slice(0, 2).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block outline-none focus-visible:ring-2 focus-visible:ring-blue"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      sizes="(max-width: 1024px) 100vw, 32vw"
                    />
                  </div>

                  <div className="pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-blue">
                        {item.date}
                      </p>

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <h3 className="mt-3 max-w-md font-display text-[1.55rem] font-medium leading-[1.08] tracking-[-0.035em] text-navy xl:text-[1.8rem]">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
