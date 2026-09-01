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
      className="relative py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden border-b border-stone-dark/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-stone-dark/15">
            <div>
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-muted uppercase block mb-3">
                06 · Materials & Artisanal Standards
              </span>
              <h2
                id="craft-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.05]"
              >
                Built with materials that{" "}
                <em className="italic text-walnut font-normal">endure generations.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-body font-light leading-relaxed">
              We inspect every log, fabric bolt, and hinge before construction begins. No shortcuts, no compromises on raw timber integrity.
            </p>
          </div>
        </Reveal>

        {/* Visual Pairings and Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16">
          
          {/* Dual Layered Visuals */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <Reveal direction="left">
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-charcoal shadow-xl border border-stone-dark/15 group">
                <Image
                  src="/images/craft.webp"
                  alt="Heaven Furniture Mart Luxury Handcrafted Showcase & Credenza"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108 scroll-parallax-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-3 p-2.5 glass-info text-ivory rounded-xs">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-walnut">Solid Timber Showcase</p>
                  <p className="text-[0.58rem] text-ivory/70">Hand-carved fluted details</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-charcoal shadow-xl border border-stone-dark/15 group mt-12">
                <Image
                  src="/images/bespoke-cabinet.webp"
                  alt="Heaven Furniture Mart Bespoke Entryway Cabinetry"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108 scroll-parallax-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-3 p-2.5 glass-info text-ivory rounded-xs">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-walnut">Architectural Console</p>
                  <p className="text-[0.58rem] text-ivory/70">Louvered ventilation joinery</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Detailed Materials Checklist */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {materials.map((mat, index) => {
              const Icon = mat.icon;
              return (
                <Reveal key={mat.title} delay={index * 70}>
                  <div className="p-5 glass-card rounded-sm border border-stone-dark/10 hover:border-walnut/50 transition-all duration-300 shadow-sm flex gap-4 items-start group">
                    <div className="p-2.5 rounded-full bg-walnut/10 text-walnut group-hover:bg-walnut group-hover:text-ivory transition-colors shrink-0 mt-0.5">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-walnut block">
                        {mat.subtitle}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal mb-1">
                        {mat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
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
    </section>
  );
}
