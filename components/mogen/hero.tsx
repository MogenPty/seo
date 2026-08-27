"use client";

import { useRef, useState } from "react";
import { bands } from "@/lib/seo-steps";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: { clientX: number; clientY: number }) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 14 });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section
      id={"top"}
      className="relative flex min-h-screen items-center overflow-hidden bg-obsidian"
    >
      {/* grid backdrop */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(193,255,0,0.08),transparent_55%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-2 lg:px-10">
        {/* copy */}
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 border border-white/15 px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-slate-text">
            <span className="h-1.5 w-1.5 bg-volt" /> PRETORIA · GAUTENG · ZA
          </span>
          <h1 className="font-heading text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            37 Steps to
            <br />
            <span className="text-volt">Technical</span>
            <br />
            Inevitability
          </h1>
          <p className="max-w-md font-body text-base leading-relaxed text-slate-text">
            The Mogen 4-band SEO framework re-engineers digital presence through
            a proprietary biological-algorithmic process — scoring every issue
            for importance and urgency, then sequencing its remedy across four
            priority bands.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#audit"
              className="group inline-flex items-center justify-center gap-3 bg-volt px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.02]"
            >
              Initiate Framework Audit
              <span className="h-2 w-2 bg-obsidian transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#framework"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:border-volt hover:text-volt"
            >
              Explore the 37 Steps
            </a>
          </div>
          <div className="flex items-center gap-8 pt-4 font-mono text-[10px] tracking-wider text-slate-text/70">
            <div>
              <span className="text-white">37</span> STEPS
            </div>
            <div>
              <span className="text-white">04</span> BANDS
            </div>
            <div>
              <span className="text-white">03</span> REPORTING LENSES
            </div>
          </div>
        </div>

        {/* interactive quadrant */}
        {/** biome-ignore lint/a11y/noStaticElementInteractions: TODO: Should find a solution for this problem */}
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative flex aspect-square w-full items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative h-full w-full transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <title>Interactive Quadrant</title>
              {/* axes */}
              <line
                x1="200"
                y1="0"
                x2="200"
                y2="400"
                stroke="#C1FF00"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.5"
              />
              <line
                x1="0"
                y1="200"
                x2="400"
                y2="200"
                stroke="#C1FF00"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.5"
              />
              <text
                x="0"
                y="196"
                fill="#A1A1AA"
                fontSize="8"
                fontFamily="JetBrains Mono"
                letterSpacing="1"
              >
                ← IMPORTANCE
              </text>
              <text
                x="206"
                y="14"
                fill="#A1A1AA"
                fontSize="8"
                fontFamily="JetBrains Mono"
                letterSpacing="1"
              >
                URGENCY ↑
              </text>
              <circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.12"
              />
              <circle
                cx="200"
                cy="200"
                r="60"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.08"
              />
              {/* quadrant labels */}
              <text
                x="72"
                y="96"
                fill="#A1A1AA"
                fontSize="9"
                fontFamily="JetBrains Mono"
                letterSpacing="2"
              >
                Q1
              </text>
              <text
                x="330"
                y="96"
                textAnchor="end"
                fill="#A1A1AA"
                fontSize="9"
                fontFamily="JetBrains Mono"
                letterSpacing="2"
              >
                Q2
              </text>
              <text
                x="72"
                y="312"
                fill="#A1A1AA"
                fontSize="9"
                fontFamily="JetBrains Mono"
                letterSpacing="2"
              >
                Q3
              </text>
              <text
                x="330"
                y="312"
                textAnchor="end"
                fill="#A1A1AA"
                fontSize="9"
                fontFamily="JetBrains Mono"
                letterSpacing="2"
              >
                Q4
              </text>
              {/* nodes */}
              {[0, 1, 2, 3].map((i) => {
                const cx = i % 2 === 0 ? 100 : 300;
                const cy = i < 2 ? 100 : 300;
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="5" fill="#C1FF00" />
                    <circle
                      cx={cx}
                      cy={cy}
                      r="14"
                      fill="none"
                      stroke="#C1FF00"
                      strokeOpacity="0.4"
                    />
                  </g>
                );
              })}
              <circle cx="200" cy="200" r="4" fill="#fff" />
            </svg>
            {/* quadrant captions */}
            {bands.map((q, i) => {
              const pos = [
                "left-6 top-6 text-left",
                "right-6 top-6 text-right",
                "left-6 bottom-6 text-left",
                "right-6 bottom-6 text-right",
              ][i];
              return (
                <div key={q.id} className={`absolute max-w-[40%] ${pos}`}>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-volt">
                    {q.code}
                  </div>
                  <div className="mt-1 font-heading text-xs font-semibold uppercase leading-tight text-white">
                    {q.name}
                  </div>
                </div>
              );
            })}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="font-mono text-[10px] tracking-[0.3em] text-white/60">
                MOGEN
              </div>
              <div className="font-heading text-lg font-bold uppercase text-volt">
                37
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-slate-text/50">
        SCROLL TO DECONSTRUCT ↓
      </div>
    </section>
  );
}
