import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  light?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ArrowLink({
  children,
  light = false,
  className = "",
  ...props
}: ArrowLinkProps) {
  return (
    <a
      className={`arrow-link ${light ? "text-white" : "text-navy"} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="arrow-link__icon" aria-hidden="true">
        <ArrowUpRight size={16} strokeWidth={1.7} />
      </span>
    </a>
  );
}
