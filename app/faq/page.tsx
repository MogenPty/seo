import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long until the audit is delivered?",
    a: "A full 37-step audit is delivered within 10 working days of kickoff. The Ignition tier runs the Critical and Reactive bands first (5 days); Scale and Dominance run all four bands in parallel for the full 10-day window.",
  },
  {
    q: "What do you need from us to begin?",
    a: "Access to Google Search Console, Google Analytics 4, and your CMS or staging environment. For the Strategic band we also request a list of target competitors. A senior strategist runs a 30-minute scoping call before any data is touched.",
  },
  {
    q: "How are the four priority bands structured?",
    a: "Every finding is scored for importance (revenue and ranking impact) and urgency (how fast it degrades if ignored). Q1 Critical holds important and urgent issues we fix immediately. Q2 Reactive holds urgent but lower-impact quick wins. Q3 Strategic holds important but not urgent work that compounds over time. Q4 Deferred holds last-task hygiene and monitoring. The bands sequence the work so nothing critical waits behind something trivial.",
  },
  {
    q: "What does the reporting look like?",
    a: "Every engagement includes triple-lens reporting: an Executive view (ROI and growth), a Technical view (code, schema, Core Web Vitals) and a Client view (plain-language progress). You receive the lens that matches each stakeholder, all drawn from the same audited dataset.",
  },
  {
    q: "Do you implement the fixes, or just report them?",
    a: "All tiers include diagnosis and prioritisation. The Scale and Dominance tiers include implementation of remedies by our engineers; Ignition flags fixes for your team with clear specifications. Dominance adds a dedicated implementation squad and bi-weekly executive briefs.",
  },
  {
    q: "How quickly will I see results?",
    a: "Critical and Reactive band fixes typically surface in 4–8 weeks. Strategic band gains compound over 3–6 months. We set explicit milestones at kickoff so expectations are tied to the framework's bands, not vague promises.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. All tiers are month-to-month. The 37-step onboarding audit is included in every tier, and you own all data, reports and strategy documentation produced during the engagement.",
  },
  {
    q: "Can you work with our existing marketing team or agency?",
    a: "Yes. Mogen frequently operates alongside in-house teams or partner agencies. We also offer a white-label partnership program for agencies wishing to license the framework — see the Partnerships page.",
  },
  {
    q: "Do you work outside Pretoria?",
    a: "The framework was built for the Pretoria market but is deployed nationally across South Africa. Local-grid mapping is calibrated to your specific service areas, not a generic template.",
  },
  {
    q: "What happens if a recommended fix breaks something?",
    a: "Every remedy is staged and validated against your staging environment before release. Dominance-tier clients receive rollback protocols and a priority response channel. We measure, we don't gamble.",
  },
];

export default function FAQ() {
  return (
    <SiteLayout>
      <PageHero
        index="FAQ"
        title="Questions, answered precisely"
        subtitle="Common questions about audit delivery, the four priority bands, and what to expect once you engage Mogen."
      />
      <section className="relative bg-obsidian py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Accordion
            type="single"
            collapsible
            className="border border-white/10"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-white/10 px-6 last:border-b-0"
              >
                <AccordionTrigger className="text-left font-heading text-sm font-semibold uppercase tracking-wide text-white hover:text-volt hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-slate-text">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}
