"use client";

import { Code2, FileText, User } from "lucide-react";

const samples = [
  {
    lens: "Executive",
    icon: FileText,
    tag: "ROI / GROWTH",
    desc: "Board-ready synthesis: organic revenue, pipeline influenced, cost-per-lead and market share — the numbers that justify the retainer.",
    metrics: [
      { k: "Organic Revenue", v: "R 1.42M" },
      { k: "Pipeline Influenced", v: "R 3.1M" },
      { k: "Market Share", v: "31%" },
    ],
  },
  {
    lens: "Technical",
    icon: Code2,
    tag: "CODE / VITALS",
    desc: "Engineering-grade diagnostics: Core Web Vitals field data, schema validation, render-budget maps and crawl-path graphs.",
    metrics: [
      { k: "LCP (p75)", v: "1.2s" },
      { k: "Valid Schema Nodes", v: "1,840" },
      { k: "Orphan URLs", v: "0" },
    ],
  },
  {
    lens: "Client",
    icon: User,
    tag: "PLAIN LANGUAGE",
    desc: "Plain-language status: what we fixed this month, what it means for customers, and the next milestone — no jargon.",
    metrics: [
      { k: "Status", v: "On Track" },
      { k: "Pages Fixed", v: "47" },
      { k: "Next Milestone", v: "2× traffic" },
    ],
  },
];

export default function ReportSamplesSection() {
  return (
    <section className="relative bg-obsidian py-16">
      <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-10">
        {samples.map((s) => (
          <article
            key={s.lens}
            className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-3"
          >
            <div className="bg-steel/50 p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center border border-volt/40 text-volt">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-slate-text/70">
                    {s.tag}
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-white">
                    {s.lens} Report
                  </h3>
                </div>
              </div>
              <p className="mt-4 font-body text-xs leading-relaxed text-slate-text">
                {s.desc}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px bg-white/10 lg:col-span-2">
              {s.metrics.map((m) => (
                <div key={m.k} className="bg-obsidian p-7">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-slate-text/70">
                    {m.k}
                  </div>
                  <div className="mt-2 font-heading text-xl font-bold text-white">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-10">
        <div className="border border-white/10 bg-steel/40 p-8">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// SAMPLE CHART · EXECUTIVE"}
          </span>
          <div className="mt-6 flex h-40 items-end gap-2">
            {[35, 48, 52, 67, 60, 78, 72, 88, 82, 95, 90, 100].map((h) => (
              <div
                key={h}
                className="flex-1 bg-linear-to-t from-volt/30 to-volt"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[9px] tracking-wider text-slate-text/60">
            <span>JAN</span>
            <span>DEC · ORGANIC SESSIONS (12-MONTH)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
