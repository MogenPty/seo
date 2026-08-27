import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seo.mogen.co.za";

export const metadata: Metadata = {
  title: {
    default: "Mogen SEO — 37 Steps to Technical Inevitability",
    template: "%s | Mogen SEO",
  },
  description:
    "Mogen SEO — a proprietary 37-step, 4-band SEO framework engineered for the Pretoria market. Forensic reporting for executives, engineers, and clients.",
  authors: [{ name: "Mogen Pty Ltd" }],
  creator: "Mogen Pty Ltd",
  publisher: "Mogen Pty Ltd",
  metadataBase: new URL(siteUrl),
  openGraph: {
    url: siteUrl,
    siteName: "MOGEN",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MogenPty",
    creator: "@MogenPty",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        spaceGroteskHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
