import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";
import TestimonialsSection from "@/components/mogen/testimonials-section";

export default function Testimonials() {
  return (
    <SiteLayout>
      <PageHero
        index="TESTIMONIALS"
        title="What clients say after the framework"
        subtitle="Feedback and verified results from businesses across Pretoria and Gauteng who have run the Mogen 37-step framework."
      />
      <TestimonialsSection />
    </SiteLayout>
  );
}
