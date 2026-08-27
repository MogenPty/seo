"use client";

import { MapPin, Search, TrendingUp } from "lucide-react";

import type { CaseStudy as Case } from "@/types/case-study";

interface Props {
  caseStudy: Case;
}

export default function CaseStudy({ caseStudy }: Readonly<Props>) {
  return (
    <article className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
      <div className="bg-steel/50 p-7">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-volt">
          <MapPin className="h-3 w-3" /> {caseStudy.sector}
        </div>
        <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-tight text-white">
          {caseStudy.client}
        </h3>
        <p className="mt-3 font-body text-xs leading-relaxed text-slate-text">
          {caseStudy.challenge}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 border border-volt/40 px-3 py-1 font-mono text-[10px] tracking-wider text-volt">
          <Search className="h-3 w-3" /> BANDS · {caseStudy.bands}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px bg-white/10 lg:col-span-2">
        {caseStudy.results.map((r) => (
          <div key={r.k} className="bg-obsidian p-7">
            <div className="font-mono text-[9px] tracking-[0.2em] text-slate-text/70">
              {r.k}
            </div>
            <div className="mt-2 flex items-center gap-1.5 font-heading text-xl font-bold text-white">
              <TrendingUp className="h-4 w-4 text-volt" /> {r.v}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
