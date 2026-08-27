import { Check, Minus } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";

const tiers = [
  {
    name: "The Ignition",
    price: "R 8,500",
    period: "/month",
    tagline: "Critical + Reactive Bands · Core 15/37 Steps",
    target: "Local Pretoria SMEs needing a solid technical base.",
    rows: [
      { label: "Q1 — Critical Band (Important & Urgent)", inc: true },
      { label: "Q2 — Reactive Band (Urgent, Lower Impact)", inc: true },
      { label: "Q3 — Strategic Band (Important, Not Urgent)", inc: false },
      { label: "Q4 — Deferred Band (Last Tasks)", inc: false },
      { label: "Local SEO grid mapping (regional)", inc: true },
      { label: "Core Web Vitals remediation", inc: true },
      { label: "Schema & structured data", inc: false },
      { label: "Competitor backlink infiltration", inc: false },
      { label: "Reporting lens", inc: "Single (Client)" },
      { label: "Strategy review cadence", inc: "Monthly" },
      { label: "Implementation by Mogen", inc: "Specifications only" },
      { label: "Priority response channel", inc: false },
    ],
  },
  {
    name: "The Scale",
    price: "R 16,500",
    period: "/month",
    tagline: "All 4 Bands + All 37 Steps",
    target: "Competitive national firms operating out of Gauteng.",
    rows: [
      { label: "Q1 — Critical Band (Important & Urgent)", inc: true },
      { label: "Q2 — Reactive Band (Urgent, Lower Impact)", inc: true },
      { label: "Q3 — Strategic Band (Important, Not Urgent)", inc: true },
      { label: "Q4 — Deferred Band (Last Tasks)", inc: false },
      { label: "Local SEO grid mapping (regional)", inc: true },
      { label: "Core Web Vitals remediation", inc: true },
      { label: "Schema & structured data", inc: true },
      { label: "Competitor backlink infiltration", inc: true },
      { label: "Reporting lens", inc: "Double (Exec / Client)" },
      { label: "Strategy review cadence", inc: "Bi-weekly" },
      { label: "Implementation by Mogen", inc: true },
      { label: "Priority response channel", inc: false },
    ],
  },
  {
    name: "The Dominance",
    price: "R 32,000",
    period: "/month",
    tagline: "Aggressive Remedy + Executive Briefs + Infiltration",
    target: "Enterprise-level entities and e-commerce giants.",
    rows: [
      { label: "Q1 — Critical Band (Important & Urgent)", inc: true },
      { label: "Q2 — Reactive Band (Urgent, Lower Impact)", inc: true },
      { label: "Q3 — Strategic Band (Important, Not Urgent)", inc: true },
      { label: "Q4 — Deferred Band (Last Tasks)", inc: true },
      { label: "Local SEO grid mapping (regional + national)", inc: true },
      { label: "Core Web Vitals remediation", inc: true },
      { label: "Schema & structured data", inc: true },
      { label: "Competitor backlink infiltration", inc: true },
      {
        label: "Reporting lens",
        inc: "Triple (Exec / Client / Custom)",
      },
      { label: "Strategy review cadence", inc: "Bi-weekly exec briefs" },
      { label: "Implementation by Mogen", inc: "Dedicated squad" },
      { label: "Priority response channel", inc: true },
    ],
  },
];

const Cell = ({ v }: { v: boolean | string }) => {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-volt" />;
  if (v === false)
    return <Minus className="mx-auto h-4 w-4 text-slate-text/30" />;
  return <span className="font-mono text-[11px] text-slate-text">{v}</span>;
};

export default function ServiceDetails() {
  return (
    <SiteLayout>
      <PageHero
        index="SERVICE DETAILS"
        title="Exactly what each tier buys"
        subtitle="A side-by-side breakdown of every deliverable across the three tiers — so you know precisely what is included before you engage."
      />
      <section className="relative bg-obsidian py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* tier header cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`border p-6 ${t.name === "The Scale" ? "border-volt bg-steel/70" : "border-white/12 bg-steel/40"}`}
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-slate-text/70">
                  {t.tagline}
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase text-white">
                  {t.name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-heading text-3xl font-bold text-white">
                    {t.price}
                  </span>
                  <span className="mb-1 font-mono text-xs text-slate-text">
                    {t.period}
                  </span>
                </div>
                <p className="mt-2 font-body text-xs text-slate-text/80">
                  {t.target}
                </p>
                <Link
                  href="/contact"
                  className={`mt-5 inline-flex w-full items-center justify-center px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                    t.name === "The Scale"
                      ? "bg-volt text-obsidian"
                      : "border border-white/25 text-white hover:border-volt hover:text-volt"
                  }`}
                >
                  Engage {t.name}
                </Link>
              </div>
            ))}
          </div>

          {/* comparison table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-160 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left font-mono text-[10px] tracking-[0.2em] text-slate-text">
                    DELIVERABLE
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className="p-4 text-center font-heading text-xs font-bold uppercase text-white"
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tiers[0].rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className="border-b border-white/5 hover:bg-white/2"
                  >
                    <td className="p-4 font-body text-xs text-slate-text">
                      {r.label}
                    </td>
                    {tiers.map((t) => (
                      <td key={t.name} className="p-4 text-center">
                        <Cell v={t.rows[i].inc} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-mono text-[10px] tracking-wider text-slate-text/50">
            {
              "// All tiers include the 37-step onboarding audit. Month-to-month, cancel anytime. Prices ex VAT."
            }
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
