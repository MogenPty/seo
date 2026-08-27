import BlueprintFooter from "@/components/mogen/blueprint-footer";
import Hero from "@/components/mogen/hero";
import Nav from "@/components/mogen/nav";
import PersonaReporting from "@/components/mogen/persona-reporting";
import PricingTiers from "@/components/mogen/pricing-tiers";
import QuadrantCursor from "@/components/mogen/quadrant-cursor";
import StepCounter from "@/components/mogen/step-counter";
import StepVisualizer from "@/components/mogen/step-visualizer";

export default function Home() {
  return (
    <div className="relative bg-obsidian text-white">
      <QuadrantCursor />
      <StepCounter />
      <Nav />
      <main>
        <Hero />
        <section id={"framework"} />
        <StepVisualizer />
        <PersonaReporting />
        <PricingTiers />
        <BlueprintFooter />
      </main>
    </div>
  );
}
