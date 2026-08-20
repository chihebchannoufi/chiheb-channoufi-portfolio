import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/experience";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="À propos"
          title="Un profil Full-Stack orienté intelligence artificielle"
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delay={80}>
          <p className="text-lg leading-relaxed text-text-muted">{profile.objective}</p>
        </Reveal>

        <Reveal delay={160}>
          <div className="panel p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="eyebrow">Formation</h3>
            </div>
            <ol className="flex flex-col gap-5">
              {education.map((entry) => (
                <li key={entry.id} className="border-l border-border pl-4">
                  <p className="text-sm font-semibold text-text">{entry.degree}</p>
                  <p className="mt-0.5 text-sm text-text-muted">{entry.institution}</p>
                  <p className="mt-1 font-mono text-xs text-text-faint">{entry.period}</p>
                  {entry.status === "in-progress" && (
                    <span className="mono-tag mt-2 inline-block text-accent-secondary">en cours</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
