import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { OurClientSection } from "@/components/sections/clients-section";
import { InsightSection } from "@/components/sections/insight-section";
import { HighlightSection } from "@/components/sections/highlight-section";
import { HowWeWorkSection } from "@/components/sections/how-we-work-section";
import { VideoCardSection } from "@/components/sections/video-card-section";
import { JsonLd } from "@/components/common/json-ld";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description:
    "Artic Analytica helps governments, businesses, and organizations make smarter decisions through research, data analysis, and strategy consulting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Artic Analytica helps governments, businesses, and organizations make smarter decisions through research, data analysis, and strategy consulting.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Artic Analytica helps governments, businesses, and organizations make smarter decisions through research, data analysis, and strategy consulting.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
          description: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
          isPartOf: {
            "@type": "WebSite",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HighlightSection />
        <PortfolioSection />
        <HowWeWorkSection />
        <VideoCardSection />
        <AboutSection />
        <TestimonialsSection />
        <OurClientSection />
        <InsightSection />
      </main>
      <Footer />
    </>
  );
}
