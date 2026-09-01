"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener("canplaythrough", handleCanPlay);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      video.pause();
      setVideoLoaded(true);
    }

    return () => video.removeEventListener("canplaythrough", handleCanPlay);
  }, []);

  return (
    <section
      id="top"
      aria-label="Welcome to Heaven Furniture Mart — Luxury Bespoke Furniture Showroom"
      className="relative min-h-[100svh] w-full flex flex-col justify-end overflow-hidden"
    >
      {/* ─── Layer 1: Video Background ─── */}
      <div className="absolute inset-0 z-0">
        {/* Poster fallback */}
        <Image
          src="/images/showroom-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-700 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />

        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/showroom-poster.webp"
          className={`absolute inset-0 w-full h-full object-cover hero-bg-entrance ${
            videoLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          aria-hidden="true"
        >
          <source src="/video/showroom-cinematic.webm" type="video/webm" />
          <source src="/video/showroom-cinematic.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ─── Layer 2: Dark overlays for text readability ─── */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.4)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[50%] z-[1] bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Layer 3: Hero Content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pb-10 sm:pb-14 lg:pb-16 pt-32">
        <div className="flex flex-col gap-6 sm:gap-7 max-w-3xl">
          {/* Eyebrow — secondary phrase */}
          <div
            className="hero-entrance"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-flex items-center gap-2.5 text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-white/90">
              <span className="w-8 h-px bg-walnut" aria-hidden="true" />
              {site.slogan}
            </span>
          </div>

          {/* Primary Headline — ONE dominant message */}
          <h1
            className="hero-text-entrance font-serif text-white leading-[0.95] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              animationDelay: "0.5s",
            }}
          >
            Furniture That
            <br />
            Defines The Space
          </h1>

          {/* Supporting editorial copy */}
          <p
            className="hero-entrance text-sm sm:text-base lg:text-lg text-slate-100/90 font-light leading-relaxed max-w-lg"
            style={{ animationDelay: "0.75s" }}
          >
            Heirloom-grade bespoke furniture and turnkey interior
            architecture — crafted from seasoned hardwood, shaped around
            your vision.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 hero-entrance"
            style={{ animationDelay: "0.95s" }}
          >
            <Button
              href="#collections"
              variant="walnut"
              arrowDirection="right"
            >
              Explore Collections
            </Button>

            <Button
              href="#showroom"
              variant="ghost"
              arrowDirection="up-right"
              className="!text-white !border-white/40 bg-white/5 hover:!bg-white/15 hover:!border-white/70 backdrop-blur-sm"
            >
              Visit Showroom
            </Button>
          </div>
        </div>
      </div>

      {/* ─── Layer 4: Bottom Info Strip ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pb-6 sm:pb-8">
        <div
          className="hero-float flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 sm:py-5 px-5 sm:px-7 glass-dark rounded-sm text-xs sm:text-[0.7rem] text-white"
          style={{ animationDelay: "1.15s" }}
        >
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-walnut-light" aria-hidden="true" />
              <span className="font-semibold tracking-wide uppercase">100% Bespoke</span>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-walnut-light" aria-hidden="true" />
              <span className="font-semibold tracking-wide uppercase">Kiln-Dried Hardwood</span>
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-walnut-light" aria-hidden="true" />
              <span className="font-semibold tracking-wide uppercase">BFIOA Recognized</span>
            </span>
            <span className="hidden lg:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-walnut-light" aria-hidden="true" />
              <span className="font-semibold tracking-wide uppercase">Agrabad, Chattogram</span>
            </span>
          </div>

          <a
            href="#story"
            className="hidden sm:flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors animate-scroll-cue"
            aria-label="Scroll to explore"
          >
            <span>Scroll</span>
            <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2v12M8 14l-3-3M8 14l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
