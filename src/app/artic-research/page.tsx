import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArticResearchHeroSection } from "@/components/sections/artic-research-hero-section";
import { ArticResearchIntroSection } from "@/components/sections/artic-research-intro-section";
import { ArticResearchFeaturedSection } from "@/components/sections/artic-research-featured-section";
import { ArticResearchOffersSection } from "@/components/sections/artic-research-offers-section";
import { ArticResearchHowWeWorkSection } from "@/components/sections/artic-research-how-we-work-section";
import { ArticResearchWhatYouGetSection } from "@/components/sections/artic-research-what-you-get-section";
import { ArticResearchPortfolioSection } from "@/components/sections/artic-research-portfolio-section";
import { JsonLd } from "@/components/common/json-ld";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Artic Research",
  description:
    "Through Artic Research, we explore what people think, feel, and need — turning voices into clear insights that lead to better actions.",
  alternates: {
    canonical: "/artic-research",
  },
  openGraph: {
    title: "Artic Research | Artic Analytica",
    description:
      "Through Artic Research, we explore what people think, feel, and need — turning voices into clear insights that lead to better actions.",
    url: "/artic-research",
  },
  twitter: {
    title: "Artic Research | Artic Analytica",
    description:
      "Through Artic Research, we explore what people think, feel, and need — turning voices into clear insights that lead to better actions.",
  },
};

export default function ArticResearchPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Artic Research",
          description:
            "We explore what people think, feel, and need — turning voices into clear insights that lead to better actions.",
          provider: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          url: `${SITE_CONFIG.url}/artic-research`,
        }}
      />
      <Navbar />
      <main>
        <ArticResearchHeroSection />
        <ArticResearchIntroSection />
        <ArticResearchFeaturedSection />
        <ArticResearchOffersSection />
        <ArticResearchHowWeWorkSection />
        <ArticResearchWhatYouGetSection />
        <ArticResearchPortfolioSection />
      </main>
      <Footer />
    </>
  );
}
