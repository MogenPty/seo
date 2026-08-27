"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

// To use if the NextJS Image doesn't work as well
// import { Image } from "@/components/ui/image";

const DATA_IMG =
  "https://media.base44.com/images/public/6a8edbb6af7b7087867d9d96/f97cc1484_generated_2435c9d1.png";

const lenses = [
  { key: "exec", label: "Executive View", tag: "ROI / GROWTH" },
  { key: "tech", label: "Technical View", tag: "CODE / VITALS" },
  { key: "client", label: "Client View", tag: "PLAIN LANGUAGE" },
];

const content = {
  exec: {
    headline: "Revenue-grade outcomes, board-ready.",
    body: "Organic sessions converted to pipeline value, ranked against acquisition cost. No vanity metrics — only the numbers that move the business.",
    metrics: [
      { k: "Organic Revenue", v: "R 1.42M", d: "+38% QoQ" },
      { k: "Cost / Organic Lead", v: "R 214", d: "-27%" },
      { k: "Pipeline Influenced", v: "R 3.1M", d: "+52%" },
      { k: "Market Share (Pretoria)", v: "31%", d: "+9 pts" },
    ],
  },
  tech: {
    headline: "Engineering-grade diagnostics.",
    body: "Schema validation, Core Web Vitals field data, render-budget maps and crawl-path graphs — the raw signals that govern indexation and rank.",
    metrics: [
      { k: "LCP (p75)", v: "1.2s", d: "-0.8s" },
      { k: "INP (p75)", v: "112ms", d: "-44ms" },
      { k: "Valid Schema Nodes", v: "1,840", d: "+1,204" },
      { k: "Orphan URLs", v: "0", d: "-318" },
    ],
  },
  client: {
    headline: "Progress you can actually read.",
    body: "Plain-language status, what we fixed this month, and what it means for your customers. SEO stops being a black box.",
    metrics: [
      { k: "Status", v: "On Track", d: "Green" },
      { k: "Pages Fixed", v: "47", d: "this month" },
      { k: "Local Rank (Maps)", v: "Top 3", d: "Pretoria CBD" },
      { k: "Next Milestone", v: "Double traffic", d: "by Q4" },
    ],
  },
};

export default function PersonaReporting() {
  const [active, setActive] = useState("exec");

  const data = content[active];

  return (
    <section
      id={"reporting"}
      className="relative overflow-hidden bg-obsidian py-24"
    >
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// 03 — REASSURANCE"}
          </span>
          <h2 className="mt-3 max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Triple-Lens Persona Reporting
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-slate-text">
            One framework, three audiences. Switch the sample dashboard to see
            how the same data is translated for each stakeholder — eliminating
            the &ldquo;SEO is a black box&rdquo; fear.
          </p>
        </div>

        {/* lens toggle */}
        <div className="mb-8 flex flex-wrap gap-2">
          {lenses.map((l) => (
            <Button
              key={l.key}
              onClick={() => setActive(l.key)}
              className={`group flex items-center gap-3 border px-5 py-3 transition-colors ${
                active === l.key
                  ? "border-volt bg-volt text-obsidian"
                  : "border-white/15 text-slate-text hover:border-white/40 hover:text-white"
              }`}
            >
              <span className="font-mono text-[9px] tracking-[0.2em] opacity-70">
                {l.tag}
              </span>
              <span className="font-heading text-xs font-bold uppercase tracking-wider">
                {l.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* dashboard mock */}
          <div className="relative lg:col-span-3 border border-white/10 bg-steel/60 p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-volt" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-text">
                  DASHBOARD · {active.toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-text/60">
                LIVE · PRETORIA
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.metrics.map((m) => (
                <div
                  key={m.k}
                  className="border border-white/10 bg-obsidian/60 p-4"
                >
                  <div className="font-mono text-[9px] tracking-[0.2em] text-slate-text/70">
                    {m.k}
                  </div>
                  <div className="mt-2 font-heading text-2xl font-bold text-white">
                    {m.v}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-volt">
                    {m.d}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex h-20 items-end gap-1.5">
              {[40, 55, 48, 70, 62, 85, 78, 96, 88, 100].map((h) => (
                <div
                  key={h}
                  className="flex-1 bg-linear-to-t from-volt/30 to-volt"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* narrative + image */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="relative aspect-4/3 overflow-hidden border border-white/10">
              <Image
                src={DATA_IMG}
                alt="Abstract data transforming from chaos to an ordered glowing grid"
                className="h-full w-full"
                fill={true}
                // fittingType="fill"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-transparent to-transparent" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase leading-tight text-white">
                {data.headline}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-text">
                {data.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
