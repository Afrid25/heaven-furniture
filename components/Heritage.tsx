"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { craftsmanshipPillars } from "@/lib/data";

export function Heritage() {
  return (
    <section
      id="story"
      aria-labelledby="heritage-heading"
      className="relative py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden border-b border-stone"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-dark">
            <div className="max-w-xl">
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-muted uppercase block mb-3">
                02
              </span>
              <h2
                id="heritage-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-charcoal leading-[1.05]"
              >
                Crafting bespoke luxury for{" "}
                <em className="italic text-walnut font-normal">inspired living.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-body font-light leading-relaxed">
              Heaven Furniture Mart is recognized across Chattogram for crafting heirloom-grade custom furniture that seamlessly merges timeless artisanal carpentry with contemporary architectural aesthetics.
            </p>
          </div>
        </Reveal>

        {/* MD Vision & Portrait Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16">
          
          {/* Managing Director Portrait with Architectural Frame */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="relative group">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-sm bg-charcoal shadow-2xl border border-walnut/30">
                  <Image
                    src="/images/md.webp"
                    alt={`${site.md} — ${site.role} of Heaven Furniture Mart`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth via-transparent to-transparent opacity-80" />
                  
                  {/* Floating MD Badge */}
                  <div className="absolute bottom-4 inset-x-4 p-4 glass-dark text-ivory rounded-sm">
                    <p className="font-serif text-lg text-ivory tracking-tight">{site.md}</p>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-walnut-light">
                      {site.role} · Founder
                    </p>
                  </div>
                </div>

                {/* Decorative Walnut Accent Angle */}
                <div className="absolute -top-3 -left-3 size-16 border-t-2 border-l-2 border-walnut -z-10 hidden sm:block" />
                <div className="absolute -bottom-3 -right-3 size-16 border-b-2 border-r-2 border-walnut -z-10 hidden sm:block" />
              </div>
            </Reveal>
          </div>

          {/* Managing Director Quote & Story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal direction="right" delay={100}>
              <span className="text-4xl sm:text-5xl font-serif text-walnut/40 select-none">“</span>
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-charcoal leading-snug tracking-tight -mt-4">
                {site.quote}
              </blockquote>
              <div className="h-px w-20 bg-walnut my-4" />
              <p className="text-sm sm:text-base text-body font-light leading-relaxed">
                Founded with a resolute commitment to reject generic mass production, our Agrabad showroom and dedicated workshops provide homeowners, architects, and interior designers with fully customizable, solid-wood solutions tailored to every unique interior floor plan.
              </p>
            </Reveal>

            {/* Credibility Milestone Grid */}
            <Reveal delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-dark">
                <div className="p-3 bg-stone rounded-sm border border-stone-dark">
                  <p className="font-serif text-2xl sm:text-3xl text-walnut font-bold">2020</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-muted">
                    Established in Ctg
                  </p>
                </div>
                <div className="p-3 bg-stone rounded-sm border border-stone-dark">
                  <p className="font-serif text-2xl sm:text-3xl text-walnut font-bold">500+</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-muted">
                    Bespoke Spaces
                  </p>
                </div>
                <div className="p-3 bg-stone rounded-sm border border-stone-dark">
                  <p className="font-serif text-2xl sm:text-3xl text-walnut font-bold">100%</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-muted">
                    Seasoned Wood
                  </p>
                </div>
                <div className="p-3 bg-stone rounded-sm border border-stone-dark">
                  <p className="font-serif text-2xl sm:text-3xl text-walnut font-bold">BFIOA</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-muted">
                    Official Member
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="pt-12">
          <Reveal>
            <div className="mb-8">
              <span className="text-[0.68rem] font-bold tracking-[0.2em] text-muted uppercase block mb-1">
                Our Standards
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                The Four Pillars of Heaven Craftsmanship
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmanshipPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80}>
                <div className="p-6 glass-card hover:bg-stone rounded-sm border border-stone-dark hover:border-walnut/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-bold text-walnut/70">
                        0{index + 1}
                      </span>
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 bg-walnut/10 text-walnut rounded-full">
                        {pillar.highlight}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-charcoal mb-2 group-hover:text-walnut transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
