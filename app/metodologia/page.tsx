import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: 'Paso 1: Planificación Semanal',
    text: 'Planificación de rutas semanal cada lunes, definiendo puntos críticos y objetivos de auditoría para asegurar cobertura estratégica.',
    meta: 'TODOS LOS LUNES',
    number: '01',
  },
  {
    title: 'Paso 2: Ejecución y Tareas',
    text: 'Al llegar al punto de venta, nuestros auditores ejecutan tareas específicas con agilidad para garantizar datos precisos sin interrupciones.',
    meta: '',
    number: '02',
  },
  {
    title: 'Paso 3: Procesamiento Inmediato',
    text: 'Carga instantánea de la información a nuestra plataforma centralizada para análisis profundo y validación técnica inmediata.',
    meta: '',
    number: '03',
  },
  {
    title: 'Paso 4: Entrega de Reportes Diarios',
    text: 'Cada mañana, usted recibe informes consolidados con los hallazgos del día anterior para una toma de decisiones ágil.',
    meta: 'REPORTES MATUTINOS',
    number: '04',
  },
];

const cycle = ['Detección de Anomalías', 'Resolución de Incidentes', 'Ajuste de Ruta', 'Validación de Datos'];
const truth = [
  'Geolocalización GPS obligatoria para cada registro de visita.',
  'Evidencia fotográfica en tiempo real in-situ.',
  'Estampado de tiempo digital e inalterable.',
];

export default function MetodologiaPage() {
  return (
    <div className="bg-background text-ink">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-surface-muted md:block" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent-strong">Nuestra excelencia operativa</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Nuestro Proceso de Trabajo: <span className="text-accent-strong">Precisión en cada Visita</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-muted">
              Garantizamos la integridad de sus datos mediante una metodología rigurosa de cuatro fases, diseñada para transformar la observación de campo en decisiones estratégicas de alta rentabilidad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-12">
            {steps.map((step, index) => (
              <article key={step.title} className={`${index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5'} flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 ${index === 1 ? 'bg-night text-white' : ''}`}>
                <div>
                  <h3 className={`text-2xl font-bold ${index === 1 ? 'text-white' : 'text-ink'}`}>{step.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? 'text-white/78' : 'text-ink-muted'}`}>{step.text}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-border/20 pt-4">
                  <span className={`text-xs font-bold ${index === 1 ? 'text-accent-soft' : 'text-accent-strong'}`}>{step.meta}</span>
                  <span className={`text-4xl font-black ${index === 1 ? 'text-white/20' : 'text-white/22'}`}>{step.number}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ciclo de Mejora Continua en 24 Horas</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cycle.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background p-6">
                <p className="text-lg font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
            <p className="mx-auto mt-10 max-w-3xl text-lg italic text-ink-muted">
            &ldquo;Identificamos cualquier anomalía en el campo y trabajamos para resolverla en menos de 24 horas, garantizando que el ciclo de información nunca se detenga.&rdquo;
          </p>
        </div>
      </section>

      <section className="bg-night py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw9Dnzal9ZiR5tbTF0wGim3jw895vFMIE7uuOkKruo7_dzX6EvWUO0F1pRsdq9qHUMLeulvJn28bCAaLcWfzEdhBLw6kKQGMkJ-IFbMCRevHbmyD7Crt3qMbejYDlFyRSRf9sM9kRq2Yd64Hal9gI7Txkug-0ehFCz2kpakj2ykGka7GrVbFNLgkDYmHPuAo4purvht5_MZRTmazDZuLc0yh2lbE8F6JEwdlWLW9f9p6rTeXL37GJfQOe8Ofxeo_vwgeTCcahMQoQ"
            alt="Ética profesional"
            width={1120}
            height={630}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-video w-full rounded-2xl object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Garantía de Veracidad Tecnológica</h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              En HM Sucomer, la veracidad de los datos está respaldada por tecnología de punta. Nuestra aplicación de auditoría integra protocolos de seguridad infranqueables.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-white/78">
              {truth.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface p-10">
            <h2 className="text-3xl font-bold text-ink">¿Listo para elevar la precisión de su ejecución?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
              Permítanos presentarle cómo nuestra metodología puede adaptarse específicamente a los retos de su categoría.
            </p>
            <Link href="/#contacto" className="mt-8 inline-block rounded-xl bg-night px-8 py-4 text-lg font-semibold text-white transition hover:bg-night-panel">
              Hablemos de su metodología
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

