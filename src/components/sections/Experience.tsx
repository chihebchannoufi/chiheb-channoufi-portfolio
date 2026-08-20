import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experiences" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Expériences"
            title="Historique d'exécution"
          />
        </Reveal>

        <ol className="flex flex-col gap-8">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 80} as="li">
              <div className="panel grid gap-5 p-6 sm:grid-cols-[220px_1fr]">
                <div>
                  <p className="font-mono text-xs text-text-faint">
                    {entry.start} — {entry.end}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-accent">
                    {entry.mode}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{entry.location}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text">{entry.role}</h3>
                  <p className="mb-3 text-sm text-text-muted">{entry.organization}</p>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">{entry.summary}</p>

                  <ul className="mb-4 flex flex-col gap-1.5">
                    {entry.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.stack.map((tech) => (
                      <span key={tech} className="mono-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
