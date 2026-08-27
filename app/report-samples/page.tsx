import PageHero from "@/components/mogen/page-hero";
import ReportSamplesSection from "@/components/mogen/report-samples-section";
import SiteLayout from "@/components/mogen/site-layout";

export default function ReportSamples() {
  return (
    <SiteLayout>
      <PageHero
        index="REPORT SAMPLES"
        title="The depth of a Mogen audit, on display"
        subtitle="Sample report outputs for executives and technical staff. Each lens is drawn from the same audited dataset — demonstrating how one framework speaks to every audience."
      />
      <ReportSamplesSection />
    </SiteLayout>
  );
}
