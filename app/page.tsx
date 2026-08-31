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
        {/* Fixed Floating Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1 w-full overflow-hidden">
          {/* Scene 01: Hero Arrival */}
          <Hero />

          {/* Scene 02: Heritage & MD Philosophy */}
          <Heritage />

          {/* Scene 03: Curated Room Collections */}
          <CuratedCollections />

          {/* Scene 04: Signature Showcase with Interactive Hotspots & Finish Switcher */}
          <SignatureShowcase />

          {/* Scene 05: Bespoke Customization Studio & Interactive Configurator */}
          <BespokeStudio />

          {/* Scene 06: Materials & Master Joinery Standards */}
          <MaterialsCraft />

          {/* Scene 07: Agrabad Access Road Flagship Showroom Guide */}
          <ShowroomGuide />

          {/* Scene 08: Direct Consultation & Inquiry Dispatch */}
          <ConsultationSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Concierge Button */}
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  );
}
