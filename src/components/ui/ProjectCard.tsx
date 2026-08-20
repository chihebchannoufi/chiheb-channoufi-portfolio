import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-hover flex h-full flex-col gap-5 p-6">
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-text">{project.name}</h3>
          {project.featured && (
            <span className="mono-tag border-accent-secondary/30 text-accent-secondary shrink-0">
              à la une
            </span>
          )}
        </div>
        <p className="text-sm text-accent">{project.tagline}</p>
      </header>

      <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>

      {project.pipeline && (
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-text-faint">
          {project.pipeline.map((stage, i) => (
            <span key={stage} className="flex items-center gap-1.5">
              <span className="rounded border border-border bg-surface-alt px-2 py-1 text-text-muted">
                {stage}
              </span>
              {i < project.pipeline!.length - 1 && <span aria-hidden>→</span>}
            </span>
          ))}
        </div>
      )}

      {project.metrics && project.metrics.length > 0 && (
        <dl className="grid grid-cols-2 gap-3 border-y border-border py-4 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-text-faint">
                {m.label}
              </dt>
              <dd className="text-sm font-semibold text-text">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="mono-tag">
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-1">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-text transition-colors hover:text-accent"
            >
              {link.label.toLowerCase().includes("github") ? (
                <FolderGit2 size={14} />
              ) : (
                <ArrowUpRight size={14} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
