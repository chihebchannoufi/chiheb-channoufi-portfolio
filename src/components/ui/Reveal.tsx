import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

/** Fades + slides content up once it enters the viewport. */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const style = delay ? { animationDelay: `${delay}ms` } : undefined;
  const Tag = as;

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
