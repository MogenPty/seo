import ContactDetails from "@/components/mogen/contact-details";
import ContactForm from "@/components/mogen/contact-form";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";

export default function Contact() {
  return (
    <SiteLayout>
      <PageHero
        index="CONTACT"
        title="Speak directly with a consultant"
        subtitle="Tell us about your domain and objectives. A senior Mogen strategist will respond within one business day to scope your audit."
      />
      <section className="relative bg-obsidian py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-10">
          {/* form */}
          <ContactForm />

          {/* details */}
          <ContactDetails />
        </div>
      </section>
    </SiteLayout>
  );
}
