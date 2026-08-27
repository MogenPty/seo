"use client";

import { Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Mogen's audit was the first SEO report our board actually read. The executive lens translated technical work into revenue terms — we approved the retainer on the spot.",
    name: "Operations Director",
    company: "Home-improvement retailer · Pretoria East",
    metric: "+R 3.8M organic revenue / yr",
  },
  {
    quote:
      "Their engineers found indexation failures three previous agencies missed. Within two months our product pages were ranking and converting.",
    name: "Head of E-commerce",
    company: "National fashion retailer",
    metric: "+3,100 indexed pages",
  },
  {
    quote:
      "The triple-lens reporting ended the constant 'what does this mean?' meetings. My technical team trusts the data; my CEO trusts the numbers.",
    name: "Marketing Lead",
    company: "B2B SaaS · Gauteng",
    metric: "+184 commercial keywords",
  },
  {
    quote:
      "We went from absent on Google Maps to top-three across nine Pretoria suburbs. The local grid mapping is genuinely best-in-class.",
    name: "Franchise Owner",
    company: "Multi-location services",
    metric: "Top 3 · 9 suburbs",
  },
  {
    quote:
      "What I value most is the honesty. They told us what wouldn't work before we spent on it — that saved us more than the retainer costs.",
    name: "Managing Partner",
    company: "Specialist legal practice · Centurion",
    metric: "+96% qualified enquiries",
  },
  {
    quote:
      "The 37-step framework isn't marketing — it's engineering. Our Core Web Vitals went green and stayed green. Conversions followed.",
    name: "CTO",
    company: "Logistics software firm",
    metric: "LCP 1.1s · +143% conversions",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-obsidian py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col border border-white/10 bg-steel/40 p-7"
            >
              <Quote className="h-6 w-6 text-volt" />
              <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-slate-text">
                {t.quote}
              </blockquote>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-mono text-[11px] font-bold text-volt">
                  {t.metric}
                </div>
                <figcaption className="mt-2">
                  <div className="font-heading text-xs font-semibold uppercase text-white">
                    {t.name}
                  </div>
                  <div className="font-body text-[11px] text-slate-text/70">
                    {t.company}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <div className="mt-12 border border-white/10 bg-steel/40 p-8 text-center">
          <p className="font-body text-sm text-slate-text">
            Ready to add your results to this page?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-3 bg-volt px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-transform hover:scale-[1.02]"
          >
            Start your engagement
          </Link>
        </div>
      </div>
    </section>
  );
}
