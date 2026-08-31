"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Phone, MessageSquare, MapPin, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? "glass-charcoal py-3.5 shadow-2xl shadow-black/40 text-ivory border-b border-brass/20"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-ivory"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-60 focus:bg-brass focus:px-4 focus:py-2 focus:text-charcoal font-semibold text-xs uppercase tracking-widest"
        >
          Skip to main showroom content
        </a>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 group shrink-0"
            aria-label={`${site.name} — Home`}
          >
            <div className="relative p-1.5 bg-black/60 border border-brass/40 rounded-sm group-hover:border-brass transition-colors duration-300">
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={150}
                height={52}
                className="h-7 sm:h-8 w-auto object-contain"
                priority
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-white/20 pl-3">
              <span className="text-[0.62rem] font-bold tracking-[0.22em] text-brass uppercase">
                Agrabad · Chattogram
              </span>
              <span className="text-[0.55rem] text-ivory/70 tracking-wider">
                Bespoke Luxury Showroom
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Primary Showroom Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-ivory/85 hover:text-brass transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-ivory/90 hover:text-brass bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brass/50 transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="size-3.5 text-brass" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[0.66rem] font-bold tracking-[0.14em] uppercase bg-brass text-charcoal hover:bg-brass-light transition-all duration-300 shadow-md shadow-brass/10"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2.5 text-ivory hover:text-brass bg-black/40 border border-white/20 hover:border-brass transition-colors"
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
            aria-label={open ? "Close navigation menu" : "Open showroom menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 z-40 lg:hidden bg-charcoal-dark/98 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between px-6 pt-24 pb-8 text-ivory ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-5 my-auto">
          <div className="border-b border-brass/20 pb-3">
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brass uppercase">
              Showroom Index
            </span>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-serif text-2xl sm:text-3xl tracking-tight hover:text-brass transition-all duration-300 flex items-center justify-between ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-brass/50">0{index + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Contact Footer */}
        <div className="flex flex-col gap-3.5 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-ivory/70">
            <MapPin className="size-4 text-brass shrink-0" />
            <span>{site.fullAddress}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-ivory/70">
            <Phone className="size-4 text-brass shrink-0" />
            <a href={site.phoneHref} className="hover:text-brass">
              {site.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 p-3 text-[0.7rem] font-semibold uppercase tracking-wider bg-white/5 border border-brass/40 text-ivory"
            >
              <MessageSquare className="size-4 text-brass" />
              WhatsApp
            </a>
            <a
              href="#consultation"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 p-3 text-[0.7rem] font-bold uppercase tracking-wider bg-brass text-charcoal"
            >
              Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
