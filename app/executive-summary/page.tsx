import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";
import { IMG } from "@/lib/mogen-images";

const impacts = [
  {
    k: "Organic Revenue",
    v: "+38%",
    d: "Median QoQ across Scale-tier clients",
  },
  { k: "Cost per Lead", v: "-27%", d: "Vs. paid acquisition channels" },
  {
    k: "Pipeline Influenced",
    v: "R 3.1M",
    d: "Attributed to organic in 12 months",
  },
  { k: "Market Share", v: "+9 pts", d: "Pretoria share-of-voice gain" },
];

export default function ExecutiveSummary() {
  return (
    <SiteLayout>
      <PageHero
        index="EXECUTIVE SUMMARY"
        title="How the framework moves revenue and authority"
        subtitle="A board-level view of the 37-step framework's commercial impact — the case for treating SEO as engineered infrastructure, not a marketing line item."
      />

      {/* narrative + image */}
      <section className="relative overflow-hidden bg-obsidian py-20">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative aspect-4/3 overflow-hidden border border-white/10">
            <Image
              src={IMG.transform}
              alt="Data transforming from chaos to an ordered glowing grid"
              className="h-full w-full"
              fill={true}
            />
            <div className="absolute inset-0 bg-linear-to-t from-obsidian/80 to-transparent" />
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
              {"// THE COMMERCIAL CASE"}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              From cost centre to compounding asset
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-slate-text">
              The 37-step framework reframes SEO as infrastructure: each remedy
              is a structural improvement that compounds. Unlike paid spend —
              which stops the moment budget pauses — engineered organic
              authority keeps producing pipeline long after the work is done.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-text">
              For executives, that means a defensible, measurable channel whose
              ROI improves over time rather than eroding. For the business, it
              means digital authority that competitors cannot buy their way
              past.
            </p>
          </div>
        </div>
      </section>

      {/* metrics */}
      <section className="relative bg-steel/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// MEASURED IMPACT"}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            The numbers that reach the board
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {impacts.map((m) => (
              <div key={m.k} className="bg-obsidian p-7">
                <div className="font-mono text-[9px] tracking-[0.2em] text-slate-text/70">
                  {m.k}
                </div>
                <div className="mt-2 font-heading text-3xl font-bold text-volt">
                  {m.v}
                </div>
                <div className="mt-2 font-body text-[11px] leading-snug text-slate-text/80">
                  {m.d}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-white/10 bg-steel/40 p-8 text-center">
            <p className="font-body text-sm text-slate-text">
              Want this summary built for your domain?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-3 bg-volt px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.02]"
            >
              Commission an executive teardown
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
