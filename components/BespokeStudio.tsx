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
      className="relative py-20 sm:py-28 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-gold-brass/25">
            <div>
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
                Bespoke Studio
              </span>
              <h2
                id="bespoke-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-brass tracking-tight leading-[1.05]"
              >
                Tailored exclusively for{" "}
                <em className="italic text-gold-brass-light font-normal">your sanctuary.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              We do not mass produce. Every piece is an architectural commission designed to honor your room dimensions, natural light, and individual taste.
            </p>
          </div>
        </Reveal>

        {/* Master Section Card Container */}
        <Reveal delay={100}>
          <div className="my-8 sm:my-10 p-6 sm:p-10 lg:p-12 glass-card-dark glossy-reflection rounded-3xl border border-gold-brass/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-charcoal-teal-dark/80 backdrop-blur-xl">
            
            {/* 4-Step Process Editorial Timeline */}
            <div className="relative pb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {bespokeSteps.map((step, index) => {
                  const IconComponent =
                    index === 0
                      ? Compass
                      : index === 1
                      ? Ruler
                      : index === 2
                      ? Hammer
                      : Truck;

                  return (
                    <div key={step.title} className="relative group">
                      <Reveal delay={index * 80} className="h-full">
                        <div className="p-3.5 sm:p-6 glass-card-dark glossy-reflection rounded-xl sm:rounded-2xl border border-gold-brass/25 hover:border-gold-brass/60 flex flex-col justify-between h-full group shadow-lg hover:shadow-2xl transition-all">
                          <div>
                            {/* Node / Icon */}
                            <div className="relative z-20 flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-charcoal-teal-dark border border-gold-brass/30 group-hover:border-gold-brass transition-colors duration-300 flex items-center justify-center text-gold-brass shadow-md mb-3">
                              <IconComponent className="size-4 sm:size-5" />
                            </div>

                            {/* Content */}
                            <div>
                              <h3 className="font-serif text-sm sm:text-xl text-gold-brass mb-1 leading-snug">
                                {step.title}
                              </h3>
                              <span className="text-[0.55rem] sm:text-[0.62rem] font-bold font-sans uppercase tracking-[0.14em] text-gold-brass-light block mb-2">
                                {step.subtitle}
                              </span>
                              <p className="text-[0.68rem] sm:text-sm text-gold-brass-light/85 font-sans font-light leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  );
                })}
              </div>
              
              <Reveal delay={400}>
                <div className="mt-8 lg:mt-12 flex items-center lg:justify-center gap-2 text-[0.65rem] text-gold-brass font-bold font-sans uppercase tracking-wider">
                  <Sparkles className="size-3 text-gold-brass" />
                  <span>Complimentary In-House Architectural Service</span>
                </div>
              </Reveal>
            </div>

            {/* Interactive Custom Project Builder / Estimator Card */}
            <Reveal>
              <div className="p-6 sm:p-10 glass-card-dark glossy-reflection rounded-2xl border border-gold-brass/30 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Configurator Controls */}
                  <div className="lg:col-span-7 flex flex-col gap-8">
                    <div>
                      <span className="text-[0.65rem] font-bold font-sans tracking-[0.2em] text-gold-brass uppercase block mb-2">
                        Interactive Project Configurator
                      </span>
                      <h3 className="font-serif text-2xl sm:text-4xl text-gold-brass">
                        Plan Your Custom Commission
                      </h3>
                      <p className="text-xs sm:text-sm text-gold-brass-light/85 font-sans font-light mt-2">
                        Select your space specifications to generate an instant bespoke project brief for our master artisans.
                      </p>
                    </div>

                    <div className="flex flex-col gap-6">
                      {/* Step 1: Space Selection */}
                      <div className="flex flex-col gap-3">
                        <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                          1. Target Room or Space:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {spaceOptions.map((space) => (
                            <button
                              key={space}
                              type="button"
                              onClick={() => setSelectedSpace(space)}
                              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                                selectedSpace === space
                                  ? "bg-option-yellow text-deep-brown font-bold shadow-md border border-gold-brass/50 scale-[1.02]"
                                  : "glass-tile-dark text-gold-brass-light border border-gold-brass/25 hover:border-gold-brass/50"
                              }`}
                            >
                              {space}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Step 2: Timber Preference */}
                      <div className="flex flex-col gap-3">
                        <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                          2. Timber &amp; Hardwood Grade:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {timberOptions.map((timber) => (
                            <button
                              key={timber}
                              type="button"
                              onClick={() => setSelectedTimber(timber)}
                              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                                selectedTimber === timber
                                  ? "bg-option-yellow text-deep-brown font-bold shadow-md border border-gold-brass/50 scale-[1.02]"
                                  : "glass-tile-dark text-gold-brass-light border border-gold-brass/25 hover:border-gold-brass/50"
                              }`}
                            >
                              {timber}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Step 3: Aesthetic Style */}
                      <div className="flex flex-col gap-3">
                        <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                          3. Aesthetic Vision:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {aestheticOptions.map((style) => (
                            <button
                              key={style}
                              type="button"
                              onClick={() => setSelectedAesthetic(style)}
                              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                                selectedAesthetic === style
                                  ? "bg-option-yellow text-deep-brown font-bold shadow-md border border-gold-brass/50 scale-[1.02]"
                                  : "glass-tile-dark text-gold-brass-light border border-gold-brass/25 hover:border-gold-brass/50"
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
                    <div className="p-6 sm:p-8 glass-card-dark glossy-reflection rounded-2xl border border-gold-brass/30 flex flex-col gap-6 h-full justify-between shadow-lg">
                      
                      <div>
                        <div className="flex items-center justify-between border-b border-gold-brass/20 pb-4 mb-5">
                          <span className="text-[0.65rem] font-bold font-sans uppercase tracking-[0.18em] text-gold-brass">
                            Custom Brief Summary
                          </span>
                          <span className="text-xs font-mono text-gold-brass-light/60">HVR-BESPOKE</span>
                        </div>

                        <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-sans">
                          <div className="flex justify-between py-1 border-b border-gold-brass/15">
                            <span className="text-gold-brass-light/70">Space:</span>
                            <span className="font-medium text-gold-brass text-right">{selectedSpace}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-gold-brass/15">
                            <span className="text-gold-brass-light/70">Hardwood:</span>
                            <span className="font-medium text-gold-brass text-right">{selectedTimber}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-gold-brass/15">
                            <span className="text-gold-brass-light/70">Aesthetic:</span>
                            <span className="font-medium text-gold-brass text-right">{selectedAesthetic}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-gold-brass/15">
                            <span className="text-gold-brass-light/70">3D CAD Preview:</span>
                            <span className="font-medium text-gold-brass-light text-right">Included (Free)</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gold-brass-light/70">Setup &amp; Assembly:</span>
                            <span className="font-medium text-gold-brass text-right">White-Glove Delivery</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <a
                          href={bespokeWhatsAppBrief}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-4 glass-cta text-charcoal-teal font-bold text-xs uppercase tracking-[0.14em] transition-all rounded-full shadow-md hover:scale-[1.02] mb-4"
                        >
                          <MessageSquare className="size-4" />
                          <span>Send Brief to WhatsApp Concierge</span>
                        </a>

                        <p className="text-[0.65rem] font-sans text-center text-gold-brass-light/60">
                          Direct line to MD &amp; Head Designer · No spam · Instant reply
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </Reveal>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
