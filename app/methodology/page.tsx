import Image from "next/image";

import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";
import { IMG } from "@/lib/mogen-images";
import { bands, steps } from "@/lib/seo-steps";

export default function Methodology() {
  return (
    <SiteLayout>
      <PageHero
        index="METHODOLOGY"
        title="The 37-step framework, deconstructed"
        subtitle="A biological-algorithmic process that scores every finding for importance and urgency, then sorts it into one of four priority bands — this is how the system identifies, sequences and solves website issues."
      />

      {/* band overview */}
      <section className="relative overflow-hidden bg-obsidian py-20">
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
              {"// THE FOUR PRIORITY BANDS"}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Sequenced by importance and urgency
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-slate-text">
              Every finding from the 37 steps is scored on two axes — importance
              (its revenue and ranking impact) and urgency (how quickly it
              erodes performance if left). Those scores sort each step into one
              of four priority bands, and the bands sequence the work: Critical
              issues are fixed immediately, Reactive quick wins follow,
              Strategic compounding work is scheduled, and Deferred hygiene is
              sequenced last.
            </p>
            <div className="mt-8 space-y-4">
              {bands.map((b) => (
                <div key={b.id} className="border-l-2 border-volt/50 pl-4">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-volt">
                    {b.code} · {b.axis}
                  </div>
                  <h3 className="mt-1 font-heading text-sm font-semibold uppercase text-white">
                    {b.name}
                  </h3>
                  <p className="mt-1 font-body text-xs leading-relaxed text-slate-text">
                    {b.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden border border-white/10">
            <Image
              src={IMG.fiber}
              alt="Glowing volt-green fiber-optic grid structure in a dark void"
              className="h-full w-full"
              fill={true}
            />
            <div className="absolute inset-0 bg-linear-to-t from-obsidian/70 to-transparent" />
          </div>
        </div>
      </section>

      {/* all 37 steps grouped */}
      <section className="relative bg-steel/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// ALL 37 STEPS"}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            The complete sequence
          </h2>
          <div className="mt-12 space-y-14">
            {bands.map((b) => (
              <div key={b.id}>
                <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-3">
                  <span className="font-mono text-sm font-bold text-volt">
                    {b.code}
                  </span>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white">
                    {b.name}
                  </h3>
                  <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-slate-text/60">
                    {b.axis}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {steps
                    .filter((s) => s.q === b.id)
                    .map((s) => (
                      <div key={s.n} className="bg-obsidian p-5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-2xl font-bold text-white/15">
                            {String(s.n).padStart(2, "0")}
                          </span>
                          <span className="font-mono text-[9px] tracking-wider text-volt">
                            {b.code}
                          </span>
                        </div>
                        <h4 className="mt-3 font-heading text-sm font-semibold uppercase leading-tight text-white">
                          {s.title}
                        </h4>
                        <p className="mt-2 font-body text-xs leading-relaxed text-slate-text">
                          {s.tech}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
