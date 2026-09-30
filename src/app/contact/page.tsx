import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Artic Analytica. Reach out for research, data consulting, strategy, or any inquiries about our services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Artic Analytica",
    description:
      "Get in touch with Artic Analytica. Reach out for research, data consulting, strategy, or any inquiries about our services.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | Artic Analytica",
    description:
      "Get in touch with Artic Analytica. Reach out for research, data consulting, strategy, or any inquiries about our services.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <Footer />
    </>
  );
}
