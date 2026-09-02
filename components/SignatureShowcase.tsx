"use client";

import Image from "next/image";
import { useState } from "react";
import { finishOptions, signatureHotspots, Hotspot, FinishOption } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { MessageSquare, Info, Sparkles } from "lucide-react";

export function SignatureShowcase() {
  const [activeFinish, setActiveFinish] = useState<FinishOption>(finishOptions[0]);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(signatureHotspots[0]);

  const customWhatsAppUrl = getWhatsAppUrl(
    `Hello Heaven Furniture Mart! I am inquiring about the Signature Classic Sovereign Suite with "${activeFinish.name}" finish.`
  );

  return (
    <section
      id="signature"
      aria-labelledby="signature-heading"
      className="relative py-20 sm:py-28 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-8 flex flex-col items-start">
            <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
              Anatomy of Master Craftsmanship
            </span>
            <h2
              id="signature-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-brass tracking-tight leading-[1.05]"
            >
              Anatomy of master{" "}
              <em className="italic text-gold-brass-light font-normal">craftsmanship.</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              Interact with the signature suite below to explore internal carpentry joinery, luxury upholstery layers, and customize your desired timber finish.
            </p>
          </div>
        </Reveal>

        {/* Master Section Card Wrapper */}
        <Reveal delay={100}>
          <div className="my-8 sm:my-10 p-6 sm:p-10 lg:p-12 glass-card-dark glossy-reflection rounded-3xl border border-gold-brass/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-charcoal-teal-dark/80 backdrop-blur-xl">
            
            {/* Immersive Split Showcase Inside Master Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Side: Interactive Visual with Hotspots */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-charcoal-teal-dark shadow-2xl border border-gold-brass/30 group">
                  <Image
                    src="/images/hero.webp"
                    alt="Heaven Furniture Mart Signature Sovereign Seating Suite"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-all duration-700"
                  />
                  
                  {/* Dynamic Finish Tint Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700 pointer-events-none mix-blend-multiply opacity-25"
                    style={{ backgroundColor: activeFinish.hex }}
                  />

                  {/* Hotspot Markers */}
                  {signatureHotspots.map((spot, idx) => {
                    const isSelected = activeHotspot?.id === spot.id;
                    return (
                      <button
                        key={spot.id}
                        type="button"
                        onClick={() => setActiveHotspot(spot)}
                        style={{ top: spot.top, left: spot.left }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group/hotspot flex items-center justify-center size-9 rounded-full cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-option-yellow text-deep-brown scale-110 shadow-lg shadow-gold-brass/50 ring-4 ring-gold-brass/40 font-bold"
                            : "glass-card-dark text-gold-brass border border-gold-brass/50 hover:bg-gold-brass hover:text-deep-brown animate-hotspot"
                        }`}
                        aria-label={`View detail: ${spot.title}`}
                        title={spot.title}
                      >
                        <Sparkles className="size-3.5" />
                      </button>
                    );
                  })}

                  {/* Floating Hotspot Detail Card Overlay */}
                  {activeHotspot && (
                    <div className="absolute bottom-4 inset-x-4 p-4 sm:p-5 glass-card-dark text-gold-brass rounded-xl border border-gold-brass/40 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[0.62rem] font-bold font-sans uppercase tracking-[0.18em] text-gold-brass-light block mb-1">
                            {activeHotspot.subtitle}
                          </span>
                          <h4 className="font-serif text-lg sm:text-xl text-gold-brass">
                            {activeHotspot.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gold-brass-light/85 font-sans font-light mt-1.5 leading-relaxed">
                            {activeHotspot.detail}
                          </p>
                        </div>
                        <span className="text-[0.65rem] font-mono font-bold text-gold-brass-light shrink-0 px-2 py-0.5 glass-tile-dark rounded-full border border-gold-brass/30">
                          Craft Spec
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Instruction Tip */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gold-brass-light/80 font-sans">
                  <Info className="size-4 text-gold-brass shrink-0" />
                  <span>Tap the numbered golden markers on the image to inspect craftsmanship details.</span>
                </div>
              </div>

              {/* Right Side: Editorial Specs & Finish Customizer Card */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 sm:p-8 glass-card-dark glossy-reflection rounded-2xl border border-gold-brass/30 shadow-xl flex flex-col gap-6">
                  
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sparkles className="size-3.5 text-gold-brass" />
                      <span className="text-[0.65rem] font-bold font-sans tracking-[0.2em] text-gold-brass uppercase">
                        Signature Masterpiece
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-gold-brass">
                      The Sovereign Seating Suite
                    </h3>
                    <p className="text-xs sm:text-sm text-gold-brass-light/80 font-sans font-light mt-1">
                      Bespoke Handcrafted Classical Living Ensemble
                    </p>
                  </div>

                  {/* Timber Finish Customizer */}
                  <div className="pt-3 border-t border-gold-brass/20">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                        Select Timber &amp; Lacquer Finish:
                      </label>
                      <span className="text-xs font-semibold text-gold-brass-light">
                        {activeFinish.name}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {finishOptions.map((finish) => {
                        const isSelected = activeFinish.id === finish.id;
                        return (
                          <button
                            key={finish.id}
                            type="button"
                            onClick={() => setActiveFinish(finish)}
                            className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "bg-option-yellow text-deep-brown font-bold ring-2 ring-gold-brass/50 shadow-md border-gold-brass/60"
                                : "glass-tile-dark border-gold-brass/25 hover:border-gold-brass/50 text-gold-brass-light"
                            }`}
                          >
                            <span
                              className="size-6 rounded-full border border-black/30 shadow-inner"
                              style={{ backgroundColor: finish.hex }}
                            />
                            <span className="text-[0.62rem] font-semibold text-center leading-tight truncate w-full">
                              {finish.name.split(" ")[0]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Finish Breakdown */}
                    <div className="mt-3 p-3 glass-tile-dark rounded-xl border border-gold-brass/25 text-xs">
                      <p className="font-semibold text-gold-brass font-sans">
                        Timber: <span className="font-normal text-gold-brass-light">{activeFinish.woodType}</span>
                      </p>
                      <p className="text-[0.7rem] text-gold-brass-light/80 font-sans mt-0.5">
                        {activeFinish.grainDescription}
                      </p>
                    </div>
                  </div>

                  {/* Specifications List */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gold-brass/20 text-xs">
                    <div className="p-2.5 glass-tile-dark rounded-xl border border-gold-brass/20">
                      <span className="text-[0.62rem] uppercase tracking-wider text-gold-brass-light/70 font-sans block">
                        Timber Seasoning
                      </span>
                      <span className="font-semibold text-gold-brass font-sans">8–12% Moisture Kiln-Dried</span>
                    </div>

                    <div className="p-2.5 glass-tile-dark rounded-xl border border-gold-brass/20">
                      <span className="text-[0.62rem] uppercase tracking-wider text-gold-brass-light/70 font-sans block">
                        Structural Warranty
                      </span>
                      <span className="font-semibold text-gold-brass font-sans">10 Years Anti-Borer</span>
                    </div>

                    <div className="p-2.5 glass-tile-dark rounded-xl border border-gold-brass/20">
                      <span className="text-[0.62rem] uppercase tracking-wider text-gold-brass-light/70 font-sans block">
                        Custom Dimensions
                      </span>
                      <span className="font-semibold text-gold-brass font-sans">Tailored to Floor Plan</span>
                    </div>

                    <div className="p-2.5 glass-tile-dark rounded-xl border border-gold-brass/20">
                      <span className="text-[0.62rem] uppercase tracking-wider text-gold-brass-light/70 font-sans block">
                        Turnkey Setup
                      </span>
                      <span className="font-semibold text-gold-brass font-sans">White-Glove Delivery</span>
                    </div>
                  </div>

                  {/* Direct Custom Action Buttons */}
                  <div className="flex flex-col gap-3 pt-3 border-t border-gold-brass/20">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 glass-cta text-charcoal-teal font-bold text-xs uppercase tracking-[0.14em] transition-all rounded-full shadow-md hover:scale-[1.02]"
                    >
                      <MessageSquare className="size-4" />
                      <span>Inquire via WhatsApp with {activeFinish.name}</span>
                    </a>

                    <a
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 glass-btn-teal text-gold-brass hover:text-gold-brass-light font-semibold text-xs uppercase tracking-[0.12em] rounded-full border border-gold-brass/40 transition-all hover:scale-[1.01]"
                    >
                      <span>Request Full Customization Brief</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
