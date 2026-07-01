import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const platformItems = [
  {
    title: "App móvil para equipo comercial",
    role: "Captura en campo",
    focus: "La visita se registra mientras ocurre.",
    text: "Registra visitas, evidencia fotográfica, ubicación y condiciones observadas en el punto de venta.",
    proof: "Permite revisar cada hallazgo con contexto de tienda, hora y responsable.",
    details: ["Formularios por ruta", "Evidencia fotográfica", "Validación por GPS"],
  },
  {
    title: "Dashboard web para clientes",
    role: "Lectura para decisión",
    focus: "La información debe poder leerse sin reconstruirla.",
    text: "Ordena la información por cliente, cadena, tienda y hallazgo para revisar ejecución sin depender de hojas sueltas.",
    proof: "Sirve para priorizar acciones y sostener conversaciones comerciales con evidencia.",
    details: ["Filtros comerciales", "Alertas de seguimiento", "Exportes ejecutivos"],
  },
];

const trustChain = [
  {
    step: "Captura offline",
    text: "La visita no se pierde cuando la tienda tiene señal irregular.",
  },
  {
    step: "GPS de visita",
    text: "El registro queda asociado al punto de venta asignado.",
  },
  {
    step: "Evidencia fotográfica",
    text: "El hallazgo se respalda con material visible y verificable.",
  },
  {
    step: "Reporte exportable",
    text: "La información queda lista para análisis, seguimiento o conversación formal.",
  },
];

const security = [
  {
    title: "Datos en la nube",
    text: "Hospedaje con respaldos y cifrado para proteger información comercial sensible.",
  },
  {
    title: "Acceso jerárquico por roles",
    text: "Defina con precisión quién puede ver qué, desde visibilidad granular por tienda hasta resúmenes nacionales.",
  },
];

export default function SoftwarePage() {
  return (
    <div className="bg-background text-ink">
      <section className="hero-command relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(122,178,71,0.24),transparent_34rem),linear-gradient(135deg,var(--night)_0%,var(--accent-strong)_58%,var(--night-panel)_100%)]" />
        <div className="hero-command-grid relative mx-auto grid max-w-7xl items-end gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[700px] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,0.9fr)] lg:px-8 lg:py-12">
          <div className="pb-4 lg:pb-12">
            <p className="reveal-motion reveal-rise is-visible mb-5 inline-flex border border-white/22 bg-night/55 px-4 py-2 text-sm font-semibold text-white/86 [--reveal-delay:120ms]">Solución tecnológica</p>
            <h1 className="reveal-motion reveal-rise is-visible text-white [--reveal-delay:220ms]">Tecnología para controlar la ejecución retail</h1>
            <p className="lead reveal-motion reveal-rise is-visible mt-6 max-w-2xl text-white/82 [--reveal-delay:340ms]">
              Herramientas de captura, evidencia y reportes para gestionar cada punto de venta con datos en tiempo real y trazabilidad operativa.
            </p>
            <Link href="/#contacto" className="reveal-motion reveal-rise is-visible mt-8 inline-block bg-evidence px-8 py-4 text-lg font-semibold text-night transition hover:brightness-110 [--reveal-delay:460ms]">
              Solicitar demo del sistema
            </Link>
          </div>
          <div className="software-frame reveal-motion reveal-image is-visible self-end lg:mb-12 [--reveal-delay:580ms]">
            <Image
              src="/images/dashboard.webp"
              alt="Dashboard del sistema de control retail"
              width={1120}
              height={630}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="home-section bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(20rem,0.42fr)] lg:items-stretch">
            <Reveal className="reveal-rise max-w-3xl">
              <h2 className="max-w-3xl text-ink">Una plataforma para cerrar la distancia entre tienda y decisión</h2>
              <p className="lead mt-5 max-w-2xl text-ink-muted">
                El sistema no compite por atención con más pantallas. Ordena lo que ocurre en campo para que el cliente vea dónde actuar.
              </p>
            </Reveal>
            <Reveal className="reveal-panel bg-night px-6 py-6 text-white sm:px-7">
              <p className="text-sm font-semibold leading-6 text-evidence-soft">Problema que resuelve</p>
              <p className="mt-4 text-base font-semibold leading-7 text-white">
                Reportes tardíos, incompletos o dispersos vuelven reactiva la conversación comercial.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/76">
                Cuando los reportes llegan tarde, incompletos o dispersos, la conversación comercial se vuelve reactiva. La plataforma reduce esa fricción.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            {platformItems.map((item, index) => (
              <Reveal
                as="article"
                key={item.title}
                className={`reveal-panel grid gap-6 p-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:p-8 ${
                  index === 0 ? "bg-night text-white" : "bg-surface-muted text-ink"
                }`}
              >
                <div>
                  <p className={`text-xs font-bold tracking-[0.04em] ${index === 0 ? "text-evidence-soft" : "text-accent-strong"}`}>{item.role}</p>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${index === 0 ? "text-white" : "text-ink"}`}>{item.title}</h3>
                  <p className={`mt-4 text-lg font-bold leading-7 ${index === 0 ? "text-white" : "text-night"}`}>{item.focus}</p>
                  <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/76" : "text-ink-muted"}`}>{item.text}</p>
                  <p className={`mt-5 border-t pt-5 text-base font-bold leading-7 ${index === 0 ? "border-night-line text-white" : "border-border text-night"}`}>{item.proof}</p>
                  <ul className={`mt-4 grid gap-2 ${index === 0 ? "text-white/76" : "text-ink-muted"}`}>
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-6">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-evidence" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(18rem,0.42fr)] lg:items-end">
            <Reveal className="reveal-rise max-w-3xl">
              <h2 className="text-ink">Cadena de confianza del dato</h2>
              <p className="lead mt-5 max-w-2xl text-ink-muted">
                Cada registro pasa por controles que reducen dudas operativas: captura, ubicación, evidencia y salida formal para revisión.
              </p>
            </Reveal>
            <Reveal className="reveal-panel bg-night px-6 py-6 text-white sm:px-7">
              <p className="text-sm font-semibold leading-6 text-evidence-soft">Resultado</p>
              <p className="mt-4 text-2xl font-bold leading-tight text-white">Información lista para decidir, no solo datos capturados.</p>
            </Reveal>
          </div>

          <Reveal className="reveal-rise mt-12 overflow-hidden bg-night px-5 py-7 text-white sm:px-7 lg:px-8">
            <div className="relative grid gap-8 md:grid-cols-4">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[1.05rem] hidden h-1 bg-night-line md:block" />
              <div aria-hidden="true" className="absolute left-0 top-[1.05rem] hidden h-1 w-full max-w-[78%] bg-evidence md:block" />
              {trustChain.map((item) => (
                <article key={item.step} className="relative">
                  <span aria-hidden="true" className="relative z-10 block h-6 w-6 bg-evidence ring-8 ring-night" />
                  <p className="mt-5 text-xs font-bold tracking-[0.04em] text-evidence-soft">Control de dato</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{item.step}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/76">{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
          </div>
      </section>

      <section className="home-section bg-night text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:px-8">
          <Reveal className="reveal-rise">
            <h2 className="text-white">Infraestructura segura y confiable</h2>
            <p className="lead mt-4 max-w-2xl text-white/78">
              La tecnología opera sobre permisos claros, respaldo de datos y control de acceso para información comercial sensible.
            </p>
            <div className="mt-8 border-y border-night-line">
              {security.map((item) => (
                <div key={item.title} className="border-b border-night-line py-5 last:border-b-0">
                  <p className="text-xs font-bold tracking-[0.04em] text-evidence-soft">Seguridad operativa</p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="reveal-image software-frame" delay={140}>
            <Image
              src="/images/retail-dashboard.jpg"
              alt="Panel de seguridad y reportes del sistema"
              width={1120}
              height={840}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="min-h-[24rem] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
