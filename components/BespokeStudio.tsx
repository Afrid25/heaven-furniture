"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/site";
import { bespokeSteps } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Compass, Ruler, Hammer, Truck, MessageSquare, Sparkles } from "lucide-react";

export function BespokeStudio() {
  const [selectedSpace, setSelectedSpace] = useState("Living Room Suite");
  const [selectedTimber, setSelectedTimber] = useState("Solid Chittagong Teak");
  const [selectedAesthetic, setSelectedAesthetic] = useState("Royal Classical Grandeur");

  const spaceOptions = [
    "Full Home & Villa Ensembles",
    "Living Room Suite",
    "Master Bedroom Sanctuary",
    "Formal Dining Ensemble",
    "Bespoke Storage & Consoles",
  ];

  const timberOptions = [
    "Solid Chittagong Teak",
    "Kiln-Dried Dense Mahogany",
    "Premium Architectural Hardwood",
  ];

  const aestheticOptions = [
    "Royal Classical Grandeur",
    "Contemporary Minimalist",
    "Neo-Classical Warmth",
  ];

  const bespokeWhatsAppBrief = getWhatsAppUrl(
    `Hello Heaven Furniture Mart! I would like to request a bespoke project brief:\n\n• Target Space: ${selectedSpace}\n• Preferred Timber: ${selectedTimber}\n• Design Aesthetic: ${selectedAesthetic}\n\nPlease share estimated consultation availability and catalogue details.`
  );

  return (
    <section
      id="bespoke"
      aria-labelledby="bespoke-heading"
      className="relative py-24 sm:py-32 bg-earth text-ivory overflow-hidden border-b border-walnut/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-muted uppercase block mb-3">
                05
              </span>
              <h2
                id="bespoke-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-[1.05]"
              >
                Tailored exclusively for{" "}
                <em className="italic text-walnut font-normal">your sanctuary.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
              We do not mass produce. Every piece is an architectural commission designed to honor your room dimensions, natural light, and individual taste.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Process Editorial Timeline */}
        <div className="relative pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {bespokeSteps.map((step, index) => {
              const IconComponent =
                index === 0
                  ? Compass
                  : index === 1
                  ? Ruler
                  : index === 2
                  ? Hammer
                  : Truck;

              const isLast = index === bespokeSteps.length - 1;

              return (
                <div key={step.step} className="relative group">
                  <Reveal delay={index * 80} className="h-full">
                    <div className="relative flex lg:flex-col gap-6 lg:gap-8 pr-0 lg:pr-8 pb-12 lg:pb-0 h-full">
                      
                      {/* Vertical line for mobile */}
                      {!isLast && (
                        <div className="absolute left-[1.75rem] top-14 bottom-[-1rem] w-px bg-white/10 lg:hidden" />
                      )}
                      {/* Vertical hover line for mobile */}
                      {!isLast && (
                        <div className="absolute left-[1.75rem] top-14 bottom-[-1rem] w-px bg-walnut scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out z-10 lg:hidden" />
                      )}

                      {/* Horizontal line for desktop */}
                      {!isLast && (
                        <div className="absolute top-[1.75rem] left-[4.5rem] w-[calc(100%-1rem)] h-px bg-white/10 hidden lg:block" />
                      )}
                      {/* Horizontal hover line for desktop */}
                      {!isLast && (
                        <div className="absolute top-[1.75rem] left-[4.5rem] w-[calc(100%-1rem)] h-px bg-walnut scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-10 hidden lg:block" />
                      )}

                      {/* Node / Icon */}
                      <div className="relative z-20 flex-shrink-0 w-14 h-14 rounded-full bg-earth border border-white/10 group-hover:border-walnut/50 transition-colors duration-300 flex items-center justify-center text-walnut">
                        <IconComponent className="size-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1 lg:pt-0">
                        <span className="font-serif text-4xl text-walnut block mb-2 lg:mb-4">
                          {step.step}
                        </span>
                        <h3 className="font-serif text-xl text-ivory mb-2">
                          {step.title}
                        </h3>
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-walnut block mb-3">
                          {step.subtitle}
                        </span>
                        <p className="text-sm text-ivory/70 font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
          
          <Reveal delay={400}>
            <div className="mt-8 lg:mt-16 flex items-center lg:justify-center gap-2 text-[0.65rem] text-walnut font-medium uppercase tracking-wider">
              <Sparkles className="size-3" />
              <span>Complimentary In-House Service</span>
            </div>
          </Reveal>
        </div>

        {/* Interactive Custom Project Builder / Estimator */}
        <Reveal>
          <div className="p-8 sm:p-12 glass-dark rounded-sm border border-walnut/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Configurator Controls */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-walnut uppercase block mb-2">
                    Interactive Project Configurator
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-ivory">
                    Plan Your Custom Commission
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 mt-2">
                    Select your space specifications to generate an instant bespoke project brief for our master artisans.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Step 1: Space Selection */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[0.68rem] font-bold uppercase tracking-wider text-ivory/90">
                      1. Target Room or Space:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {spaceOptions.map((space) => (
                        <button
                          key={space}
                          type="button"
                          onClick={() => setSelectedSpace(space)}
                          className={`px-4 py-2.5 text-xs font-semibold rounded-xs transition-all ${
                            selectedSpace === space
                              ? "bg-walnut text-ivory shadow-md shadow-walnut/10"
                              : "bg-white/5 hover:bg-white/10 text-ivory/70 border border-white/10"
                          }`}
                        >
                          {space}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Timber Preference */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[0.68rem] font-bold uppercase tracking-wider text-ivory/90">
                      2. Timber & Hardwood Grade:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timberOptions.map((timber) => (
                        <button
                          key={timber}
                          type="button"
                          onClick={() => setSelectedTimber(timber)}
                          className={`px-4 py-2.5 text-xs font-semibold rounded-xs transition-all ${
                            selectedTimber === timber
                              ? "bg-walnut text-ivory shadow-md shadow-walnut/10"
                              : "bg-white/5 hover:bg-white/10 text-ivory/70 border border-white/10"
                          }`}
                        >
                          {timber}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Aesthetic Style */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[0.68rem] font-bold uppercase tracking-wider text-ivory/90">
                      3. Aesthetic Vision:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {aestheticOptions.map((style) => (
                        <button
                          key={style}
                          type="button"
                          onClick={() => setSelectedAesthetic(style)}
                          className={`px-4 py-2.5 text-xs font-semibold rounded-xs transition-all ${
                            selectedAesthetic === style
                              ? "bg-walnut text-ivory shadow-md shadow-walnut/10"
                              : "bg-white/5 hover:bg-white/10 text-ivory/70 border border-white/10"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Generated Brief & One-Click WhatsApp Action */}
              <div className="lg:col-span-5 h-full">
                <div className="p-6 sm:p-8 bg-earth-light rounded-sm border border-walnut/40 shadow-xl flex flex-col gap-6 h-full justify-between">
                  
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-walnut">
                        Custom Brief Summary
                      </span>
                      <span className="text-xs font-mono text-ivory/50">HVR-BESPOKE</span>
                    </div>

                    <div className="flex flex-col gap-3.5 text-xs sm:text-sm">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-ivory/60">Space:</span>
                        <span className="font-medium text-ivory text-right">{selectedSpace}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-ivory/60">Hardwood:</span>
                        <span className="font-medium text-walnut text-right">{selectedTimber}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-ivory/60">Aesthetic:</span>
                        <span className="font-medium text-ivory text-right">{selectedAesthetic}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-ivory/60">3D CAD Preview:</span>
                        <span className="font-medium text-walnut text-right">Included (Free)</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-ivory/60">Setup & Assembly:</span>
                        <span className="font-medium text-ivory text-right">White-Glove Delivery</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={bespokeWhatsAppBrief}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-4 bg-walnut hover:bg-walnut-light text-ivory font-bold text-xs uppercase tracking-[0.14em] transition-all shadow-lg shadow-walnut/20 mb-4"
                    >
                      <MessageSquare className="size-4" />
                      <span>Send Brief to WhatsApp Concierge</span>
                    </a>

                    <p className="text-[0.65rem] text-center text-ivory/50">
                      Direct line to MD & Head Designer · No spam · Instant reply
                    </p>
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
