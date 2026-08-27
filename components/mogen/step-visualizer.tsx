"use client";

import { useRef, useState } from "react";
import { bands, steps } from "@/lib/seo-steps";

export default function StepVisualizer() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [bg, setBg] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setBg(p);
  };

  return (
    <section
      id={"step-visualizer"}
      className="relative overflow-hidden py-24 transition-colors duration-500"
      style={{
        backgroundColor: `rgb(${10 + bg * 16}, ${10 + bg * 16}, ${11 + bg * 17})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
              {"// 02 — AUTHORITY"}
            </span>
            <h2 className="mt-3 max-w-xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
              The 37-Step Visualizer
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-slate-text">
            Every step is a technical node with a distinct value proposition for
            executives, engineers, and clients. Hover a node to deconstruct it.
            Scroll horizontally to traverse the framework.
          </p>
        </div>

        {/* quadrant legend */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {bands.map((q) => (
            <div key={q.id} className="border border-white/10 bg-white/2 p-3">
              <div className="font-mono text-[10px] tracking-[0.2em] text-volt">
                {q.code}
              </div>
              <div className="mt-1 font-heading text-xs font-semibold uppercase text-white">
                {q.name}
              </div>
              <div className="mt-1 font-body text-[11px] leading-snug text-slate-text/70">
                {q.focus}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* film strip */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 lg:px-10 scrollbar-thin"
      >
        <div
          className="shrink-0"
          aria-hidden
          style={{ width: "max(0px, calc((100vw - 100%)/2))" }}
        />
        {steps.map((s) => (
          // biome-ignore lint/a11y/noStaticElementInteractions: TODO: Need to find the solution for this interactive Div
          <div
            key={s.n}
            onMouseEnter={() => setHover(s.n)}
            onMouseLeave={() => setHover(null)}
            className="group relative w-65 shrink-0 snap-start border border-white/10 bg-steel/60 p-5 transition-colors hover:border-volt"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-3xl font-bold text-white/15 transition-colors group-hover:text-volt">
                {String(s.n).padStart(2, "0")}
              </span>
              <span className="border border-white/15 px-2 py-0.5 font-mono text-[9px] tracking-wider text-slate-text">
                Q{s.q}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-sm font-semibold uppercase leading-tight text-white">
              {s.title}
            </h3>

            {/* hover reveal */}
            <div
              className={`grid transition-all duration-300 ${
                hover === s.n
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <dl className="space-y-2 border-t border-white/10 pt-3 font-body text-[11px] leading-snug">
                  <div>
                    <dt className="font-mono text-[9px] tracking-wider text-volt">
                      EXECUTIVE
                    </dt>
                    <dd className="text-slate-text">{s.exec}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] tracking-wider text-volt">
                      TECHNICAL
                    </dt>
                    <dd className="text-slate-text">{s.tech}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] tracking-wider text-volt">
                      CLIENT
                    </dt>
                    <dd className="text-slate-text">{s.client}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}
        <div
          className="shrink-0"
          aria-hidden
          style={{ width: "max(0px, calc((100vw - 100%)/2))" }}
        />
      </div>
    </section>
  );
}
