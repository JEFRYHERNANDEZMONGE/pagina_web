import Image from "next/image";
import Link from "next/link";

const values = [
  { title: 'Lealtad', text: 'Fidelidad absoluta a los objetivos de nuestros socios.' },
  { title: 'Exclusividad y Confidencialidad', text: 'Manejo riguroso y privado de la información estratégica.' },
  { title: 'Responsabilidad', text: 'Compromiso total con la entrega de resultados precisos.' },
];

const provinces = ['San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'];

export default function EmpresaPage() {
  return (
    <div className="bg-background text-ink">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="max-w-4xl text-4xl font-bold text-ink sm:text-5xl">Liderazgo en Ejecución Comercial Retail en Costa Rica</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-muted">
          HM Sucomer es el referente indiscutible en la precisión de datos para el punto de venta. Con una trayectoria sólida en el mercado local, convertimos la ejecución comercial en decisiones estratégicas.
        </p>
        <div className="mt-8 h-1 w-24 bg-accent" />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-12">
          <article className="rounded-2xl border border-border bg-surface p-8 md:col-span-7">
            <h2 className="text-3xl font-bold text-ink">Trayectoria</h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Fundada el <strong className="text-ink">1 de junio de 2015</strong>, HM Sucomer nació bajo la premisa de la excelencia operativa y ha evolucionado hasta convertirse en un pilar de la ejecución comercial retail en el país.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Hoy operamos con presencia en cadenas clave como <strong className="text-ink">Walmart, Automercado, Megasuper y Gessa</strong>.
            </p>
          </article>
          <div className="relative overflow-hidden rounded-2xl shadow-sm md:col-span-5">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0XhqkStkwK44mBzVmMd41on-QkhVGgJJW-aIl1yO-LS2r-yJGqI_QilnanFO5UJRsyzudo4bLkuLIDFYmFgH7CMrl5RP8mEufytaqL-2xoLI7rpTbEcIAfnEkEqcTrh8h6gQGx3OIoYfsYeUonAxYRQLpRA3JpMX4P_52i-TYX3j7bDULo9v8A8XewK33ndhSNoSSEXlnukmCR424ogZeqfXyg0IYITIFZyDG2O6w4gPsY9m-jC6IH892CD9hohpk48ZNEWBVkzk"
              alt="HM Sucomer Retail Excellence"
              width={900}
              height={900}
              sizes="(min-width: 768px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <article className="rounded-2xl bg-night p-8 text-white md:col-span-6">
            <h3 className="text-2xl font-bold">Nuestra Misión</h3>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Reducir costos sin afectar el desempeño operativo, buscando siempre alcanzar los números óptimos de ventas para nuestros clientes.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface-muted p-8 md:col-span-6">
            <h3 className="text-2xl font-bold text-ink">Nuestra Visión</h3>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Consolidarnos como el líder del mercado en desarrollo y supervisión comercial a bajo costo, estableciendo el estándar de eficiencia en Centroamérica.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-center text-3xl font-bold text-ink">Nuestros Valores</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="text-center">
                <h3 className="text-xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-accent-strong">El capital humano</p>
            <h2 className="mt-4 text-3xl font-bold text-ink">Un Equipo de Élite</h2>
            <p className="mt-6 text-lg leading-8 text-ink-muted">
              Contamos con una estructura robusta compuesta por <strong className="text-ink">5 supervisores expertos</strong> y una red de <strong className="text-ink">más de 70 colaboradores externos</strong> altamente capacitados.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              Este equipo garantiza consistencia de información y ejecución impecable en cada rincón del país.
            </p>
            <Link href="/#contacto" className="mt-8 inline-block rounded-xl border border-ink px-6 py-3 font-semibold text-ink transition hover:bg-night hover:text-white">
              Contactar al equipo
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kcbT1lALGl_ZPd_xGyv6IHoIUpaZzUdzJNpQGmQl_cuqwB_hcui1RCmHvew4jWkmmkY2Jk0CTSaAlm3SXneiq8srL6CostU0-sdTjWIClaP3DRRee25i72d6xjW4HOYQMC5T2Cm3cg941Pz85XCz8w4h3nmljLm60nYPfS0bcwbQbfw6C3CcfFh5xRdYa5dE21u4Wn4PdLVgGxIBl0kMcyKaw1Bi4NLN_Ff3bEkpboeTVcwLRfzN0mhfea9xsAH7KO2qfGoftFA" alt="Especialista revisando ejecución en punto de venta" width={520} height={520} sizes="(min-width: 768px) 25vw, 50vw" className="h-64 w-full rounded-2xl object-cover" />
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYBckL-e8VxLpbrPplZwiMqORa9U1nwjgjOA8ZJ2m7gzGmus85bTpx2RObds6xp-vwpb0pJgmaLIUA8JCl_qeDdIhzfFCqQfEofBDcDUcEkLrJfF-LZRBtH38V0GbaIc7_WCqRR59uLFRStkZcrfL52fmha0_E3QrP4gexYHV-bpoG5JrdQ6omhHcSZBVQZE2CPh_rI4nnl-aOtcvKqSE3erSB-I5pGe2xij1sOWtogWFGu21L8wh6kKLT8NUDj37aHw0QSHv_tfw" alt="Equipo coordinando trabajo de campo" width={520} height={520} sizes="(min-width: 768px) 25vw, 50vw" className="mt-10 h-64 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-muted p-8">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold text-ink">Cobertura 100% Nacional</h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              HM Sucomer garantiza presencia total en las 7 provincias de Costa Rica. Nuestra capacidad operativa nos permite estar donde su marca lo necesita, sin excepciones.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {provinces.map((province) => (
                <span key={province} className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-white">{province}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-night px-8 py-12 text-white shadow-md">
          <h2 className="text-4xl font-bold">Construyamos el futuro del Retail</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/78">Aliados de Walmart, Automercado, Megasuper, Gessa y más. Estamos listos para potenciar su marca.</p>
          <Link href="/#contacto" className="mt-8 inline-block rounded-full bg-accent-soft px-8 py-4 text-lg font-semibold text-ink transition hover:brightness-95">
            Contactar a un consultor
          </Link>
        </div>
      </section>
    </div>
  );
}

