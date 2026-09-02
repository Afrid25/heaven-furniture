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
      className="relative py-20 sm:py-28 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-gold-brass/25">
            <div className="max-w-xl">
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
                Heritage &amp; Philosophy
              </span>
              <h2
                id="heritage-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-gold-brass leading-[1.05]"
              >
                Crafting bespoke luxury for{" "}
                <em className="italic text-gold-brass-light font-normal">inspired living.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              Heaven Furniture Mart is recognized across Chattogram for crafting heirloom-grade custom furniture that seamlessly merges timeless artisanal carpentry with contemporary architectural aesthetics.
            </p>
          </div>
        </Reveal>

        {/* Unified Master Director Card Container */}
        <Reveal delay={100}>
          <div className="my-12 p-6 sm:p-10 lg:p-12 glass-card-dark glossy-reflection rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] border border-gold-brass/35 bg-charcoal-teal-dark/80 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Side: Managing Director Portrait Image */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-xl bg-charcoal-teal shadow-2xl border border-gold-brass/40">
                    <Image
                      src="/images/md.webp"
                      alt={`${site.md} — ${site.role} of Heaven Furniture Mart`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-teal via-transparent to-transparent opacity-85" />
                    
                    {/* Floating MD Badge */}
                    <div className="absolute bottom-4 inset-x-4 p-3.5 sm:p-4 glass-card-dark text-ivory rounded-lg border border-gold-brass/40 shadow-lg backdrop-blur-md">
                      <p className="font-serif text-lg text-gold-brass tracking-tight">{site.md}</p>
                      <p className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.16em] text-gold-brass-light">
                        {site.role} · Founder
                      </p>
                    </div>
                  </div>

                  {/* Decorative Gold Accent Corner Lines */}
                  <div className="absolute -top-3 -left-3 size-14 border-t-2 border-l-2 border-gold-brass/60 -z-10 hidden sm:block rounded-tl-lg" />
                  <div className="absolute -bottom-3 -right-3 size-14 border-b-2 border-r-2 border-gold-brass/60 -z-10 hidden sm:block rounded-br-lg" />
                </div>
              </div>

              {/* Right Side: Managing Director Quote, Story & Credibility Milestones */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-4xl sm:text-5xl font-serif text-gold-brass/50 select-none block mb-1">“</span>
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-gold-brass leading-snug tracking-tight -mt-4">
                    {site.quote}
                  </blockquote>
                  <div className="h-px w-20 bg-gold-brass/40 my-5" />
                  <p className="text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
                    Founded with a resolute commitment to reject generic mass production, our Agrabad showroom and dedicated workshops provide homeowners, architects, and interior designers with fully customizable, solid-wood solutions tailored to every unique interior floor plan.
                  </p>
                </div>

                {/* Credibility Milestone Grid Inside Card */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-gold-brass/25">
                  <div className="p-3.5 glass-tile-dark rounded-xl border border-gold-brass/30 hover:border-gold-brass/60 shadow-sm transition-all">
                    <p className="font-serif text-2xl sm:text-3xl text-gold-brass font-bold">2020</p>
                    <p className="text-[0.62rem] font-sans font-semibold uppercase tracking-wider text-gold-brass-light/80 mt-0.5">
                      Established in Ctg
                    </p>
                  </div>
                  <div className="p-3.5 glass-tile-dark rounded-xl border border-gold-brass/30 hover:border-gold-brass/60 shadow-sm transition-all">
                    <p className="font-serif text-2xl sm:text-3xl text-gold-brass font-bold">500+</p>
                    <p className="text-[0.62rem] font-sans font-semibold uppercase tracking-wider text-gold-brass-light/80 mt-0.5">
                      Bespoke Spaces
                    </p>
                  </div>
                  <div className="p-3.5 glass-tile-dark rounded-xl border border-gold-brass/30 hover:border-gold-brass/60 shadow-sm transition-all">
                    <p className="font-serif text-2xl sm:text-3xl text-gold-brass font-bold">100%</p>
                    <p className="text-[0.62rem] font-sans font-semibold uppercase tracking-wider text-gold-brass-light/80 mt-0.5">
                      Seasoned Wood
                    </p>
                  </div>
                  <div className="p-3.5 glass-tile-dark rounded-xl border border-gold-brass/30 hover:border-gold-brass/60 shadow-sm transition-all">
                    <p className="font-serif text-2xl sm:text-3xl text-gold-brass font-bold">BFIOA</p>
                    <p className="text-[0.62rem] font-sans font-semibold uppercase tracking-wider text-gold-brass-light/80 mt-0.5">
                      Official Member
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </Reveal>

        {/* 4 Pillars of Excellence */}
        <div className="pt-8">
          <Reveal>
            <div className="mb-8">
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.2em] text-gold-brass uppercase block mb-1">
                Our Standards
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-gold-brass">
                The Four Pillars of Heaven Craftsmanship
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {craftsmanshipPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 80}>
                <div className="p-3.5 sm:p-6 glass-card-dark glossy-reflection rounded-xl sm:rounded-2xl border border-gold-brass/25 hover:border-gold-brass/60 flex flex-col justify-between h-full group shadow-lg hover:shadow-2xl transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2.5 sm:mb-4">
                      <span className="text-[0.55rem] sm:text-[0.6rem] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-0.5 bg-gold-brass/15 text-gold-brass-light border border-gold-brass/40 rounded-full truncate max-w-full">
                        {pillar.highlight}
                      </span>
                    </div>
                    <h4 className="font-serif text-sm sm:text-lg font-semibold text-gold-brass group-hover:text-gold-brass-light transition-colors mb-1.5 sm:mb-2 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[0.68rem] sm:text-sm text-gold-brass-light/85 font-sans font-light leading-relaxed">
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
