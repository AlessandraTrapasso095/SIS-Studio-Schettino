type SectionLabelProps = {
  number: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionLabel({
  number,
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`section-label ${light ? "text-white/55" : "text-ink/55"} ${className}`}
    >
      <span className={light ? "text-cyan" : "text-blue"}>{number}</span>
      <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
