"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";

type ProcessStep = {
  phase: string;
  moment: string;
  title: string;
  text: string;
  output: string;
};

export function ProcessScroll({ steps }: { steps: ProcessStep[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const scrollMobileTrack = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const card = track.querySelector<HTMLElement>(".process-scroll-card");
    const distance = card ? card.offsetWidth + 16 : viewport.clientWidth * 0.86;

    viewport.scrollTo({ left: viewport.scrollLeft + direction * distance, behavior: "smooth" });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowViewport = window.matchMedia("(max-width: 767px)");

    let frame = 0;

    const update = () => {
      frame = 0;

      if (reduceMotion.matches || narrowViewport.matches) {
        track.style.transform = "translate3d(0, 0, 0)";
        setProgress(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const maxShift = Math.max(0, track.scrollWidth - window.innerWidth);

      track.style.transform = `translate3d(${-nextProgress * maxShift}px, 0, 0)`;
      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", requestUpdate);
    narrowViewport.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", requestUpdate);
      narrowViewport.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} id="metodo" className="process-scroll bg-night text-white">
      <div className="process-scroll-sticky">
        <Reveal className="process-scroll-copy reveal-rise mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-evidence-soft">Ruta operativa</p>
          <h2>Precisión en cada visita</h2>
          <p className="lead text-white/78">
            Cada recorrido convierte planificación, ejecución en tienda y evidencia de campo en reportes accionables para su equipo comercial.
          </p>
        </Reveal>

        <Reveal className="reveal-track" delay={140}>
          <div ref={viewportRef} className="process-scroll-viewport" aria-label="Proceso de trabajo de HM Sucomer">
          <div ref={trackRef} className="process-scroll-track">
            {steps.map((item, index) => (
              <article key={item.title} className="process-scroll-card">
                <div className="flex items-start justify-between gap-6">
                  <p className="process-scroll-phase">{item.phase}</p>
                  <p className="process-scroll-index">{String(index + 1).padStart(2, "0")}</p>
                </div>
                <p className="mt-10 text-sm font-semibold text-evidence-soft">{item.moment}</p>
                <h3 className="mt-3 text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/76">{item.text}</p>
                <div className="process-scroll-output">
                  <span>Salida</span>
                  <strong>{item.output}</strong>
                </div>
              </article>
            ))}
          </div>
          </div>
        </Reveal>

        <div className="process-scroll-mobile-controls mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Controles del proceso">
          <button type="button" className="process-scroll-arrow" onClick={() => scrollMobileTrack(-1)} aria-label="Ver paso anterior">
            ←
          </button>
          <span>Deslice o use las flechas</span>
          <button type="button" className="process-scroll-arrow process-scroll-arrow-right" onClick={() => scrollMobileTrack(1)} aria-label="Ver paso siguiente">
            →
          </button>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="process-scroll-progress" aria-hidden="true">
            <div style={{ transform: `scaleX(${Math.max(0.08, progress)})` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
