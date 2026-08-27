"use client";

interface Props {
  index: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ index, title, subtitle }: Readonly<Props>) {
  return (
    <section className="relative overflow-hidden bg-obsidian pt-36 pb-16">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(193,255,0,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
          {`// ${index}`}
        </span>
        <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-slate-text">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
