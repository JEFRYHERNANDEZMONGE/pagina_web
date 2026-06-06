import Image from "next/image";
import Link from "next/link";

const serviceLines = [
  {
    marker: "Presencia",
    title: "Desarrollo comercial en punto de venta",
    text: "Seguimiento de acuerdos comerciales, exhibiciones, disponibilidad y oportunidades de mejora en tienda.",
    proof: "Útil cuando la marca necesita revisar cómo se está ejecutando lo negociado con cadenas y supermercados.",
  },
  {
    marker: "Registro",
    title: "Registro de productos",
    text: "Gestión documental, formularios, muestras y seguimiento con los actores necesarios para habilitar productos.",
    proof: "Pensado para empresas que necesitan entrar o actualizar su portafolio sin perder control del proceso.",
  },
  {
    marker: "Ejecución",
    title: "Colocación y mantenimiento de productos",
    text: "Apoyo operativo para colocación, rotación, revisión de inventario visible y mantenimiento de exhibiciones.",
    proof: "Funciona cuando el punto de venta necesita presencia física constante, no solo un reporte posterior.",
  },
];

const operatingSignals = [
  "Visitas documentadas en campo",
  "Evidencia fotográfica cuando aplica",
  "Seguimiento de incidencias comerciales",
  "Comunicación directa para definir alcance",
];

export default function ServiciosPage() {
  return (
    <div className="bg-background text-ink">
      <section className="relative overflow-hidden bg-night text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow text-accent-soft">Servicios comerciales</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Tres frentes para ordenar la ejecución en punto de venta
            </h1>
            <p className="lead mt-5 max-w-2xl text-white/78">
              HM Sucomer trabaja sobre tareas concretas: revisar presencia, gestionar registros y acompañar la colocación física de productos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="rounded-xl bg-accent px-6 py-3.5 text-center text-base font-semibold text-white transition hover:brightness-110 sm:px-8 sm:py-4"
              >
                Hablar sobre su operación
              </Link>
              <a
                href="#frentes"
                className="rounded-xl border border-white/35 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:border-white hover:bg-white/8 sm:px-8 sm:py-4"
              >
                Revisar frentes de trabajo
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-night-panel p-3">
            <Image
              src="/images/field-team.svg"
              alt="Equipo de campo revisando ejecución comercial en punto de venta"
              width={960}
              height={720}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="frentes" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">Servicios definidos por operación, no por paquete</h2>
            <p className="lead mt-4 text-ink-muted">
              Cada frente se adapta al tipo de marca, canal y nivel de seguimiento que necesita el cliente.
            </p>
          </div>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {serviceLines.map((service) => (
              <article
                key={service.title}
                className="grid gap-5 py-7 sm:grid-cols-[10rem_minmax(0,1fr)] sm:py-8 lg:grid-cols-[11rem_minmax(0,0.95fr)_minmax(16rem,0.65fr)] lg:gap-8"
              >
                <p className="eyebrow text-accent-strong">{service.marker}</p>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-muted">{service.text}</p>
                </div>
                <p className="rounded-xl bg-surface-muted px-4 py-4 text-sm leading-6 text-ink-muted">
                  {service.proof}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div>
            <p className="eyebrow text-accent-strong">Cómo se sostiene</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">La diferencia está en el seguimiento</h2>
            <p className="lead mt-5 text-ink-muted">
              Un servicio comercial serio no se mide por una promesa grande, sino por la capacidad de registrar lo que pasa y responder con criterio operativo.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {operatingSignals.map((signal) => (
              <div key={signal} className="rounded-xl border border-border bg-surface px-4 py-4">
                <p className="text-sm font-semibold leading-6 text-ink">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-2xl bg-night px-6 py-8 text-white sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10">
            <div>
              <h2 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Definamos qué necesita controlar su marca</h2>
              <p className="lead mt-4 max-w-2xl text-white/78">
                Cuéntenos qué canal, producto o ejecución necesita revisar. Con eso podemos proponer un alcance realista.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="rounded-xl bg-accent px-6 py-3.5 text-center text-base font-semibold text-white transition hover:brightness-110 sm:px-8 sm:py-4"
            >
              Hablar con HM Sucomer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
