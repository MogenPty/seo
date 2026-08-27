import Link from "next/link";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";

const phases = [
  {
    n: "01",
    title: "Scoping Call",
    duration: "Day 0",
    body: "A 30-minute call with a senior strategist to confirm objectives, competitors, target geographies and access to Search Console, GA4 and your CMS.",
  },
  {
    n: "02",
    title: "Data Acquisition",
    duration: "Day 1–2",
    body: "We ingest crawl data, analytics, server logs and backlink profiles. Access is scoped to the minimum required; nothing leaves your environment without authorisation.",
  },
  {
    n: "03",
    title: "37-Step Audit",
    duration: "Day 2–8",
    body: "All four priority bands are scored in parallel. Each of the 37 steps produces a finding, an importance score, an urgency score and a prescribed remedy.",
  },
  {
    n: "04",
    title: "Priority Sorting",
    duration: "Day 8–9",
    body: "Findings are sorted by importance and urgency into the four bands — Critical first, then Reactive, Strategic and Deferred — and ranked by revenue impact.",
  },
  {
    n: "05",
    title: "Strategy & Roadmap",
    duration: "Day 9–10",
    body: "A phased remedy roadmap is built, mapped to your tier and cadence. You receive the triple-lens report set and a walkthrough session.",
  },
  {
    n: "06",
    title: "Delivery & Implementation",
    duration: "Ongoing",
    body: "Scale and Dominance tiers implement remedies; Ignition hands specifications to your team. Reporting continues on your agreed cadence with live dashboards.",
  },
];

export default function Process() {
  return (
    <SiteLayout>
      <PageHero
        index="PROCESS FLOW"
        title="From audit request to delivered findings"
        subtitle="The step-by-step engagement process — transparent, timed and tied to milestones. You always know what is happening and why."
      />
      <section className="relative bg-obsidian py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <ol className="relative border-l border-white/15">
            {phases.map((p) => (
              <li key={p.n} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-2.25 mt-1 h-4 w-4 border-2 border-volt bg-obsidian" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-2xl font-bold text-volt">
                    {p.n}
                  </span>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  <span className="ml-auto font-mono text-[10px] tracking-wider text-slate-text/60">
                    {p.duration}
                  </span>
                </div>
                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-slate-text">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12 border border-white/10 bg-steel/40 p-8 text-center">
            <p className="font-body text-sm text-slate-text">
              Ready to start at Day 0?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-3 bg-volt px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.02]"
            >
              Book the scoping call
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
