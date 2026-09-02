import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Heritage } from "@/components/Heritage";
import { CuratedCollections } from "@/components/CuratedCollections";
import { SignatureShowcase } from "@/components/SignatureShowcase";
import { BespokeStudio } from "@/components/BespokeStudio";
import { MaterialsCraft } from "@/components/MaterialsCraft";
import { ShowroomGuide } from "@/components/ShowroomGuide";
import { ConsultationSection } from "@/components/ConsultationSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen flex flex-col bg-ivory text-charcoal">
        {/* Fixed Navigation */}
        <Navbar />

        {/* Visual Story */}
        <main id="main-content" className="flex-1 w-full overflow-hidden">
          {/* Hero: Brand + Furniture + Atmosphere */}
          <Hero />

          {/* Heritage & Philosophy: Brand introduction */}
          <Heritage />

          {/* Curated Collections: Interactive furniture discovery */}
          <CuratedCollections />

          {/* Signature Showcase: Interactive craftsmanship detail */}
          <SignatureShowcase />

          {/* Bespoke Studio: Custom commission configurator */}
          <BespokeStudio />

          {/* Materials & Craft: Quality and standards */}
          <MaterialsCraft />

          {/* Showroom Guide: Flagship experience */}
          <ShowroomGuide />

          {/* Consultation: Contact and booking */}
          <ConsultationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Concierge */}
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  );
}
