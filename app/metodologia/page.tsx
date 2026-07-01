import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Planificación semanal",
    focus: "La ruta empieza con prioridad definida.",
    text: "Planificación de rutas cada lunes, definiendo puntos críticos y objetivos de ejecución comercial para asegurar cobertura estratégica.",
    meta: "Todos los lunes",
    number: "01",
  },
  {
    title: "Ejecución y tareas",
    focus: "La visita debe producir evidencia útil.",
    text: "Al llegar al punto de venta, el equipo comercial ejecuta tareas específicas para garantizar datos precisos sin interrumpir la operación.",
    meta: "Durante la visita",
    number: "02",
  },
  {
    title: "Procesamiento inmediato",
    focus: "El dato se valida antes de circular.",
    text: "Carga de la información a nuestra plataforma centralizada para análisis, revisión y validación técnica.",
    meta: "Después de registrar",
    number: "03",
  },
  {
    title: "Entrega de reportes diarios",
    focus: "El cliente recibe una salida revisable.",
    text: "Cada mañana, usted recibe informes consolidados con los hallazgos del día anterior para tomar decisiones con información reciente.",
    meta: "Reportes matutinos",
    number: "04",
  },
];

const cycle = [
  {
    moment: "Al cierre de la visita",
    title: "Detección de anomalías",
    text: "Se separan quiebres, exhibiciones incompletas, diferencias de precio o registros que requieren revisión.",
  },
  {
    moment: "Durante la revisión",
    title: "Resolución de incidentes",
    text: "El hallazgo se clasifica para decidir si corresponde corregir en tienda, escalar con la cadena o ajustar el seguimiento.",
  },
  {
    moment: "Antes de la siguiente ruta",
    title: "Ajuste de ruta",
    text: "La prioridad de visita cambia según tiendas críticas, productos sensibles y evidencia recibida el día anterior.",
  },
  {
    moment: "Antes del reporte",
    title: "Validación de datos",
    text: "GPS, hora, fotografía y consistencia del registro se revisan para que el cliente reciba información defendible.",
  },
];
const truth = [
  "Geolocalización GPS obligatoria para cada registro de visita.",
  "Evidencia fotográfica en tiempo real in situ.",
  "Estampado de tiempo digital e inalterable.",
];

export default function MetodologiaPage() {
  return (
    <div className="bg-background text-ink">
      <section className="hero-command relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 opacity-[0.66]">
          <Image
            src="/images/hero_hm.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_45%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,29,34,0.96)_0%,rgba(10,29,34,0.84)_44%,rgba(10,29,34,0.34)_76%,rgba(10,29,34,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(122,178,71,0.22),transparent_34rem)]" />
        </div>
        <div className="hero-command-grid relative mx-auto grid max-w-7xl items-end gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[680px] lg:grid-cols-[minmax(0,0.82fr)_minmax(340px,0.5fr)] lg:px-8 lg:py-12">
          <div className="max-w-4xl pb-4 lg:pb-12">
            <p className="reveal-motion reveal-rise is-visible mb-5 inline-flex border border-white/22 bg-night/55 px-4 py-2 text-sm font-semibold text-white/86 [--reveal-delay:120ms]">Metodología operativa</p>
            <h1 className="reveal-motion reveal-rise is-visible text-white [--reveal-delay:220ms]">Precisión en cada visita de campo</h1>
            <p className="lead reveal-motion reveal-rise is-visible mt-6 max-w-2xl text-white/82 [--reveal-delay:340ms]">
              Una metodología de cuatro fases para convertir observación de campo en información verificable, reciente y útil para decidir.
            </p>
          </div>
          <div className="reveal-motion reveal-panel is-visible self-end border border-white/18 bg-night/68 p-5 lg:mb-12 [--reveal-delay:480ms]">
            <p className="text-sm font-semibold text-evidence-soft">Ciclo diario</p>
            <p className="mt-3 text-3xl font-bold text-white">Campo, sistema, reporte</p>
            <p className="mt-3 text-sm leading-6 text-white/74">La operación se diseña para sostener trazabilidad, no para depender de memoria o reportes tardíos.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal-rise max-w-3xl">
            <h2 className="text-ink">Cuatro fases con salida concreta</h2>
            <p className="lead mt-4 text-ink-muted">Cada paso produce información o una acción que puede revisarse, corregirse y sostenerse en el tiempo.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-12">
            {steps.map((step, index) => (
              <Reveal
                as="article"
                key={step.title}
                className={`${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"} reveal-rise flex min-h-[22rem] flex-col justify-between border border-night-line bg-night-panel p-8 text-white`}
              >
                <div>
                  <p className="text-xs font-bold tracking-[0.04em] text-evidence-soft">{step.meta}</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-5 text-lg font-bold leading-7 text-white">{step.focus}</p>
                  <p className="mt-3 text-sm leading-7 text-white/78">{step.text}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-night-line pt-4">
                  <span className="text-sm font-bold text-white">Salida verificable</span>
                  <span className="text-5xl font-black text-white/20">{step.number}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1fr)] lg:items-stretch">
            <Reveal className="reveal-panel flex flex-col justify-between bg-night px-6 py-7 text-white sm:px-8 lg:min-h-[34rem]">
              <div>
                <h2 className="max-w-xl text-white">Ciclo de mejora continua en 24 horas</h2>
                <p className="lead mt-5 max-w-xl text-white/78">
                  El valor no está en listar etapas. Está en cerrar el día con hallazgos revisados, prioridades claras y datos listos para defender una decisión comercial.
                </p>
              </div>
              <div className="mt-10 border-t border-night-line pt-5">
                <p className="text-sm font-semibold leading-6 text-evidence-soft">Salida esperada</p>
                <p className="mt-3 text-2xl font-bold leading-tight text-white">Un reporte que explica qué pasó, qué importa y qué sigue.</p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {cycle.map((item, index) => (
                <Reveal
                  as="article"
                  key={item.title}
                  className={`reveal-rise flex min-h-[16rem] flex-col justify-between px-5 py-6 sm:px-6 ${
                    index === 0 || index === 3 ? "bg-accent-strong text-white" : "bg-surface-muted text-ink"
                  }`}
                >
                  <div>
                    <p className={`text-xs font-bold tracking-[0.04em] ${index === 0 || index === 3 ? "text-evidence-soft" : "text-accent-strong"}`}>{item.moment}</p>
                    <h3 className={`mt-4 text-2xl font-bold ${index === 0 || index === 3 ? "text-white" : "text-ink"}`}>{item.title}</h3>
                  </div>
                  <div className="mt-8 border-t border-current/20 pt-4">
                    <p className={`text-sm font-bold leading-6 ${index === 0 || index === 3 ? "text-white" : "text-night"}`}>Decisión que habilita</p>
                    <p className={`mt-2 text-sm leading-7 ${index === 0 || index === 3 ? "text-white/78" : "text-ink-muted"}`}>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section bg-night text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:px-8">
          <Reveal className="reveal-image software-frame">
            <Image
              src="/images/retail-audit.jpg"
              alt="Registro tecnológico de visitas y evidencia de campo"
              width={1120}
              height={630}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-video w-full object-cover"
            />
          </Reveal>
          <Reveal className="reveal-rise" delay={140}>
            <h2 className="text-white">Veracidad tecnológica</h2>
            <p className="lead mt-6 text-white/78">
              La veracidad de los datos está respaldada por registros técnicos que reducen margen de error y sostienen trazabilidad.
            </p>
            <ul className="mt-8 border-y border-night-line text-sm leading-7 text-white/78">
              {truth.map((item) => (
                <li key={item} className="flex gap-3 border-b border-night-line py-3 last:border-b-0">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-evidence" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal-panel grid gap-8 border border-border bg-surface p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <h2 className="text-ink">¿Listo para elevar la precisión de su ejecución?</h2>
              <p className="lead mt-4 max-w-2xl text-ink-muted">
              Permítanos presentarle cómo nuestra metodología puede adaptarse específicamente a los retos de su categoría.
              </p>
            </div>
            <Link href="/#contacto" className="inline-block bg-evidence px-8 py-4 text-center text-lg font-semibold text-night transition hover:brightness-110">
              Hablemos de su metodología
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

