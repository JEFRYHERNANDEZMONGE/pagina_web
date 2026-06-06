import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

const metrics = [
  { value: "4", label: "Clientes clave (9+ años)" },
  { value: "+2500", label: "Visitas mensuales" },
  { value: "+95%", label: "Precisión en datos" },
];

const processSteps = [
  {
    step: "Paso 1",
    title: "Planificación semanal",
    text: "Realizamos una planificación de rutas semanal cada lunes, definiendo los puntos críticos y objetivos de auditoría para asegurar una cobertura estratégica total.",
  },
  {
    step: "Paso 2",
    title: "Ejecución y tareas",
    text: "Al llegar al punto de venta, nuestros auditores ejecutan tareas específicas, gestionando con agilidad los momentos de alto tráfico para garantizar datos precisos sin interrupciones.",
  },
  {
    step: "Paso 3",
    title: "Procesamiento inmediato",
    text: "Carga instantánea de la información a nuestra plataforma centralizada. Los datos se procesan en tiempo real para un análisis profundo y validación técnica inmediata.",
  },
  {
    step: "Paso 4",
    title: "Entrega de reportes diarios",
    text: "Cada mañana, usted recibe informes consolidados con los hallazgos del día anterior, permitiendo una toma de decisiones informada y ágil sobre su ejecución comercial.",
  },
];

const services = [
  {
    title: "Desarrollo comercial en punto de venta",
    text: "Optimización de la presencia de marca mediante estrategias de visibilidad, cumplimiento de acuerdos comerciales y gestión activa en anaquel.",
  },
  {
    title: "Registro de productos",
    text: "Gestión profesional para el registro y actualización de productos ante las autoridades correspondientes y cadenas comerciales, asegurando el cumplimiento legal.",
  },
  {
    title: "Servicio de colocación de productos",
    text: "Ejecución física de colocación, rotación de inventarios y mantenimiento de exhibiciones para garantizar que el producto esté siempre disponible y atractivo.",
  },
];

const technology = [
  { title: "Captura digital", text: "Levantamiento directo en tienda." },
  { title: "Reportes Real-Time", text: "KPIs actualizados al instante." },
  { title: "Multi-Canal", text: "Control centralizado nacional." },
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
            <p className="mb-5 inline-flex border border-white/22 bg-night/55 px-4 py-2 text-sm font-semibold text-white/86">
              Ejecución comercial en Costa Rica
            </p>
            <h1 className="text-white">
              Impulsamos sus productos en supermercados de Costa Rica
            </h1>
            <p className="lead mt-6 max-w-2xl text-white/82">
              En HM Sucomer no solo reportamos datos; tomamos acción inmediata en el punto de venta para asegurar que su marca domine el mercado costarricense.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a href="#contacto" className="bg-evidence px-6 py-3.5 text-center text-base font-semibold text-night transition hover:brightness-110 sm:px-8 sm:py-4 sm:text-lg">
                Solicitar consultoría
              </a>
              <a href="#servicios" className="border border-white/38 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white hover:text-night sm:px-8 sm:py-4 sm:text-lg">
                Nuestros servicios
              </a>
            </div>
          </div>

          <div className="self-end lg:pb-12">
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

      <section id="metodo" className="home-section bg-[linear-gradient(180deg,var(--surface-strong)_0%,var(--surface-muted)_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-ink">Nuestro proceso de trabajo: precisión en cada visita</h2>
              <p className="lead mt-5 text-ink-muted">
                Garantizamos la integridad de sus datos mediante una metodología rigurosa de cuatro fases, diseñada para transformar la observación de campo en decisiones estratégicas de alta rentabilidad.
              </p>
            </div>

            <div className="border-y border-border">
              {processSteps.map((item, index) => (
                <article key={item.step} className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8 sm:py-7">
                  <p className="font-display text-3xl font-bold leading-none text-accent-strong sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-muted">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="home-section bg-[linear-gradient(180deg,var(--background)_0%,var(--surface)_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
            <div>
              <h2 className="text-ink">Nuestras soluciones especializadas</h2>
              <p className="lead mt-4 text-ink-muted">
                Potenciamos su marca en el retail mediante servicios integrales de desarrollo comercial, registro de productos y colocación en punto de venta.
              </p>
            </div>
            <div className="service-index">
              {services.map((service, index) => (
                <article key={service.title} className="service-row">
                  <p className="service-row-number">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-ink lg:max-w-[16rem]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-muted">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sistema" className="home-section bg-[linear-gradient(135deg,var(--night)_0%,var(--accent-strong)_58%,var(--night-panel)_100%)] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:px-8">
          <div>
            <h2>Información crítica en tiempo real</h2>
            <p className="lead mt-5 text-white/78">
              Nuestra plataforma tecnológica exclusiva permite una visibilidad total sobre la ejecución en punto de venta. Transformamos cada visita en un conjunto de datos estructurados accesibles desde cualquier dispositivo.
            </p>
            <div className="mt-9 grid border-y border-night-line sm:grid-cols-2">
              {technology.map((item) => (
                <div key={item.title} className="border-b border-night-line py-5 sm:odd:border-r sm:even:pl-6 sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
                  <h3 className="text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="software-frame">
            <Image
              src="/images/retail-dashboard.svg"
              alt="Retail software dashboard"
              width={960}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section id="contacto" className="home-section bg-[linear-gradient(180deg,var(--surface-muted)_0%,var(--background)_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-8">
          <div>
            <h2 className="text-ink">Potencie su presencia comercial</h2>
            <p className="lead mt-5 text-ink-muted">
              Estamos listos para elevar el estándar de su marca en el mercado retail costarricense con soluciones enfocadas en retorno de inversión.
            </p>
            <div className="mt-9 border-y border-border">
              {contactItems.map((item) => (
                <div key={item.title} className="grid gap-1 border-b border-border py-4 last:border-b-0 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-5">
                  <p className="text-sm font-semibold text-ink-muted">{item.title}</p>
                  <p className="mt-1 text-base text-ink">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
