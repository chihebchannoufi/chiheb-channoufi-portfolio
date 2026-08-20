import type { ReactNode } from "react";
import { Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const channels: { icon: ReactNode; label: string; value: string; href: string }[] = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <Phone size={16} />,
    label: "Téléphone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/chihebchannoufi",
    href: profile.linkedin,
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />,
    label: "GitHub",
    value: "github.com/chihebchannoufi",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Contact"
            title="Discutons de votre prochain projet"
            description="Ouvert aux opportunités professionnelles en remote et aux opportunités nécessitant une relocation."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="panel grid gap-8 p-8 sm:grid-cols-2">
            <div className="flex flex-col gap-5">
              {channels.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-alt text-accent transition-colors group-hover:border-accent">
                    {icon}
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-text-faint">
                      {label}
                    </span>
                    <span className="text-sm text-text transition-colors group-hover:text-accent">
                      {value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-alt text-accent">
                  <MapPin size={16} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-text-faint">
                    Localisation
                  </span>
                  <span className="text-sm text-text">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-border pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="text-sm leading-relaxed text-text-muted">{profile.status}.</p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                M'envoyer un email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
