import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
// Dev note: content is sourced from src/data/projects.json — add/edit/remove a
// project by editing that file only, no component changes required.
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";

const projects = projectsData as Project[];

export function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="03"
          eyebrow="Projets"
          title="Pipelines construits de bout en bout"
          description="Une sélection de projets full-stack et IA construits de bout en bout, de l'interface jusqu'au modèle."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
