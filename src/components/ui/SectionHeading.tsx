interface SectionHeadingProps {
  index: string; // e.g. "02" — sequence is meaningful here (page order)
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-text-faint">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-text">{title}</h2>
      {description && (
        <p className="max-w-2xl text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
