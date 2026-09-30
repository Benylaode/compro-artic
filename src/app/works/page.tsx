import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WorksHeroSection } from "@/components/sections/works-hero-section";
import { HighlightSection } from "@/components/sections/highlight-section";
import { Container } from "@/components/layout/container";
import { WorksPortfolioSection } from "@/components/sections/works-portfolio-section";

export const metadata: Metadata = {
  title: "Our Works",
  description:
    "Explore Artic Analytica's research, data analysis, and consulting projects that drive real impact for governments, businesses, and organizations.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Our Works | Artic Analytica",
    description:
      "Explore Artic Analytica's research, data analysis, and consulting projects that drive real impact for governments, businesses, and organizations.",
    url: "/works",
  },
  twitter: {
    title: "Our Works | Artic Analytica",
    description:
      "Explore Artic Analytica's research, data analysis, and consulting projects that drive real impact for governments, businesses, and organizations.",
  },
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorksHeroSection />

        {/* Section heading above highlight slider */}
        <section className="bg-white pt-16 pb-12">
          <Container>
            <h2 className="text-headline-h4 text-artic-ebony">
              How We Build Value Through Research
            </h2>
          </Container>
        </section>

        <HighlightSection />
        <WorksPortfolioSection />
      </main>
      <Footer />
    </>
  );
}
