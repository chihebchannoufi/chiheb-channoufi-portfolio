import { ArrowRight, Download, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "@/data/profile";
import { NetworkGraph } from "@/components/ui/NetworkGraph";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text block: on mobile this comes after the photo panel (order-2),
            on desktop it's the left column (lg:order-1). */}
        <div className="order-2 lg:order-1">
          <div className="surface-dark mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
            <span className="status-dot status-dot-live" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              {profile.status}
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] text-text sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm text-accent sm:text-base">
            {profile.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Télécharger le CV
            </a>
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Voir les projets
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Photo + signature architecture diagram: shown first on mobile
            (order-1), right column on desktop (lg:order-2). */}
        <div className="panel order-1 flex flex-col gap-5 p-5 lg:order-2">
          <div className="mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-border bg-surface-alt lg:h-40 lg:w-40">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-text-muted">
            <MapPin size={14} />
            <span className="text-sm">{profile.location}</span>
          </div>

          <div className="border-t border-border pt-4">
            <p className="mb-2 text-center text-xs text-text-muted">Stack technique</p>
            <NetworkGraph />
          </div>
        </div>
      </div>
    </section>
  );
}
