"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Sparkles, Award, Droplets } from "lucide-react";

export function MaterialsCraft() {
  const materials = [
    {
      title: "Scientific Kiln-Drying & Seasoning",
      subtitle: "Thermal Moisture Control",
      description:
        "Every wood plank undergoes an extensive 21-day thermal drying process, stabilizing moisture content between 8% and 12%. This permanently eliminates warp, shrinkage, and expansion under tropical humidity.",
      icon: Droplets,
    },
    {
      title: "Hand-Hewn Mortise & Tenon Joints",
      subtitle: "Interlocking Structural Strength",
      description:
        "Unlike commercial flat-pack furniture assembled with cheap dowels or glue, our structural frames employ interlocking wood joinery capable of bearing immense static and dynamic loads for decades.",
      icon: ShieldCheck,
    },
    {
      title: "7-Stage Italian Polyurethane Finish",
      subtitle: "Silken Tactility & Heat Protection",
      description:
        "Our artisans hand-sand through progressively finer grits before applying seven layers of imported Italian polyurethane. The result is a scratch-resistant satin sheen that enhances natural wood chatoyancy.",
      icon: Sparkles,
    },
    {
      title: "High-Resilience Multi-Density Cores",
      subtitle: "Ergonomic Memory Support",
      description:
        "Our seating suites combine 40-density orthopedic cold-cure foam, wrapped in hypoallergenic microfiber and heavy-duty Italian velvets, ensuring shape retention for over 15 years of daily enjoyment.",
      icon: Award,
    },
  ];

  return (
    <section
      id="craftsmanship"
      aria-labelledby="craft-heading"
      className="relative py-20 sm:py-28 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-gold-brass/25">
            <div>
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
                Materials &amp; Artisanal Standards
              </span>
              <h2
                id="craft-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-brass tracking-tight leading-[1.05]"
              >
                Built with materials that{" "}
                <em className="italic text-gold-brass-light font-normal">endure generations.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              We inspect every log, fabric bolt, and hinge before construction begins. No shortcuts, no compromises on raw timber integrity.
            </p>
          </div>
        </Reveal>

        {/* Master Section Card Container */}
        <Reveal delay={100}>
          <div className="my-8 sm:my-10 p-6 sm:p-10 lg:p-12 glass-card-dark glossy-reflection rounded-3xl border border-gold-brass/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-charcoal-teal-dark/80 backdrop-blur-xl">
            
            {/* Visual Pairings and Feature Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Dual Layered Visuals */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <Reveal direction="left">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-charcoal-teal-dark shadow-2xl border border-gold-brass/30 group">
                    <Image
                      src="/images/craft.webp"
                      alt="Heaven Furniture Mart Luxury Handcrafted Showcase & Credenza"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-teal-dark/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 p-2.5 glass-card-dark text-gold-brass rounded-xl border border-gold-brass/30 shadow-md backdrop-blur-md">
                      <p className="text-[0.62rem] font-bold font-sans uppercase tracking-wider text-gold-brass">Solid Timber Showcase</p>
                      <p className="text-[0.58rem] font-sans text-gold-brass-light/80">Hand-carved fluted details</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="right" delay={120}>
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-charcoal-teal-dark shadow-2xl border border-gold-brass/30 group mt-8 sm:mt-12">
                    <Image
                      src="/images/bespoke-cabinet.webp"
                      alt="Heaven Furniture Mart Bespoke Entryway Cabinetry"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-teal-dark/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 p-2.5 glass-card-dark text-gold-brass rounded-xl border border-gold-brass/30 shadow-md backdrop-blur-md">
                      <p className="text-[0.62rem] font-bold font-sans uppercase tracking-wider text-gold-brass">Architectural Console</p>
                      <p className="text-[0.58rem] font-sans text-gold-brass-light/80">Louvered ventilation joinery</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Detailed Materials Checklist Cards (2 Cards per Row on Mobile) */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-5">
                {materials.map((mat, index) => {
                  const Icon = mat.icon;
                  return (
                    <Reveal key={mat.title} delay={index * 70}>
                      <div className="p-3.5 sm:p-6 glass-card-dark glossy-reflection rounded-xl sm:rounded-2xl border border-gold-brass/30 shadow-lg flex flex-col sm:flex-row gap-2.5 sm:gap-4 items-start group hover:border-gold-brass/60 transition-all hover:scale-[1.01] h-full">
                        <div className="p-2 sm:p-2.5 rounded-full bg-gold-brass/15 text-gold-brass group-hover:bg-gold-brass group-hover:text-deep-brown transition-colors shrink-0 shadow-md">
                          <Icon className="size-4 sm:size-5" />
                        </div>
                        <div>
                          <span className="text-[0.55rem] sm:text-[0.62rem] font-bold font-sans uppercase tracking-[0.14em] text-gold-brass-light block mb-1 truncate">
                            {mat.subtitle}
                          </span>
                          <h3 className="font-serif text-sm sm:text-xl font-semibold text-gold-brass group-hover:text-gold-brass-light transition-colors mb-1 leading-snug">
                            {mat.title}
                          </h3>
                          <p className="text-[0.68rem] sm:text-sm text-gold-brass-light/85 font-sans font-light leading-relaxed">
                            {mat.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
