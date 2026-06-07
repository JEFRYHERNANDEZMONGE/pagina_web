"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./site-data";

export function SiteHeader() {
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="inline-flex items-center" aria-label="HM Sucomer, inicio">
          <Image
            src="/Logo Jefry.png"
            alt="HM Sucomer"
            width={2160}
            height={1689}
            priority
            sizes="112px"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="nav-link px-1 py-2 text-sm font-medium text-ink-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contacto"
          className="nav-cta hidden bg-evidence px-4 py-2 text-sm font-semibold text-night sm:inline-flex"
        >
          Hablar
        </Link>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center border border-border-strong px-4 text-sm font-semibold text-ink transition hover:border-ink [&::-webkit-details-marker]:hidden">
            Menú
          </summary>
          <div className="absolute right-0 mt-3 w-[min(18rem,calc(100vw-2rem))] border border-border bg-surface p-3">
            <nav className="flex flex-col" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="nav-link px-3 py-3 text-sm font-semibold text-ink-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contacto"
                className="nav-cta mt-2 bg-evidence px-3 py-3 text-center text-sm font-semibold text-night"
              >
                Hablar sobre su operación
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
