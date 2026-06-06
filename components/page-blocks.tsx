import type { ReactNode } from "react";

export function PageSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}

export function Hero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-gradient-to-br from-night via-night to-accent-strong text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold text-accent-soft">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/78">{description}</p>
      </div>
    </section>
  );
}

export function CardGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-ink-muted">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

