"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

export function SpotlightSection({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const section = sectionRef.current;
    if (!section) return;

    const bounds = section.getBoundingClientRect();
    section.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    section.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="problem-stage relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      {children}
    </section>
  );
}
