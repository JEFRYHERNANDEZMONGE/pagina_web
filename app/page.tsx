import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ProcessScroll } from "@/components/process-scroll";
import { Reveal } from "@/components/reveal";
import { ServicesScroll } from "@/components/services-scroll";

const metrics = [
  { value: "100%", label: "Cobertura en Costa Rica" },
  { value: "+400", label: "Puntos de venta visitados semanalmente" },
  { value: "+95%", label: "Precisión en datos" },
];

const processSteps = [
  {
    phase: "Planificación",
    moment: "Lunes, antes de salir a ruta",
    title: "Planificación semanal",
    text: "Se definen tiendas críticas, objetivos por marca y prioridades de anaquel para que cada visita tenga una tarea concreta.",
    output: "Ruta validada y objetivos por punto de venta",
  },
  {
    phase: "Campo",
    moment: "Durante la visita",
    title: "Ejecución y tareas",
    text: "El equipo ejecuta tareas en tienda, revisa presencia, corrige hallazgos y levanta evidencia sin interrumpir la operación del punto de venta.",
    output: "Acciones completadas y evidencia de campo",
  },
  {
    phase: "Sistema",
    moment: "Minutos después de la visita",
    title: "Procesamiento inmediato",
    text: "La información se carga en la plataforma centralizada, con fotografías, observaciones y datos listos para revisión comercial.",
    output: "Datos estructurados y trazables",
  },
  {
    phase: "Reporte",
    moment: "Cada mañana",
    title: "Entrega de reportes diarios",
    text: "Su equipo recibe hallazgos consolidados del día anterior para priorizar decisiones, corregir desviaciones y medir cumplimiento.",
    output: "Reporte diario para tomar acción",
  },
];

const services = [
  {
    title: "Desarrollo comercial en punto de venta",
    text: "Mejoramos la presencia de marca en anaquel: revisamos visibilidad, cumplimiento de acuerdos comerciales y oportunidades de mejora por tienda.",
  },
  {
    title: "Registro de productos",
    text: "Gestionamos el registro y actualización de productos ante autoridades sanitarias y cadenas comerciales, con seguimiento hasta la aprobación final.",
  },
  {
    title: "Colocación de productos",
    text: "Ejecutamos colocación, rotación de inventario y mantenimiento de exhibiciones para que el producto esté disponible y bien presentado en todo momento.",
  },
];

const technology = [
  { title: "Captura digital", text: "Levantamiento directo en tienda." },
  { title: "Reportes en tiempo real", text: "Indicadores actualizados al instante." },
  { title: "Multicanal", text: "Control centralizado a nivel nacional." },
  { title: "Respaldo fotográfico", text: "Evidencia visual de ejecución." },
];

const contactItems = [
  { title: "Correo", text: "jyghernandez@outlook.com" },
  { title: "Teléfonos", text: "+506 6102 5937 / +506 6110 4306" },
  { title: "Ubicación", text: "San José, Costa Rica" },
];

export default function HomePage() {
  return (
    <div className="bg-transparent text-ink">
      <section className="hero-command relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 opacity-75">
          <Image
            src="/images/hero_hm.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[48%_45%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,29,34,0.94)_0%,rgba(10,29,34,0.80)_38%,rgba(10,29,34,0.28)_70%,rgba(10,29,34,0.10)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(122,178,71,0.24),transparent_34rem)]" />
        </div>

        <div className="hero-command-grid relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[760px] lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,0.58fr)] lg:items-end lg:px-8 lg:py-12">
          <div className="max-w-4xl pb-4 lg:pb-12">
            <p className="reveal-motion reveal-rise is-visible mb-5 inline-flex border border-white/22 bg-night/55 px-4 py-2 text-sm font-semibold text-white/86 [--reveal-delay:120ms]">
              Ejecución comercial en Costa Rica
            </p>
            <h1 className="reveal-motion reveal-rise is-visible text-white [--reveal-delay:220ms]">
              Impulsamos sus productos en supermercados de Costa Rica
            </h1>
            <p className="lead reveal-motion reveal-rise is-visible mt-6 max-w-2xl text-white/82 [--reveal-delay:340ms]">
              En HM Sucomer no solo reportamos datos: actuamos en el punto de venta para que su marca compita mejor en el mercado costarricense.
            </p>
            <div className="reveal-motion reveal-rise is-visible mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row [--reveal-delay:460ms]">
              <a href="#contacto" className="bg-evidence px-6 py-3.5 text-center text-base font-semibold text-night transition hover:brightness-110 sm:px-8 sm:py-4 sm:text-lg">
                Solicitar consultoría
              </a>
              <a href="#servicios" className="border border-white/38 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white hover:text-night sm:px-8 sm:py-4 sm:text-lg">
                Nuestros servicios
              </a>
            </div>
          </div>

          <div className="reveal-motion reveal-panel is-visible self-end lg:pb-12 [--reveal-delay:580ms]">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((item) => (
                <div key={item.label} className="hero-metric-panel px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-3xl font-bold text-white sm:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/74">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessScroll steps={processSteps} />

      <ServicesScroll services={services} />

      <section id="sistema" className="home-section bg-[linear-gradient(135deg,var(--night)_0%,var(--accent-strong)_58%,var(--night-panel)_100%)] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:px-8">
          <Reveal className="reveal-rise">
            <h2>Información crítica en tiempo real</h2>
            <p className="lead mt-5 text-white/78">
              Nuestra plataforma centraliza la información de cada visita y le da visibilidad completa sobre la ejecución en punto de venta, desde cualquier dispositivo.
            </p>
            <div className="mt-9 grid border-y border-night-line sm:grid-cols-2">
              {technology.map((item) => (
                <div key={item.title} className="border-b border-night-line py-5 sm:odd:border-r sm:even:pl-6 sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
                  <h3 className="text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="reveal-image software-frame" delay={160}>
            <Image
              src="/images/dashboard.webp"
              alt="Retail software dashboard"
              width={960}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full"
            />
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="home-section bg-[linear-gradient(180deg,var(--surface-muted)_0%,var(--background)_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-8">
          <Reveal className="reveal-rise">
            <h2 className="text-ink">Potencie su presencia comercial</h2>
            <p className="lead mt-5 text-ink-muted">
              Cuéntenos qué necesita resolver en el mercado retail costarricense y le proponemos un plan de trabajo a medida.
            </p>
            <div className="mt-9 border-y border-border">
              {contactItems.map((item) => (
                <div key={item.title} className="grid gap-1 border-b border-border py-4 last:border-b-0 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-5">
                  <p className="text-sm font-semibold text-ink-muted">{item.title}</p>
                  <p className="mt-1 text-base text-ink">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="reveal-panel" delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
