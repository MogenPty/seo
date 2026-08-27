"use client";

import { Check } from "lucide-react";

const tiers = [
  {
    name: "The Ignition",
    price: "R 8,500",
    period: "/month",
    focus: "Critical + Reactive Bands · Core 15/37 Steps",
    target: "Local Pretoria SMEs needing a solid technical base.",
    features: [
      "Q1 Critical Band — immediate fixes",
      "Q2 Reactive Band — quick wins",
      "Core 15 of 37 steps",
      "Local SEO grid mapping (Pretoria)",
      "Core Web Vitals remediation",
      "Single-persona reporting",
    ],
    highlight: false,
    cta: "Start Ignition",
  },
  {
    name: "The Scale",
    price: "R 16,500",
    period: "/month",
    focus: "All 4 Bands + All 37 Steps",
    target: "Competitive national firms operating out of Gauteng.",
    features: [
      "All 37 steps across 4 priority bands",
      "Triple-persona reporting (Exec / Tech / Client)",
      "Q3 Strategic Band — compounding work",
      "Schema & structured data engineering",
      "Competitor backlink infiltration",
      "Bi-weekly strategy review",
    ],
    highlight: true,
    cta: "Scale to Dominance",
  },
  {
    name: "The Dominance",
    price: "R 32,000",
    period: "/month",
    focus: "Aggressive Remedy + Executive Briefs + Infiltration",
    target: "Enterprise-level entities and e-commerce giants.",
    features: [
      "Everything in Scale, accelerated",
      "Bi-weekly executive briefs",
      "Dedicated remedy implementation team",
      "Competitor infiltration analysis",
      "Custom attribution & GA4 modeling",
      "Priority Slack-style channel",
    ],
    highlight: false,
    cta: "Claim Dominance",
  },
];

export default function PricingTiers() {
  return (
    <section
      id={"tiers"}
      className="relative overflow-hidden bg-obsidian py-24"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// 04 — CONVERSION"}
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Pretoria Competitive Tiers
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-slate-text">
            Local budget agencies cluster at R1,500–R5,000/mo with shallow
            deliverables. Mogen out-positions them on technical depth — three
            tiers engineered to scale from a solid base to outright market
            dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                t.highlight
                  ? "border-volt bg-steel/80 shadow-[0_0_40px_-12px_rgba(193,255,0,0.4)]"
                  : "border-white/12 bg-steel/40"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-7 bg-volt px-3 py-1 font-mono text-[9px] font-bold tracking-[0.2em] text-obsidian">
                  RECOMMENDED
                </span>
              )}
              <div className="font-mono text-[10px] tracking-[0.2em] text-slate-text/70">
                {t.focus}
              </div>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-white">
                {t.name}
              </h3>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-heading text-4xl font-bold text-white">
                  {t.price}
                </span>
                <span className="mb-1 font-mono text-xs text-slate-text">
                  {t.period}
                </span>
              </div>
              <p className="mt-3 font-body text-xs leading-relaxed text-slate-text/80">
                {t.target}
              </p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-body text-sm text-slate-text"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                  t.highlight
                    ? "bg-volt text-obsidian"
                    : "border border-white/25 text-white hover:border-volt hover:text-volt"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-wider text-slate-text/50">
          {
            "// All tiers include the 37-step audit onboarding. Cancel anytime. Prices ex VAT."
          }
        </p>
      </div>
    </section>
  );
}
