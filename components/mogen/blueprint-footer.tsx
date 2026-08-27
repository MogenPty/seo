"use client";

import Link from "next/link";

const sitemap = [
  {
    group: "Framework",
    links: [
      { label: "Methodology", to: "/methodology" },
      { label: "Process Flow", to: "/process" },
      { label: "SEO Glossary", to: "/glossary" },
      { label: "Executive Summary", to: "/executive-summary" },
    ],
  },
  {
    group: "Proof",
    links: [
      { label: "Case Studies", to: "/case-studies" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Report Samples", to: "/report-samples" },
    ],
  },
  {
    group: "Engage",
    links: [
      { label: "Service Details", to: "/service-details" },
      { label: "About Mogen", to: "/about" },
      { label: "Partnerships", to: "/partnerships" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const blueprintNodes = [
  { label: "Methodology", to: "/methodology" },
  { label: "Reporting", to: "/report-samples" },
  { label: "Tiers", to: "/service-details" },
  { label: "Audit", to: "/contact" },
  { label: "Mogen", to: "/about" },
];

export default function BlueprintFooter() {
  return (
    <footer
      id={"audit"}
      className="relative overflow-hidden border-t border-white/10 bg-obsidian pt-24"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />

      {/* audit CTA block */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border border-white/10 bg-steel/40 p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
              {"// INITIATE"}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Begin Your Framework Audit
            </h2>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-slate-text">
              A senior Mogen strategist will run the opening quadrant
              diagnostics on your domain and return a board-ready teardown — no
              obligation.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                placeholder="Company"
                className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
              />
              <input
                placeholder="Domain"
                className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Work email"
              className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white placeholder:text-slate-text/50 focus:border-volt focus:outline-none"
            />
            <select className="border border-white/15 bg-obsidian/60 px-4 py-3 font-body text-sm text-white focus:border-volt focus:outline-none">
              <option className="bg-obsidian">
                Select a tier — Ignition / Scale / Dominance
              </option>
              <option className="bg-obsidian">The Ignition — R8,500/mo</option>
              <option className="bg-obsidian">The Scale — R16,500/mo</option>
              <option className="bg-obsidian">
                The Dominance — R32,000/mo
              </option>
            </select>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-3 bg-volt px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.01]"
            >
              Initiate Framework Audit
              <span className="h-2 w-2 bg-obsidian" />
            </button>
          </form>
        </div>
      </div>

      {/* sitemap */}
      <div className="relative mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {sitemap.map((col) => (
            <div key={col.group}>
              <h4 className="font-mono text-[10px] tracking-[0.25em] text-volt">
                {col.group.toUpperCase()}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className="font-body text-sm text-slate-text transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* blueprint wireframe */}
        <div className="mt-14">
          <svg viewBox="0 0 1000 120" className="w-full">
            <title>Blueprint Wireframe</title>
            <line
              x1="0"
              y1="60"
              x2="1000"
              y2="60"
              stroke="#C1FF00"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.4"
            />
            <line
              x1="500"
              y1="0"
              x2="500"
              y2="120"
              stroke="#C1FF00"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.25"
            />
            {blueprintNodes.map((n, i) => {
              const x = 100 + i * 200;
              return (
                <g key={n.label}>
                  <line
                    x1={x}
                    y1="60"
                    x2={x}
                    y2="30"
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                  />
                  <circle cx={x} cy="60" r="5" fill="#C1FF00" />
                  <circle
                    cx={x}
                    cy="60"
                    r="12"
                    fill="none"
                    stroke="#C1FF00"
                    strokeOpacity="0.4"
                  />
                </g>
              );
            })}
          </svg>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {blueprintNodes.map((n) => (
              <Link
                key={n.label}
                href={n.to}
                className="font-mono text-[11px] tracking-wider text-slate-text transition-colors hover:text-volt"
              >
                ↳ {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center border border-volt font-mono text-xs font-bold text-volt">
              M
            </span>
            <span className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white">
              Mogen<span className="text-volt">/</span>SEO
            </span>
          </div>
          <p className="font-mono text-[10px] tracking-wider text-slate-text/50">
            seo.mogen.co.za · Pretoria · Gauteng · ZA · ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
