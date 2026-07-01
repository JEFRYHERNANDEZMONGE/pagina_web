"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/reveal";

type ServiceItem = {
  title: string;
  text: string;
};

export function ServicesScroll({ services }: { services: ServiceItem[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  const maxIndex = Math.max(0, services.length - 1);
  const visualProgress = isCompact && maxIndex > 0 ? mobileIndex / maxIndex : progress;

  const selectMobileService = (nextIndex: number) => {
    setMobileIndex(Math.min(maxIndex, Math.max(0, nextIndex)));
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactViewport = window.matchMedia("(max-width: 767px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      setIsCompact(compactViewport.matches);

      if (reduceMotion.matches) {
        setProgress(0);
        return;
      }

      if (compactViewport.matches) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));

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
    compactViewport.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", requestUpdate);
      compactViewport.removeEventListener("change", requestUpdate);
    };
  }, [services.length]);

  return (
    <section ref={sectionRef} id="servicios" className="services-scroll bg-[linear-gradient(180deg,var(--background)_0%,var(--surface)_100%)]">
      <div className="services-scroll-sticky">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-8">
          <Reveal className="services-scroll-copy reveal-rise">
            <h2 className="text-ink">Nuestras soluciones especializadas</h2>
            <p className="lead mt-4 text-ink-muted">
              Tres frentes de trabajo para gestionar su presencia en punto de venta: desarrollo comercial, registro de productos y colocación en anaquel.
            </p>
          </Reveal>

          <Reveal className="services-scroll-stage reveal-line" delay={140}>
            <div aria-label="Soluciones especializadas de HM Sucomer">
            <div className="services-scroll-rule" aria-hidden="true">
              <span style={{ transform: `scaleY(${Math.max(0.08, visualProgress)})` }} />
            </div>

            {services.map((service, index) => {
              const position = visualProgress * (services.length - 1);
              const offset = position - index;
              const distance = Math.abs(offset);

              return (
                <article
                  key={service.title}
                  className="services-scroll-panel"
                  style={
                    {
                      "--service-offset": offset,
                      "--service-opacity": Math.max(0, 1 - distance * 1.35),
                      "--service-scale": Math.max(0.94, 1 - distance * 0.04),
                    } as CSSProperties
                  }
                >
                  <p className="services-scroll-number">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-ink">{service.title}</h3>
                    <p className="mt-4 max-w-[42rem] text-base leading-8 text-ink-muted">{service.text}</p>
                  </div>
                </article>
              );
            })}
            </div>
          </Reveal>

          <div className="services-scroll-mobile-controls" aria-label="Elegir solución especializada">
            <button
              type="button"
              className="services-scroll-arrow"
              onClick={() => selectMobileService(mobileIndex - 1)}
              disabled={mobileIndex === 0}
              aria-label="Ver solución anterior"
            >
              ←
            </button>
            <div>
              {services.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  className={index === mobileIndex ? "is-active" : ""}
                  onClick={() => selectMobileService(index)}
                  aria-label={`Ver ${service.title}`}
                  aria-current={index === mobileIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="services-scroll-arrow services-scroll-arrow-next"
              onClick={() => selectMobileService(mobileIndex + 1)}
              disabled={mobileIndex === maxIndex}
              aria-label="Ver siguiente solución"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
