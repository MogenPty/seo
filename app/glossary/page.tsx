import GlossarySection from "@/components/mogen/glossary-section";
import PageHero from "@/components/mogen/page-hero";
import SiteLayout from "@/components/mogen/site-layout";

const terms = [
  {
    term: "Priority Band",
    def: "One of four categories (Q1-Q4) the framework sorts findings into, based on importance and urgency: Critical, Reactive, Strategic and Deferred.",
  },
  {
    term: "Canonical Tag",
    def: "An HTML element that tells search engines which version of a page is the master copy, preventing duplicate-content issues.",
  },
  {
    term: "Core Web Vitals",
    def: "Google's set of user-experience metrics — LCP (loading), INP (interactivity) and CLS (visual stability) — that influence ranking.",
  },
  {
    term: "Crawl Budget",
    def: "The number of pages a search engine will crawl on your site within a given timeframe. Wasted on low-value pages, it starves your money pages.",
  },
  {
    term: "Crawl Diagnostics",
    def: "The process of analysing how search engines crawl your site, identifying blocked, orphaned or error URLs.",
  },
  {
    term: "Domain Authority",
    def: "A comparative score predicting how well a domain will rank in search results, based largely on its backlink profile.",
  },
  {
    term: "Faceted Navigation",
    def: "Filter and sort controls (e.g. by price, colour) that generate many URL combinations — often a source of duplicate content.",
  },
  {
    term: "GBP (Google Business Profile)",
    def: "The free listing that powers Google Maps and local pack results; central to local SEO.",
  },
  {
    term: "Indexation",
    def: "Whether a page has been stored in a search engine's database. A page that isn't indexed cannot rank.",
  },
  {
    term: "INP",
    def: "Interaction to Next Paint — measures how quickly a page responds to user input. Replaced FID as a Core Web Vital.",
  },
  {
    term: "Internal Link Topology",
    def: "The structure of links between your own pages, which channels authority and guides crawlers and users.",
  },
  {
    term: "JSON-LD",
    def: "A structured-data format that helps search engines understand your content and unlock rich results.",
  },
  {
    term: "LCP",
    def: "Largest Contentful Paint — the time until the largest visible element renders. A key loading metric.",
  },
  {
    term: "Local Grid Mapping",
    def: "Tracking rankings across a grid of geographic points to visualise local search visibility.",
  },
  {
    term: "NAP Consistency",
    def: "Name, Address and Phone number being identical everywhere it appears online — a local SEO trust signal.",
  },
  {
    term: "Orphan Page",
    def: "A page with no internal links pointing to it, making it hard for crawlers and users to find.",
  },
  {
    term: "Render Budget",
    def: "The resources a search engine allocates to executing JavaScript when rendering a page.",
  },
  {
    term: "Robots.txt",
    def: "A file that instructs search engine crawlers which parts of your site they may or may not crawl.",
  },
  {
    term: "Schema",
    def: "Structured data added to pages to describe their content (e.g. product, article, FAQ) to search engines.",
  },
  {
    term: "Search Intent",
    def: "The goal behind a search query — informational, navigational, commercial or transactional.",
  },
  {
    term: "Semantic Cluster",
    def: "A group of topically related pages that collectively establish authority on a subject.",
  },
  {
    term: "SERP",
    def: "Search Engine Results Page — the listings returned for a query, including organic, paid and feature results.",
  },
  {
    term: "Sitemap (XML)",
    def: "A file listing your important pages to help search engines discover and prioritise them.",
  },
  {
    term: "TF-IDF",
    def: "Term Frequency–Inverse Document Frequency — a measure of how important a word is to a document relative to a corpus.",
  },
  {
    term: "Toxic Link",
    def: "A low-quality or spammy backlink that can harm your rankings and may need to be disavowed.",
  },
  {
    term: "White-label",
    def: "Rebranding a service or framework so it appears as though produced by the reselling agency.",
  },
];

export default function Glossary() {
  return (
    <SiteLayout>
      <PageHero
        index="SEO GLOSSARY"
        title="The technical terms, translated"
        subtitle="Plain-language definitions for the SEO terms used throughout the 37-step framework — built for non-technical clients who want to understand what they are buying."
      />
      <GlossarySection terms={terms} />
    </SiteLayout>
  );
}
