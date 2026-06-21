"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./site-data";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

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
            sizes="128px"
            className="h-[3.75rem] w-auto sm:h-[4.1rem]"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-1 py-2 text-sm font-medium transition duration-200 hover:scale-[1.04] hover:text-ink ${
                  active
                    ? "text-ink after:absolute after:inset-x-1 after:bottom-1 after:h-0.5 after:bg-evidence"
                    : "text-ink-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#contacto"
          className="hidden bg-evidence px-4 py-2 text-sm font-bold text-night transition duration-200 hover:scale-[1.04] hover:brightness-105 sm:inline-flex"
        >
          Hablemos
        </Link>

        <details className="group relative md:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center border border-border-strong bg-surface text-ink transition duration-200 hover:scale-[1.04] hover:border-ink hover:bg-surface-muted [&::-webkit-details-marker]:hidden" aria-label="Abrir navegación">
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-current transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-full bg-current transition group-open:opacity-0" />
              <span className="h-0.5 w-full bg-current transition group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-[min(19rem,calc(100vw-2rem))] border border-border bg-surface p-3 shadow-[0_8px_8px_rgba(10,29,34,0.08)]">
            <nav className="flex flex-col" aria-label="Navegación móvil">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-3 text-sm font-semibold transition duration-200 hover:scale-[1.02] hover:bg-surface-muted hover:text-ink ${
                      active ? "bg-surface-muted text-ink" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/#contacto"
                className="mt-2 bg-evidence px-3 py-3 text-center text-sm font-bold text-night transition duration-200 hover:scale-[1.02] hover:brightness-105"
              >
                Hablemos
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
