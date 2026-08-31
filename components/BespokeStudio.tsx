"use client";

import { useState } from "react";
import Image from "next/image";
import { site, getWhatsAppUrl } from "@/lib/site";
import { bespokeSteps } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Compass, Ruler, Hammer, Truck, Check, MessageSquare, Sparkles, Send } from "lucide-react";

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
      className="relative py-24 sm:py-32 bg-charcoal text-ivory overflow-hidden luxury-noise border-b border-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-brass uppercase block mb-3">
                Scene 05 · Bespoke Interior Styling & Studio
              </span>
              <h2
                id="bespoke-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-[1.05]"
              >
                Tailored exclusively for{" "}
                <em className="italic text-brass font-normal">your sanctuary.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
              We do not mass produce. Every piece is an architectural commission designed to honor your room dimensions, natural light, and individual taste.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 pb-16">
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
              <Reveal key={step.step} delay={index * 80}>
                <div className="relative p-6 bg-charcoal-surface rounded-sm border border-white/10 hover:border-brass/50 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="font-mono text-xl font-bold text-brass">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-full bg-white/5 text-brass group-hover:bg-brass group-hover:text-charcoal transition-colors">
                        <IconComponent className="size-5" />
                      </div>
                    </div>

                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brass block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-xl text-ivory mb-2 group-hover:text-brass transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-1.5 text-[0.65rem] text-brass font-medium uppercase tracking-wider">
                    <Sparkles className="size-3" />
                    <span>Complimentary In-House Service</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Interactive Custom Project Builder / Estimator */}
        <Reveal>
          <div className="p-8 sm:p-12 bg-gradient-to-br from-charcoal-card via-charcoal-surface to-charcoal rounded-sm border border-brass/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Configurator Controls */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brass uppercase block mb-1">
                    Interactive Project Configurator
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-ivory">
                    Plan Your Custom Commission
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 mt-1.5">
                    Select your space specifications to generate an instant bespoke project brief for our master artisans.
                  </p>
                </div>

                {/* Step 1: Space Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-bold uppercase tracking-wider text-ivory/90">
                    1. Target Room or Space:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {spaceOptions.map((space) => (
                      <button
                        key={space}
                        type="button"
                        onClick={() => setSelectedSpace(space)}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-xs transition-all ${
                          selectedSpace === space
                            ? "bg-brass text-charcoal shadow-md font-bold"
                            : "bg-white/5 hover:bg-white/10 text-ivory/70 border border-white/10"
                        }`}
                      >
                        {space}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Timber Preference */}
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-bold uppercase tracking-wider text-ivory/90">
                    2. Timber & Hardwood Grade:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timberOptions.map((timber) => (
                      <button
                        key={timber}
                        type="button"
                        onClick={() => setSelectedTimber(timber)}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-xs transition-all ${
                          selectedTimber === timber
                            ? "bg-brass text-charcoal shadow-md font-bold"
                            : "bg-white/5 hover:bg-white/10 text-ivory/70 border border-white/10"
                        }`}
                      >
                        {timber}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Aesthetic Style */}
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-bold uppercase tracking-wider text-ivory/90">
                    3. Aesthetic Vision:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {aestheticOptions.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setSelectedAesthetic(style)}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-xs transition-all ${
                          selectedAesthetic === style
                            ? "bg-brass text-charcoal shadow-md font-bold"
                            : "bg-white/5 hover:bg-white/10 text-ivory/70 border border-white/10"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Generated Brief & One-Click WhatsApp Action */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 bg-charcoal-dark/90 rounded-sm border border-brass/40 shadow-xl flex flex-col gap-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brass">
                      Custom Brief Summary
                    </span>
                    <span className="text-xs font-mono text-ivory/50">HVR-BESPOKE</span>
                  </div>

                  <div className="flex flex-col gap-3 text-xs">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-ivory/60">Space:</span>
                      <span className="font-semibold text-ivory text-right">{selectedSpace}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-ivory/60">Hardwood:</span>
                      <span className="font-semibold text-brass text-right">{selectedTimber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-ivory/60">Aesthetic:</span>
                      <span className="font-semibold text-ivory text-right">{selectedAesthetic}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-ivory/60">3D CAD Preview:</span>
                      <span className="font-semibold text-brass text-right">Included (Free)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-ivory/60">Setup & Assembly:</span>
                      <span className="font-semibold text-ivory text-right">White-Glove Delivery</span>
                    </div>
                  </div>

                  <a
                    href={bespokeWhatsAppBrief}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-4 bg-brass hover:bg-brass-light text-charcoal font-bold text-xs uppercase tracking-[0.14em] transition-all shadow-lg shadow-brass/20"
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
        </Reveal>

      </div>
    </section>
  );
}
