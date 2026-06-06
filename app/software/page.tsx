import Image from "next/image";
import Link from "next/link";

const platformItems = [
  {
    title: 'App Móvil para Auditores',
    text: 'Diseñada para la máxima eficiencia en el punto de venta. Permite recolectar datos estructurados, capturar evidencia fotográfica y registrar métricas críticas.',
    tags: ['iOS & Android', 'Captura Fotográfica', 'Validación por GPS'],
  },
  {
    title: 'Dashboard Web para Clientes',
    text: 'Transformamos los datos en insights accionables mediante visualizaciones dinámicas, filtros avanzados y alertas automáticas.',
    tags: ['Analytics 360', 'Alertas en Vivo', 'Multi-empresa'],
  },
];

const capabilities = [
  {
    title: 'Sincronización Offline',
    text: 'Los datos se almacenan localmente y se sincronizan automáticamente al recuperar señal.',
  },
  {
    title: 'Geolocalización de Visitas',
    text: 'Validamos que cada auditoría se realice en las coordenadas exactas del punto de venta asignado.',
  },
  {
    title: 'Dashboards en Real Time',
    text: 'La información fluye de la tienda a su pantalla en segundos para reacciones tácticas inmediatas.',
  },
  {
    title: 'Exportación Excel/PDF',
    text: 'Salidas listas para análisis ejecutivo y seguimiento operativo.',
  },
];

const security = [
  {
    title: 'Datos en la Nube',
    text: 'Hospedaje en centros de datos de clase mundial con backups redundantes y encriptación de extremo a extremo.',
  },
  {
    title: 'Acceso Jerárquico por Roles',
    text: 'Defina con precisión quién puede ver qué, desde visibilidad granular por tienda hasta resúmenes nacionales.',
  },
];

export default function SoftwarePage() {
  return (
    <div className="bg-background text-ink">
      <section className="relative overflow-hidden bg-night py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-block rounded-full bg-accent-soft px-4 py-2 text-xs font-bold text-accent-strong">Solución tecnológica</p>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Tecnología de Vanguardia para el Control Retail</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Empoderamos a su equipo con herramientas analíticas de alta precisión. Gestione cada punto de venta con datos en tiempo real y una arquitectura diseñada para la excelencia operativa.
            </p>
            <Link href="/#contacto" className="mt-8 inline-block rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white transition hover:brightness-110">
              Solicitar demo del sistema
            </Link>
          </div>
          <div className="relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUOVvEX6oWdBMSq_G0AG9V0y37d_TXGq2DM_fPtIJdb-sf8-i8fTjbI4-AXAGz259nlqyRnQ0GyKLmaUpJxcUpbarnLpQmsHaGbkPtaL8dFo2RuYoX-hyaNYUtyevOCg6dP01isZ2aT1KkYT9HxKei_4mtHpIY01A5UhhfRM-kTH5-GPiGtGJIQZa8i5-javueFcd7W6hgwFl4ajSKK4aolP2lS7w7lcSbghDXe-SaVsyFWentI3N3fPQU93tXfjluupfJDifE-iw"
              alt="Dashboard del sistema de auditoría retail"
              width={1120}
              height={630}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-video w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Nuestra Plataforma</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-ink-muted">Una solución integral que conecta el trabajo de campo con la toma de decisiones estratégica mediante dos ecosistemas integrados.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 text-left">
            {platformItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{item.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-ink-muted">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Capacidades del Sistema</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Infraestructura Segura y Confiable</h2>
            <div className="mt-8 space-y-6">
              {security.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALRrGZwcf3pmqjBn0rMuebFSIlu3_ezGPyaT2zA3rCYXFAuxcUES2D5T_KLes0S3Dt1blY_pf8zwS6wz9_ov__3r818VBYGyF5VYD39tDmrnkZCBbz2JaLhq79IYQYM0kdzM-q6uYSCaTPOWd8D-Q9QaOnl3pNkimxBemmXijs8wW-inLj1DOQ3Yq9sxANWvyeEi30karBQoNCRCDm04wkiVzE8_t1x8bvPjcPVdcFrWrdkubegzeZIFC0CeDhABtCMQ9_gTUec1s"
            alt="Panel de seguridad y reportes del sistema"
            width={1120}
            height={840}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="min-h-[24rem] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
