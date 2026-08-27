import Image from "next/image";

import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";
import { IMG } from "@/lib/mogen-images";

const timeline = [
  {
    year: "2016",
    title: "The First Band",
    body: "Mogen's founders — a search engineer and a conversion analyst — codify the first priority band: Critical issues, fixed immediately, while consulting for Pretoria retailers.",
  },
  {
    year: "2019",
    title: "Four-Band Synthesis",
    body: "The remaining three bands — Reactive, Strategic and Deferred — are formalised, sorting every finding by importance and urgency into the model that became the framework's signature.",
  },
  {
    year: "2021",
    title: "The 37 Steps",
    body: "Hundreds of audits distilled into a repeatable 37-step sequence, each step mapped to executive, technical and client value propositions.",
  },
  {
    year: "2024",
    title: "Triple-Lens Reporting",
    body: "The reporting layer is rebuilt to translate one dataset into three audiences, killing the 'black box' complaint across the Gauteng market.",
  },
];

const team = [
  {
    role: "Search Engineers",
    count: "06",
    focus: "Crawl, render & schema diagnostics",
  },
  {
    role: "Content Strategists",
    count: "04",
    focus: "Intent mapping & semantic clusters",
  },
  {
    role: "Authority Analysts",
    count: "03",
    focus: "Link forensics & local grids",
  },
  {
    role: "Performance Engineers",
    count: "05",
    focus: "Core Web Vitals & conversion paths",
  },
];

export default function About() {
  return (
    <SiteLayout>
      <PageHero
        index="ABOUT MOGEN"
        title="The architects behind the 37-step framework"
        subtitle="Mogen was founded in Pretoria to make SEO a measurable engineering discipline — not a black box. Here is how the framework came to be, and the expertise that holds it together."
      />

      {/* origin */}
      <section className="relative overflow-hidden bg-obsidian py-20">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
              {"// ORIGIN"}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              From chaos to a blueprint
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-slate-text">
              Mogen began when two practitioners grew tired of SEO reports that
              obscured more than they revealed. They believed a website&rsquo;s
              search performance could be engineered with the same rigour as a
              building&rsquo;s structure — every load-bearing element measured,
              every weakness located, every remedy specified.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-text">
              That conviction became the 37-step framework: a
              biological-algorithmic process that diagnoses, prioritises and
              remedies. Today it powers organic growth for SMEs, national firms
              and enterprises across Gauteng and beyond.
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden border border-white/10">
            <Image
              src={IMG.panel}
              alt="Etched glass and anodized aluminum panel with engraved grid"
              className="h-full w-full"
              fill={true}
            />
            <div className="absolute inset-0 bg-linear-to-t from-obsidian/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="relative bg-steel/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// EVOLUTION"}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            The framework, over time
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t) => (
              <div key={t.year} className="bg-obsidian p-6">
                <div className="font-mono text-2xl font-bold text-volt">
                  {t.year}
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold uppercase text-white">
                  {t.title}
                </h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-slate-text">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="relative bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// EXPERTISE"}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            The team behind the rigour
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.role} className="bg-steel/40 p-6">
                <div className="font-mono text-3xl font-bold text-white/20">
                  {t.count}
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold uppercase text-white">
                  {t.role}
                </h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-slate-text">
                  {t.focus}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-slate-text">
            Every engagement is staffed by specialists across all four quadrants
            — no generalists guessing at technical depth. It is why the
            framework&rsquo;s remedies hold, and why its reports survive
            scrutiny from executives and engineers alike.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
