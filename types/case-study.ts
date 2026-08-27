export interface CaseStudy {
  sector: string;
  client: string;
  challenge: string;
  bands: string;
  results: {
    k: string;
    v: string;
  }[];
}
