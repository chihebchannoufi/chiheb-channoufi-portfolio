import { BadgeCheck } from "lucide-react";
import type { Certification } from "@/types";

export function CertCard({ cert }: { cert: Certification }) {
  return (
    <div className="panel panel-hover flex items-start gap-4 p-5">
      <div className="mt-0.5 shrink-0 text-accent">
        <BadgeCheck size={20} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold leading-snug text-text">{cert.name}</h3>
        <p className="font-mono text-xs text-text-muted">
          {cert.issuer} <span className="text-text-faint">·</span> {cert.date}
        </p>
      </div>
    </div>
  );
}
