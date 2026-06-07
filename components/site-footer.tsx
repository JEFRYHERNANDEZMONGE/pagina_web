import Image from "next/image";
import Link from "next/link";
import { contact, navItems } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-night-line bg-night text-white/78">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="HM Sucomer, inicio">
              <Image
                src="/Logo Jefry.png"
                alt="HM Sucomer"
                width={2160}
                height={1689}
                sizes="144px"
                className="h-14 w-auto brightness-0 invert sm:h-16"
              />
            </Link>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
              Seguimiento, registro y ejecución comercial para operación retail en Costa Rica.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold text-white">Navegación</p>
              <nav className="grid gap-3 text-sm" aria-label="Navegación del footer">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="footer-link text-white/62">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Contacto</p>
              <div className="grid gap-3 text-sm text-white/62">
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-night-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">© {new Date().getFullYear()} HM Sucomer. Todos los derechos reservados.</p>
          <a
            href="https://zamylabs.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link inline-flex items-center gap-3 text-sm text-white/45"
            aria-label="Desarrollado por Zamylabs"
          >
            <span>Desarrollado por</span>
            <Image
              src="/Logo Zamy Labs.png"
              alt="Zamylabs"
              width={1446}
              height={723}
              sizes="104px"
              className="h-7 w-auto opacity-80"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
