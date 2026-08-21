import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { newsItems } from "@/lib/content";

export function NewsSection() {
  const [featured, ...otherNews] = newsItems;

  return (
    <section id="news" className="section-shell bg-white">
      <Container>
        <div className="flex flex-col gap-8 border-b border-navy/12 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel number="07">News</SectionLabel>
            <h2 className="heading-xl mt-8 text-navy">News</h2>
          </div>
          <ArrowLink
            href="http://www.studioschettino.it/notizie/"
            target="_blank"
            rel="noreferrer"
          >
            Tutte le news
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 63vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 font-mono text-[0.62rem] text-white sm:bottom-7 sm:left-7">
                  {featured.date}
                </span>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-navy/15 py-6 sm:py-8">
                <div>
                  <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.045em] text-navy sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/58">
                    {featured.excerpt}
                  </p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center text-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </a>
          </Reveal>

          <div className="border-t border-navy/15 lg:border-t-0">
            {otherNews.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-5 border-b border-navy/15 py-7 outline-none focus-visible:ring-2 focus-visible:ring-blue sm:grid-cols-[170px_1fr] lg:grid-cols-1 xl:grid-cols-[170px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      sizes="(max-width: 1024px) 170px, (max-width: 1280px) 35vw, 170px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-between">
                    <p className="font-mono text-[0.58rem] text-blue">{item.date}</p>
                    <h3 className="mt-5 font-display text-xl font-medium leading-tight tracking-[-0.035em] text-navy sm:text-2xl">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      size={17}
                      className="mt-5 text-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
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
