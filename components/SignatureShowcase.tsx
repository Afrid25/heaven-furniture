"use client";

import Image from "next/image";
import { useState } from "react";
import { finishOptions, signatureHotspots, Hotspot, FinishOption } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { MessageSquare, Info } from "lucide-react";

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
      className="relative py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden border-b border-stone-dark/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Topline */}
        <Reveal>
          <div className="max-w-3xl mb-12 flex flex-col items-start">
            <span className="text-sm font-mono text-muted mb-4 block">
              04
            </span>
            <h2
              id="signature-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.05]"
            >
              Anatomy of master{" "}
              <em className="italic text-walnut font-normal">craftsmanship.</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-body font-light leading-relaxed">
              Interact with the signature suite below to explore internal carpentry joinery, luxury upholstery layers, and customize your desired timber finish.
            </p>
          </div>
        </Reveal>

        {/* Immersive Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Interactive Visual with Hotspots */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-sm overflow-hidden bg-charcoal shadow-2xl border border-stone-dark/20 group">
                <Image
                  src="/images/hero.webp"
                  alt="Heaven Furniture Mart Signature Sovereign Seating Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-all duration-700"
                />
                
                {/* Dynamic Finish Tint Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-700 pointer-events-none mix-blend-multiply opacity-20"
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
                          ? "bg-walnut text-ivory scale-110 shadow-lg shadow-walnut/50 ring-4 ring-walnut/30"
                          : "bg-charcoal/90 text-ivory border border-walnut hover:bg-walnut hover:text-ivory animate-hotspot"
                      }`}
                      aria-label={`View detail: ${spot.title}`}
                      title={spot.title}
                    >
                      <span className="text-xs font-bold font-mono">0{idx + 1}</span>
                    </button>
                  );
                })}

                {/* Floating Hotspot Detail Card Overlay */}
                {activeHotspot && (
                  <div className="absolute bottom-4 inset-x-4 p-4 sm:p-5 glass-info text-ivory rounded-sm shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-walnut block mb-1">
                          {activeHotspot.subtitle}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl text-ivory">
                          {activeHotspot.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-ivory/80 font-light mt-1.5 leading-relaxed">
                          {activeHotspot.detail}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-walnut-light shrink-0">
                        Craft Spec
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Instruction Tip */}
            <div className="flex items-center gap-2 mt-3 text-xs text-muted">
              <Info className="size-4 text-walnut shrink-0" />
              <span>Tap the numbered golden markers on the image to inspect craftsmanship details.</span>
            </div>
          </div>

          {/* Editorial Specs & Finish Customizer */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal direction="right" delay={100}>
              <div className="p-6 sm:p-8 glass-card bg-stone/40 rounded-sm border border-stone-dark/30 shadow-sm flex flex-col gap-6">
                
                {/* Header */}
                <div>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-walnut uppercase block mb-1">
                    Signature Masterpiece
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                    The Sovereign Seating Suite
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    Bespoke Handcrafted Classical Living Ensemble
                  </p>
                </div>

                {/* Timber Finish Customizer */}
                <div className="pt-2 border-t border-stone-dark/20">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                      Select Timber & Lacquer Finish:
                    </label>
                    <span className="text-xs font-semibold text-walnut">
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
                          className={`flex flex-col items-center gap-1.5 p-2 rounded-xs border text-left transition-all ${
                            isSelected
                              ? "border-walnut bg-walnut/10 ring-2 ring-walnut/40 shadow-sm"
                              : "border-stone-dark/30 hover:border-stone-dark/60 bg-white"
                          }`}
                        >
                          <span
                            className="size-6 rounded-full border border-black/20 shadow-inner"
                            style={{ backgroundColor: finish.hex }}
                          />
                          <span className="text-[0.62rem] font-semibold text-charcoal text-center leading-tight truncate w-full">
                            {finish.name.split(" ")[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Finish Breakdown */}
                  <div className="mt-3 p-3 bg-stone rounded-xs border border-stone-dark/20 text-xs">
                    <p className="font-semibold text-charcoal">
                      Timber: <span className="font-normal text-body">{activeFinish.woodType}</span>
                    </p>
                    <p className="text-[0.7rem] text-muted mt-0.5">
                      {activeFinish.grainDescription}
                    </p>
                  </div>
                </div>

                {/* Specifications List */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-stone-dark/20 text-xs">
                  <div className="p-2.5 bg-stone rounded-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                      Timber Seasoning
                    </span>
                    <span className="font-semibold text-charcoal">8–12% Moisture Kiln-Dried</span>
                  </div>

                  <div className="p-2.5 bg-stone rounded-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                      Structural Warranty
                    </span>
                    <span className="font-semibold text-charcoal">10 Years Anti-Borer</span>
                  </div>

                  <div className="p-2.5 bg-stone rounded-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                      Custom Dimensions
                    </span>
                    <span className="font-semibold text-charcoal">Tailored to Floor Plan</span>
                  </div>

                  <div className="p-2.5 bg-stone rounded-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                      Turnkey Setup
                    </span>
                    <span className="font-semibold text-charcoal">White-Glove Delivery</span>
                  </div>
                </div>

                {/* Direct Custom Action */}
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-charcoal hover:bg-charcoal-mid text-ivory font-bold text-xs uppercase tracking-[0.14em] transition-all shadow-md shadow-charcoal/20"
                  >
                    <MessageSquare className="size-4" />
                    <span>Inquire via WhatsApp with {activeFinish.name}</span>
                  </a>

                  <a
                    href="#consultation"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-transparent hover:bg-black/5 text-charcoal font-semibold text-xs uppercase tracking-[0.12em] border border-stone-dark transition-all"
                  >
                    <span>Request Full Customization Brief</span>
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
