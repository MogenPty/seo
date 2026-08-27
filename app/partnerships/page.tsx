import { Check } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";

const partnerTiers = [
  {
    name: "Referral Partner",
    fee: "15% recurring",
    body: "Refer clients to Mogen and earn a recurring share of their retainer. We deliver; you stay the relationship owner.",
    features: [
      "Co-branded audit handoff",
      "Quarterly performance digest for your client",
      "Partner portal access",
    ],
  },
  {
    name: "White-Label Partner",
    fee: "Tiered licensing",
    body: "License the 37-step framework and triple-lens reporting under your own brand. We operate invisibly behind your agency.",
    features: [
      "Full framework licence",
      "White-labelled triple-lens reports",
      "Dedicated delivery engineers",
      "Volume pricing on tiers",
    ],
  },
  {
    name: "Strategic Partner",
    fee: "Custom",
    body: "For agencies serving enterprise clients. Joint delivery, co-branded strategy and shared account governance.",
    features: [
      "Everything in White-Label",
      "Joint executive briefings",
      "Custom framework calibration",
      "Dedicated partnership manager",
    ],
  },
];

const benefits = [
  "Retain full client ownership — Mogen never contacts your client directly without consent.",
  "Deliver engineering-grade SEO without building an in-house technical team.",
  "Offer a differentiated, proprietary framework competitors cannot replicate.",
  "Scale capacity without scaling fixed headcount.",
];

export default function Partnerships() {
  return (
    <SiteLayout>
      <PageHero
        index="PARTNERSHIP PROGRAM"
        title="License and white-label the framework"
        subtitle="For marketing agencies that want to offer engineering-grade SEO under their own brand — without building a technical team from scratch."
      />

      {/* benefits */}
      <section className="relative bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// WHY PARTNER"}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Built for agencies
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 border border-white/10 bg-steel/40 p-5"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-volt" />
                <p className="font-body text-sm leading-relaxed text-slate-text">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tiers */}
      <section className="relative bg-steel/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-volt">
            {"// PARTNERSHIP TIERS"}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Three ways to engage
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {partnerTiers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col border border-white/12 bg-obsidian p-7"
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-volt">
                  {t.fee}
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase text-white">
                  {t.name}
                </h3>
                <p className="mt-3 font-body text-xs leading-relaxed text-slate-text">
                  {t.body}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 font-body text-xs text-slate-text"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 border border-white/25 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-volt hover:text-volt"
                >
                  Apply as {t.name}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-[10px] tracking-wider text-slate-text/50">
            {`// Partnership applications are reviewed within 5 business days.
            Minimum client-volume thresholds apply to White-Label and Strategic
            tiers.`}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
