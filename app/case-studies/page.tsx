import Link from "next/link";

import CaseStudy from "@/components/mogen/case-study";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";
import type { CaseStudy as Case } from "@/types/case-study";

const cases: Case[] = [
  {
    sector: "Retail · Pretoria East",
    client: "A 14-store home-improvement chain",
    challenge:
      "Stagnant organic traffic despite a large product catalogue; local pack absent across Pretoria.",
    bands: "Q1 + Q3",
    results: [
      { k: "Organic sessions", v: "+212%" },
      { k: "Maps pack visibility", v: "Top 3 · 9 suburbs" },
      { k: "Organic revenue", v: "+R 3.8M / yr" },
    ],
  },
  {
    sector: "B2B SaaS · Gauteng",
    client: "A national logistics software firm",
    challenge:
      "High-intent commercial keywords owned by three competitors; thin technical content.",
    bands: "Q2 + Q4",
    results: [
      { k: "Commercial keywords", v: "+184 ranked" },
      { k: "Demo requests", v: "+67%" },
      { k: "Pipeline influenced", v: "R 5.2M" },
    ],
  },
  {
    sector: "E-commerce · National",
    client: "An online fashion retailer",
    challenge:
      "Slow mobile experience and crawl-budget waste suppressing indexation of 4,000+ SKUs.",
    bands: "Q1 + Q4",
    results: [
      { k: "Indexed product pages", v: "+3,100" },
      { k: "LCP (p75)", v: "1.1s" },
      { k: "Organic conversions", v: "+143%" },
    ],
  },
  {
    sector: "Professional services · Centurion",
    client: "A specialist legal practice",
    challenge:
      "Zero presence for high-value practice-area searches; no structured data.",
    bands: "Q2 + Q3",
    results: [
      { k: "Top-10 practice terms", v: "22 of 30" },
      { k: "Qualified enquiries", v: "+96%" },
      { k: "Cost per enquiry", v: "-41%" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <SiteLayout>
      <PageHero
        index="CASE STUDIES"
        title="Results engineered, not promised"
        subtitle="A selection of outcomes delivered through the Mogen 37-step framework across Pretoria and the wider Gauteng market."
      />
      <section className="relative bg-obsidian py-16">
        <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-10">
          {cases.map((c) => (
            <CaseStudy caseStudy={c} key={c.client} />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-10">
          <div className="border border-white/10 bg-steel/40 p-8 text-center">
            <p className="font-body text-sm text-slate-text">
              Want your sector mapped against these outcomes?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-3 bg-volt px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.02]"
            >
              Request a sector teardown
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
