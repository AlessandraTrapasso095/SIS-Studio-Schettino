import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

type SectionHeaderProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <Reveal className={`max-w-[920px] ${className}`}>
      <SectionLabel number={number} light={light}>
        {eyebrow}
      </SectionLabel>
      <h2
        className={`heading-xl mt-7 text-balance sm:mt-8 ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`body-lg mt-5 max-w-2xl ${light ? "text-white/62" : "text-ink/62"}`}
        >
          {description}
        </div>
      ) : null}
    </Reveal>
  );
}
