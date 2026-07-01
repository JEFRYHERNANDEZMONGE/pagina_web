import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const serviceLines = [
  {
    marker: "Presencia",
    title: "Desarrollo comercial en punto de venta",
    focus: "Lo negociado debe verse en góndola.",
    text: "Revisión de acuerdos comerciales, exhibiciones, disponibilidad, precios visibles y oportunidades de mejora por tienda.",
    proof: "Sirve cuando la marca necesita saber si la ejecución real coincide con lo acordado con cadenas y supermercados.",
    evidenceSummary: "Se revisa exhibición, disponibilidad visible e incidencias por local para confirmar la ejecución real.",
  },
  {
    marker: "Registro",
    title: "Registro de productos",
    focus: "La entrada al canal depende del orden documental.",
    text: "Gestión de formularios, muestras, requisitos comerciales y seguimiento con los actores necesarios para habilitar productos.",
    proof: "Pensado para empresas que necesitan ingresar o actualizar portafolio sin perder trazabilidad del proceso.",
    evidenceSummary: "Se ordenan requisitos, documentos pendientes y aprobaciones para que el ingreso avance con trazabilidad.",
  },
  {
    marker: "Ejecución",
    title: "Colocación y mantenimiento de productos",
    focus: "La presencia requiere visitas, corrección y continuidad.",
    text: "Apoyo operativo para colocación, rotación, inventario visible, mantenimiento de exhibiciones y corrección de quiebres detectados.",
    proof: "Funciona cuando el punto de venta necesita presencia física constante, no solo un reporte posterior.",
    evidenceSummary: "Se da seguimiento a rotación, exhibiciones activas y acciones correctivas en el punto de venta.",
  },
];

const operatingSignals = [
  {
    label: "Antes de visitar",
    text: "Se define canal, puntos de venta, producto y condición que se debe observar.",
  },
  {
    label: "Durante la ejecución",
    text: "La visita registra hallazgos concretos: presencia, exhibición, inventario visible e incidencias.",
  },
  {
    label: "Después del reporte",
    text: "La información permite ajustar alcance, priorizar tiendas y decidir acciones comerciales.",
  },
];

const scenarios = [
  "Entrada de producto nuevo a supermercados",
  "Revisión de acuerdos negociados con cadena",
  "Corrección de presencia irregular por tienda",
  "Seguimiento de exhibiciones y campañas puntuales",
];

export default function ServiciosPage() {
  return (
    <div className="bg-background text-ink">
      <section className="hero-command relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_32%,rgba(122,178,71,0.22),transparent_32rem),linear-gradient(135deg,var(--night)_0%,var(--accent-strong)_58%,var(--night-panel)_100%)]" />
        <div className="hero-command-grid relative mx-auto grid max-w-7xl items-end gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[680px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.76fr)] lg:px-8 lg:py-12">
          <div className="pb-4 lg:pb-12">
            <p className="reveal-motion reveal-rise is-visible mb-5 inline-flex border border-white/22 bg-night/55 px-4 py-2 text-sm font-semibold text-white/86 [--reveal-delay:120ms]">Servicios comerciales</p>
            <h1 className="reveal-motion reveal-rise is-visible text-white [--reveal-delay:220ms]">
              Tres frentes para ordenar la ejecución en punto de venta
            </h1>
            <p className="lead reveal-motion reveal-rise is-visible mt-6 max-w-2xl text-white/82 [--reveal-delay:340ms]">
              HM Sucomer trabaja sobre tareas concretas: revisar presencia, gestionar registros y acompañar la colocación física de productos.
            </p>
            <div className="reveal-motion reveal-rise is-visible mt-8 flex flex-col gap-3 sm:flex-row [--reveal-delay:460ms]">
              <Link
                href="/#contacto"
                className="bg-evidence px-6 py-3.5 text-center text-base font-semibold text-night transition hover:brightness-110 sm:px-8 sm:py-4"
              >
                Hablar sobre su operación
              </Link>
              <a
                href="#frentes"
                className="border border-white/38 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white hover:text-night sm:px-8 sm:py-4"
              >
                Revisar frentes de trabajo
              </a>
            </div>
          </div>

          <div className="software-frame reveal-motion reveal-image is-visible self-end lg:mb-12 [--reveal-delay:580ms]">
            <Image
              src="/images/field-team.jpg"
              alt="Equipo de campo revisando ejecución comercial en punto de venta"
              width={960}
              height={720}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="frentes" className="home-section bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(20rem,0.42fr)] lg:items-stretch">
            <Reveal className="reveal-rise max-w-3xl">
              <h2 className="max-w-2xl text-ink">Servicios definidos por operación, no por paquete</h2>
              <p className="lead mt-5 max-w-2xl text-ink-muted">
                Cada frente responde a una pregunta concreta de gestión: qué debe estar listo, qué se encontró en tienda y qué decisión comercial sigue.
              </p>
            </Reveal>
            <Reveal className="reveal-panel bg-night px-6 py-6 text-white sm:px-7">
              <p className="text-sm font-semibold leading-6 text-evidence-soft">Criterio de trabajo</p>
              <p className="mt-4 text-base font-semibold leading-7 text-white">
                Alcance por canal, producto, frecuencia y evidencia requerida.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/78">
                El alcance se define por canal, producto, frecuencia y nivel de evidencia necesario. No por una lista cerrada de tareas.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceLines.map((service) => (
              <Reveal
                as="article"
                key={service.title}
                className="reveal-rise flex h-full min-h-[29rem] flex-col justify-between border border-border bg-surface-muted px-5 py-7 sm:px-6"
              >
                <div>
                  <p className="text-xs font-bold tracking-[0.04em] text-accent-strong">{service.marker}</p>
                  <h3 className="mt-4 text-3xl font-bold leading-tight text-ink">{service.title}</h3>
                  <p className="mt-5 text-xl font-bold leading-8 text-night">{service.focus}</p>
                  <p className="mt-4 text-sm leading-6 text-ink-muted">{service.text}</p>
                </div>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-base font-bold leading-7 text-night">{service.proof}</p>
                  <p className="mt-4 text-sm leading-6 text-ink-subtle">{service.evidenceSummary}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="reveal-rise mt-8 bg-evidence px-5 py-6 text-night sm:px-7">
            <div className="grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-start">
              <div>
                <p className="text-sm font-bold leading-6 text-night">Casos donde aporta más claridad</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-night/72">Cuatro usos habituales del servicio.</p>
              </div>
              <ul className="grid gap-x-5 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                {scenarios.map((scenario) => (
                  <li key={scenario} className="flex gap-2 text-sm font-semibold leading-6 text-night/88">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-night" />
                    <span>{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section bg-night text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal-panel px-0 py-0">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <h2 className="max-w-xl text-white">La diferencia está en el seguimiento</h2>
                <p className="lead mt-5 max-w-2xl text-white/76">
                  Un servicio comercial serio no se mide por una promesa grande, sino por la capacidad de registrar lo que pasa y responder con criterio operativo.
                </p>
              </div>
              <div className="border border-night-line bg-night-panel px-5 py-5 text-white">
                <p className="text-xs font-bold tracking-[0.04em] text-evidence-soft">Lo que evita</p>
                <p className="mt-3 text-2xl font-bold leading-tight">Reportes sueltos, visitas sin contexto y decisiones tomadas tarde.</p>
                <p className="mt-4 text-sm leading-7 text-white/74">El seguimiento conecta cada visita con una decisión comercial posible.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 lg:flex-row">
              {operatingSignals.map((signal) => (
                <Reveal key={signal.label} className="reveal-rise border border-night-line bg-night-panel px-5 py-5 lg:flex-1">
                  <p className="text-xs font-bold tracking-[0.04em] text-evidence-soft">{signal.label}</p>
                  <p className="mt-4 text-base font-bold leading-7 text-white">Punto de control operativo</p>
                  <p className="mt-3 text-sm leading-7 text-white/76">{signal.text}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="reveal-panel grid gap-8 bg-night px-6 py-8 text-white sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10">
            <div>
              <h2>Definamos qué necesita controlar su marca</h2>
              <p className="lead mt-4 max-w-2xl text-white/78">
                Cuéntenos qué canal, producto o ejecución necesita revisar. Con eso podemos proponer un alcance realista.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="bg-evidence px-6 py-3.5 text-center text-base font-semibold text-night transition hover:brightness-110 sm:px-8 sm:py-4"
            >
              Hablar con HM Sucomer
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
