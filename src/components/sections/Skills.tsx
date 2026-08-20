import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="competences" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Compétences"
            title="Modules techniques"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 60}>
              <div className="panel panel-hover h-full p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold text-text">{group.label}</h3>
                  <span className="font-mono text-[10px] text-text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mb-4 text-sm text-text-muted">{group.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="mono-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
