import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Heritage } from "@/components/Heritage";
import { CuratedCollections } from "@/components/CuratedCollections";
import { SignatureShowcase } from "@/components/SignatureShowcase";
import { BespokeStudio } from "@/components/BespokeStudio";
import { MaterialsCraft } from "@/components/MaterialsCraft";
import { ShowroomGuide } from "@/components/ShowroomGuide";
import { BrandStatement } from "@/components/BrandStatement";
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
          {/* 01 — Immersive Hero: Brand + Furniture + Atmosphere */}
          <Hero />

          {/* 02 — Heritage & Philosophy: Brand introduction */}
          <Heritage />

          {/* 03 — Curated Collections: Interactive furniture discovery */}
          <CuratedCollections />

          {/* 04 — Signature Showcase: Interactive craftsmanship detail */}
          <SignatureShowcase />

          {/* 05 — Bespoke Studio: Custom commission configurator */}
          <BespokeStudio />

          {/* 06 — Materials & Craft: Quality and standards */}
          <MaterialsCraft />

          {/* 07 — Showroom Guide: Flagship experience */}
          <ShowroomGuide />

          {/* 08 — Brand Statement: Editorial typography moment */}
          <BrandStatement />

          {/* 09 — Consultation: Contact and booking */}
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
