"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";
import { Sparkles, MapPin, ShieldCheck, Award } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Welcome to Heaven Furniture Mart Showroom"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-charcoal text-ivory pt-24 pb-10"
    >
      {/* Hero Background Visual with Subtle Depth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Classic Carved Sovereign Living Room Seating Suite by Heaven Furniture Mart"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] sm:object-center transition-transform duration-1000 scale-105"
        />
        {/* Layered Luxury Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal-dark/75 to-charcoal-dark/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-black/60" />
      </div>

      {/* Main Hero Foreground */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 md:py-16">
        <div className="max-w-3xl flex flex-col items-start gap-6">
          
          {/* Showroom Status Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-surface/80 border border-brass/40 backdrop-blur-md shadow-lg shadow-black/30">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-brass" />
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-champagne uppercase">
              Flagship Showroom · Agrabad Access Road, Chattogram
            </span>
          </div>

          {/* Large Editorial Display Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[0.96] tracking-[-0.04em] text-ivory">
            Furniture That Defines
            <br />
            <span className="text-ivory">The Space. </span>
            <em className="italic text-brass font-normal">Crafted for Luxury.</em>
          </h1>

          {/* Brand Philosophy & Slogan */}
          <div className="flex flex-col gap-2 max-w-xl">
            <p className="text-base sm:text-lg text-ivory/90 font-light leading-relaxed">
              <strong className="font-semibold text-brass">{site.slogan}</strong> We craft bespoke furniture and turnkey interior architecture shaped around your taste, architectural space, and comfort.
            </p>
            <p className="text-xs sm:text-sm text-ivory/70 tracking-wide">
              Solid seasoned timber · Generational carpentry · High-density Italian velvet upholstery.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="#collections" variant="brass" arrowDirection="right">
              Explore Collections
            </Button>

            <Button href="#showroom" variant="ghost" arrowDirection="up-right">
              Visit Flagship Showroom
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Architectural Info Strip & Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-t border-white/15 text-xs text-ivory/80 backdrop-blur-sm bg-black/20 px-4 rounded-sm">
          <div className="flex items-center gap-2.5">
            <Sparkles className="size-4 text-brass shrink-0" />
            <div>
              <p className="font-semibold text-ivory uppercase tracking-wider text-[0.68rem]">100% Bespoke Craft</p>
              <p className="text-[0.62rem] text-ivory/60">Tailored to exact spatial dimensions</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 text-brass shrink-0" />
            <div>
              <p className="font-semibold text-ivory uppercase tracking-wider text-[0.68rem]">Seasoned Hardwood</p>
              <p className="text-[0.62rem] text-ivory/60">Kiln-dried & borer/termite immune</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Award className="size-4 text-brass shrink-0" />
            <div>
              <p className="font-semibold text-ivory uppercase tracking-wider text-[0.68rem]">BFIOA Recognized</p>
              <p className="text-[0.62rem] text-ivory/60">Chamber of Commerce Member</p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-2.5">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-brass shrink-0" />
              <div>
                <p className="font-semibold text-ivory uppercase tracking-wider text-[0.68rem]">Agrabad Access Road</p>
                <p className="text-[0.62rem] text-ivory/60">Chattogram Landmark</p>
              </div>
            </div>

            <a
              href="#story"
              className="hidden lg:flex ml-auto items-center gap-1.5 text-[0.62rem] font-bold tracking-widest uppercase text-brass/90 hover:text-brass transition-colors animate-scroll-cue"
              aria-label="Scroll to learn our story"
            >
              <span>Scroll</span>
              <span className="inline-block size-1.5 rounded-full bg-brass" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
