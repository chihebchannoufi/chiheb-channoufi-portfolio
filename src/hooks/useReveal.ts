import { useEffect, useRef } from "react";

/**
 * Adds the `.is-visible` class (see `.reveal` in index.css) the first time
 * the element scrolls into view. Respects prefers-reduced-motion implicitly
 * since the CSS animation duration collapses to ~0 in that case.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
