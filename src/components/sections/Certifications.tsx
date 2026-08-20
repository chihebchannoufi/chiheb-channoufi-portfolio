import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertCard } from "@/components/ui/CertCard";
import { Reveal } from "@/components/ui/Reveal";
// Dev note: content is sourced from src/data/certifications.json — add/edit/remove
// a certification by editing that file only, no component changes required.
import certificationsData from "@/data/certifications.json";
import type { Certification } from "@/types";

const certifications = certificationsData as Certification[];

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="05"
          eyebrow="Certifications"
          title="Validations externes"
          description="Formations complétées et validées, en complément des projets et expériences professionnelles."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 60}>
            <CertCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
