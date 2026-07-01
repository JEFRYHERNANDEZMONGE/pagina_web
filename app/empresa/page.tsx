import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const values = [
  {
    title: "Lealtad",
    principle: "La prioridad del cliente guía cada visita.",
    text: "El equipo trabaja con foco en los objetivos comerciales acordados, sin perder criterio cuando aparecen incidencias en tienda.",
    proof: "Alineación de ruta, canal y producto",
  },
  {
    title: "Exclusividad y confidencialidad",
    principle: "La información sensible se maneja con reserva.",
    text: "Precios, negociaciones, evidencia fotográfica y hallazgos se tratan como material estratégico, no como datos operativos menores.",
    proof: "Cuidado documental y comunicación controlada",
  },
  {
    title: "Responsabilidad",
    principle: "Cada reporte debe poder sostenerse.",
    text: "La operación se apoya en registros verificables, seguimiento claro y respuesta oportuna cuando un dato requiere revisión.",
    proof: "Trazabilidad antes de entregar información",
  },
];

const coverageZones = [
  {
    region: "GAM",
    provinces: ["San José", "Alajuela", "Cartago", "Heredia"],
  },
  {
    region: "Pacífico",
    provinces: ["Guanacaste", "Puntarenas"],
  },
  {
    region: "Caribe",
    provinces: ["Limón"],
  },
];

export default function EmpresaPage() {
  return (
    <div className="bg-background text-ink">
      <section className="hero-command relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 opacity-[0.62]">
          <Image
            src="/images/hero_hm.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[54%_46%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,29,34,0.96)_0%,rgba(10,29,34,0.86)_42%,rgba(10,29,34,0.36)_74%,rgba(10,29,34,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(122,178,71,0.22),transparent_34rem)]" />
        </div>

        <div className="hero-command-grid relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[680px] lg:grid-cols-[minmax(0,0.86fr)_minmax(320px,0.5fr)] lg:items-end lg:px-8 lg:py-12">
          <div className="max-w-4xl pb-4 lg:pb-12">
            <p className="reveal-motion reveal-rise is-visible mb-5 inline-flex border border-white/22 bg-night/55 px-4 py-2 text-sm font-semibold text-white/86 [--reveal-delay:120ms]">
              Empresa y cobertura nacional
            </p>
            <h1 className="reveal-motion reveal-rise is-visible text-white [--reveal-delay:220ms]">Liderazgo en ejecución comercial retail en Costa Rica</h1>
            <p className="lead reveal-motion reveal-rise is-visible mt-6 max-w-2xl text-white/82 [--reveal-delay:340ms]">
              HM Sucomer combina trayectoria, equipo de campo y criterio operativo para convertir la ejecución comercial en decisiones confiables.
            </p>
          </div>

          <div className="reveal-motion reveal-panel is-visible self-end border border-white/18 bg-night/68 p-5 lg:mb-12 [--reveal-delay:480ms]">
            <p className="text-sm font-semibold text-evidence-soft">Desde 2015</p>
            <p className="mt-3 text-3xl font-bold text-white">7 provincias</p>
            <p className="mt-3 text-sm leading-6 text-white/74">Presencia operativa para marcas que necesitan control serio en supermercados y cadenas comerciales.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
          <Reveal as="article" className="reveal-rise border border-border bg-surface p-8 md:col-span-7">
            <p className="text-xs font-bold tracking-[0.04em] text-accent-strong">Historia operativa</p>
            <h2 className="mt-4 text-3xl font-bold text-ink">Trayectoria</h2>
            <p className="mt-5 text-xl font-bold leading-8 text-night">Diez años construyendo presencia comercial en cadenas clave.</p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Fundada el <strong className="text-ink">1 de junio de 2015</strong>, HM Sucomer nació bajo la premisa de la excelencia operativa y ha evolucionado hasta convertirse en un pilar de la ejecución comercial retail en el país.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Hoy operamos con presencia en cadenas clave como <strong className="text-ink">Walmart, Automercado, Megasuper y Gessa</strong>.
            </p>
          </Reveal>
          <Reveal className="reveal-image relative overflow-hidden border border-border md:col-span-5" delay={120}>
            <Image
              src="/images/field-team.jpg"
              alt="Equipo de campo revisando ejecución comercial en punto de venta"
              width={900}
              height={900}
              sizes="(min-width: 768px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal as="article" className="reveal-rise bg-night p-8 text-white md:col-span-6" delay={80}>
            <p className="text-xs font-bold tracking-[0.04em] text-evidence-soft">Propósito</p>
            <h3 className="mt-4 text-2xl font-bold">Nuestra Misión</h3>
            <p className="mt-5 text-lg font-bold leading-7 text-white">Ejecución eficiente con criterio comercial.</p>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Reducir costos sin afectar el desempeño operativo, buscando siempre alcanzar los números óptimos de ventas para nuestros clientes.
            </p>
          </Reveal>
          <Reveal as="article" className="reveal-rise border border-border bg-surface-muted p-8 md:col-span-6" delay={160}>
            <p className="text-xs font-bold tracking-[0.04em] text-accent-strong">Dirección</p>
            <h3 className="mt-4 text-2xl font-bold text-ink">Nuestra Visión</h3>
            <p className="mt-5 text-lg font-bold leading-7 text-night">Ser referencia regional en supervisión comercial responsable.</p>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              Consolidarnos como el líder del mercado en desarrollo y supervisión comercial a bajo costo, estableciendo el estándar de eficiencia en Centroamérica.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-section bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,1fr)] lg:items-stretch">
            <Reveal className="reveal-panel flex flex-col justify-between bg-night px-6 py-7 text-white sm:px-8 lg:min-h-[34rem]">
              <div>
                <h2 className="max-w-xl text-white">Valores que sostienen la operación</h2>
                <p className="lead mt-5 max-w-xl text-white/78">
                  En campo, los valores no viven en una declaración institucional. Se notan en cómo se maneja información sensible, cómo se responde ante una incidencia y cómo se protege la confianza del cliente.
                </p>
              </div>
              <div className="mt-10 border-t border-night-line pt-5">
                <p className="text-sm font-semibold leading-6 text-evidence-soft">Criterio común</p>
                <p className="mt-3 text-2xl font-bold leading-tight text-white">Cuidar la marca del cliente mientras se ejecuta con precisión.</p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {values.map((value, index) => (
                <Reveal
                  as="article"
                  key={value.title}
                  className={`reveal-rise grid gap-5 px-5 py-6 sm:grid-cols-[13rem_minmax(0,1fr)] sm:px-6 ${
                    index === 1 ? "bg-accent-strong text-white" : "bg-surface-muted text-ink"
                  }`}
                >
                  <div>
                    <p className={`text-xs font-bold tracking-[0.04em] ${index === 1 ? "text-evidence-soft" : "text-accent-strong"}`}>{value.proof}</p>
                    <h3 className={`mt-4 text-2xl font-bold ${index === 1 ? "text-white" : "text-ink"}`}>{value.title}</h3>
                  </div>
                  <div>
                    <p className={`text-lg font-bold leading-7 ${index === 1 ? "text-white" : "text-ink"}`}>{value.principle}</p>
                    <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/78" : "text-ink-muted"}`}>{value.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:px-8">
          <Reveal className="reveal-rise">
            <p className="mb-4 inline-flex border border-border bg-surface px-4 py-2 text-sm font-semibold text-accent-strong">El capital humano</p>
            <h2 className="text-ink">Un equipo de campo con estructura nacional</h2>
            <p className="mt-6 text-xl font-bold leading-8 text-night">Supervisión experta y red externa para sostener cobertura.</p>
            <p className="lead mt-4 text-ink-muted">
              Contamos con una estructura robusta compuesta por <strong className="text-ink">5 supervisores expertos</strong> y una red de <strong className="text-ink">más de 70 colaboradores externos</strong> altamente capacitados.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Este equipo garantiza consistencia de información y ejecución impecable en cada rincón del país.
            </p>
            <Link href="/#contacto" className="mt-8 inline-block border border-ink px-6 py-3 font-semibold text-ink transition hover:bg-night hover:text-white">
              Contactar al equipo
            </Link>
          </Reveal>
          <Reveal className="reveal-image grid grid-cols-2 gap-4" delay={140}>
            <Image src="/images/retail-audit.jpg" alt="Registro operativo de ejecución comercial" width={520} height={520} sizes="(min-width: 768px) 25vw, 50vw" className="h-64 w-full border border-border object-cover" />
            <Image src="/images/field-team.jpg" alt="Equipo coordinando trabajo de campo" width={520} height={520} sizes="(min-width: 768px) 25vw, 50vw" className="mt-10 h-64 w-full border border-border object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="home-section bg-night text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8">
          <Reveal className="reveal-rise">
            <p className="text-xs font-bold tracking-[0.04em] text-evidence-soft">Alcance territorial</p>
            <h2 className="mt-4 text-white">Cobertura 100% nacional</h2>
            <p className="mt-5 text-xl font-bold leading-8 text-white">Rutas coordinadas según frecuencia, canal y necesidad de seguimiento.</p>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Presencia operativa en las 7 provincias de Costa Rica, con rutas coordinadas según frecuencia, canal y necesidad de seguimiento.
            </p>
          </Reveal>

          <Reveal className="reveal-panel grid gap-3" delay={120}>
            {coverageZones.map((zone, index) => (
              <article
                key={zone.region}
                className={`grid gap-4 px-5 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center ${
                  index === 1 ? "bg-surface text-ink" : "bg-night-panel text-white"
                }`}
              >
                <div>
                  <p className={`text-xs font-bold tracking-[0.04em] ${index === 1 ? "text-accent-strong" : "text-evidence-soft"}`}>Zona de cobertura</p>
                  <h3 className={`mt-2 text-xl font-bold ${index === 1 ? "text-ink" : "text-white"}`}>{zone.region}</h3>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {zone.provinces.map((province) => (
                    <li
                      key={province}
                      className={`flex gap-2 text-sm font-semibold leading-6 ${index === 1 ? "text-ink-muted" : "text-white/78"}`}
                    >
                      <span aria-hidden="true" className={`mt-2.5 h-1.5 w-1.5 shrink-0 ${index === 1 ? "bg-accent-strong" : "bg-evidence"}`} />
                      <span>{province}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <Reveal className="reveal-panel mx-auto grid max-w-7xl gap-8 bg-night px-4 py-10 text-white sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10">
          <div>
            <h2>Construyamos el futuro del retail</h2>
            <p className="lead mt-4 max-w-3xl text-white/78">Aliados de Walmart, Automercado, Megasuper, Gessa y más. Estamos listos para potenciar su marca.</p>
          </div>
          <Link href="/#contacto" className="inline-block bg-evidence px-8 py-4 text-center text-lg font-semibold text-night transition hover:brightness-110">
            Contactar a un consultor
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

