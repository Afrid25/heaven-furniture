"use client";

import Image from "next/image";
import { site, getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { MapPin, Clock, Navigation, Sparkles, Check } from "lucide-react";

export function ShowroomGuide() {
  const vipWhatsApp = getWhatsAppUrl(
    "Hello Heaven Furniture Mart! I would like to book a VIP Private Walkthrough at your Agrabad Access Road flagship showroom."
  );

  return (
    <section
      id="showroom"
      aria-labelledby="showroom-heading"
      className="relative py-20 sm:py-28 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-gold-brass/25">
            <div>
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
                Flagship Showroom Experience
              </span>
              <h2
                id="showroom-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-brass tracking-tight leading-[1.05]"
              >
                Experience the luxury{" "}
                <em className="italic text-gold-brass-light font-normal">in person.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              Step into our multi-story showroom on Agrabad Access Road. Feel the dense weight of seasoned teak, test ergonomic cushion profiles, and consult directly with our chief furniture architects.
            </p>
          </div>
        </Reveal>

        {/* Master Section Card Container */}
        <Reveal delay={100}>
          <div className="my-8 sm:my-10 p-6 sm:p-10 lg:p-12 glass-card-dark glossy-reflection rounded-3xl border border-gold-brass/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-charcoal-teal-dark/80 backdrop-blur-xl">
            
            {/* Showroom Visual & Detailed Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Showroom Facade Visual */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-charcoal-teal-dark shadow-2xl border border-gold-brass/30 group">
                  <Image
                    src="/images/showroom.webp"
                    alt="Heaven Furniture Mart Flagship Showroom Building on Agrabad Access Road, Chattogram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-teal-dark/90 via-charcoal-teal-dark/30 to-transparent opacity-85" />

                  {/* Showroom Badge */}
                  <div className="absolute top-4 left-4 p-3 glass-card-dark text-gold-brass rounded-xl border border-gold-brass/30 shadow-md backdrop-blur-md">
                    <span className="text-[0.6rem] font-bold font-sans tracking-[0.2em] text-gold-brass uppercase block">
                      Flagship Destination
                    </span>
                    <p className="font-serif text-base text-gold-brass">
                      Agrabad Access Road · Chattogram
                    </p>
                  </div>
                </div>
              </div>

              {/* Showroom Hours, Address, and VIP Booking Box */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 sm:p-8 glass-card-dark glossy-reflection rounded-2xl border border-gold-brass/30 flex flex-col gap-6 shadow-xl">
                  
                  {/* Location Line */}
                  <div className="flex items-start gap-3 pb-4 border-b border-gold-brass/20">
                    <MapPin className="size-5 text-gold-brass shrink-0 mt-1" />
                    <div>
                      <span className="text-[0.62rem] font-bold font-sans uppercase tracking-wider text-gold-brass-light">
                        Showroom Address
                      </span>
                      <p className="font-serif text-lg text-gold-brass mt-0.5">
                        {site.addressLine}
                      </p>
                      <p className="text-xs text-gold-brass-light/80 font-sans">
                        {site.city}
                      </p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-3 pb-4 border-b border-gold-brass/20">
                    <Clock className="size-5 text-gold-brass shrink-0 mt-1" />
                    <div>
                      <span className="text-[0.62rem] font-bold font-sans uppercase tracking-wider text-gold-brass-light">
                        Showroom Hours
                      </span>
                      <p className="text-xs text-gold-brass mt-1 font-sans">
                        {site.hours.weekdays}
                      </p>
                      <p className="text-xs text-gold-brass-light mt-0.5 font-medium font-sans">
                        {site.hours.friday}
                      </p>
                    </div>
                  </div>

                  {/* Showroom Amenities */}
                  <div>
                    <span className="text-[0.62rem] font-bold font-sans uppercase tracking-wider text-gold-brass block mb-2">
                      Showroom Amenities
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gold-brass-light/85 font-sans">
                      <div className="flex items-center gap-1.5">
                        <Check className="size-3.5 text-gold-brass shrink-0" />
                        <span>Dedicated Parking</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="size-3.5 text-gold-brass shrink-0" />
                        <span>Live Wood Swatches</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="size-3.5 text-gold-brass shrink-0" />
                        <span>Private 3D CAD Studio</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="size-3.5 text-gold-brass shrink-0" />
                        <span>Hospitality Lounge</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 pt-2">
                    <a
                      href={site.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 glass-cta text-charcoal-teal font-bold text-xs uppercase tracking-[0.14em] transition-all rounded-full shadow-md hover:scale-[1.02]"
                    >
                      <Navigation className="size-4" />
                      <span>Get Directions on Google Maps</span>
                    </a>

                    <a
                      href={vipWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 glass-btn-teal text-gold-brass hover:text-gold-brass-light font-semibold text-xs uppercase tracking-[0.12em] rounded-full border border-gold-brass/40 transition-all hover:scale-[1.01]"
                    >
                      <Sparkles className="size-4 text-gold-brass" />
                      <span>Book Private VIP Walkthrough</span>
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
