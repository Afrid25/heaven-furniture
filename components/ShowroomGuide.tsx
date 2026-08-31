"use client";

import Image from "next/image";
import { site, getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Phone, Navigation, Sparkles, Check, Car, Coffee, ShieldCheck } from "lucide-react";

export function ShowroomGuide() {
  const vipWhatsApp = getWhatsAppUrl(
    "Hello Heaven Furniture Mart! I would like to book a VIP Private Walkthrough at your Agrabad Access Road flagship showroom."
  );

  return (
    <section
      id="showroom"
      aria-labelledby="showroom-heading"
      className="relative py-24 sm:py-32 bg-charcoal text-ivory overflow-hidden luxury-noise border-b border-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-brass uppercase block mb-3">
                Scene 07 · Flagship Showroom Experience
              </span>
              <h2
                id="showroom-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-[1.05]"
              >
                Experience the luxury{" "}
                <em className="italic text-brass font-normal">in person.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
              Step into our multi-story showroom on Agrabad Access Road. Feel the dense weight of seasoned teak, test ergonomic cushion profiles, and consult directly with our chief furniture architects.
            </p>
          </div>
        </Reveal>

        {/* Showroom Visual & Detailed Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16">
          
          {/* Showroom Facade Visual */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-charcoal-dark shadow-2xl border border-brass/30 group">
                <Image
                  src="/images/showroom.webp"
                  alt="Heaven Furniture Mart Flagship Showroom Building on Agrabad Access Road, Chattogram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/20 to-transparent opacity-80" />

                {/* Showroom Badge */}
                <div className="absolute top-4 left-4 p-3 glass-charcoal text-ivory rounded-xs border border-brass/40">
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] text-brass uppercase block">
                    Flagship Destination
                  </span>
                  <p className="font-serif text-base text-ivory">
                    Agrabad Access Road · Chattogram
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Showroom Hours, Address, and VIP Booking */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal direction="right" delay={100}>
              <div className="p-6 sm:p-8 bg-charcoal-surface rounded-sm border border-brass/30 shadow-xl flex flex-col gap-6">
                
                {/* Location Line */}
                <div className="flex items-start gap-3 pb-4 border-b border-white/10">
                  <MapPin className="size-5 text-brass shrink-0 mt-1" />
                  <div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brass">
                      Showroom Address
                    </span>
                    <p className="font-serif text-lg text-ivory mt-0.5">
                      {site.addressLine}
                    </p>
                    <p className="text-xs text-ivory/70">
                      {site.city}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 pb-4 border-b border-white/10">
                  <Clock className="size-5 text-brass shrink-0 mt-1" />
                  <div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brass">
                      Showroom Hours
                    </span>
                    <p className="text-xs text-ivory mt-1">
                      {site.hours.weekdays}
                    </p>
                    <p className="text-xs text-brass-light mt-0.5 font-medium">
                      {site.hours.friday}
                    </p>
                  </div>
                </div>

                {/* Showroom Amenities */}
                <div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brass block mb-2">
                    Showroom Amenities
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-ivory/80">
                    <div className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-brass shrink-0" />
                      <span>Dedicated Parking</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-brass shrink-0" />
                      <span>Live Wood Swatches</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-brass shrink-0" />
                      <span>Private 3D CAD Studio</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="size-3.5 text-brass shrink-0" />
                      <span>Hospitality Lounge</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <a
                    href={site.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-brass hover:bg-brass-light text-charcoal font-bold text-xs uppercase tracking-[0.14em] transition-all shadow-md shadow-brass/20"
                  >
                    <Navigation className="size-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a
                    href={vipWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-ivory font-semibold text-xs uppercase tracking-[0.12em] border border-white/15 hover:border-brass/40 transition-all"
                  >
                    <Sparkles className="size-4 text-brass" />
                    <span>Book Private VIP Walkthrough</span>
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
