"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Phone, MessageSquare, MapPin, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Check if we're past the hero (hero is 100vh)
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.85);
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

  // Over hero: transparent with light text. After hero: warm glass with dark text.
  const isOverHero = isHeroVisible && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "bg-transparent py-5"
            : isOverHero
            ? "bg-gradient-to-b from-[rgba(28,27,24,0.5)] via-[rgba(28,27,24,0.15)] to-transparent py-5"
            : "glass-nav py-3.5 shadow-sm"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-60 focus:bg-walnut focus:px-4 focus:py-2 focus:text-ivory font-semibold text-xs uppercase tracking-widest"
        >
          Skip to main showroom content
        </a>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 group shrink-0 focus-visible:ring-2 focus-visible:ring-walnut"
            aria-label={`${site.name} — Luxury Bespoke Furniture Showroom`}
          >
            <div className={`relative py-1.5 px-2.5 rounded-md transition-all duration-300 ${
              isOverHero
                ? "bg-white/5 backdrop-blur-sm border border-white/10"
                : "bg-stone/40 border border-stone-dark/30"
            }`}>
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={180}
                height={60}
                className={`h-7 sm:h-8 w-auto object-contain transition-all duration-300 ${
                  isOverHero ? "brightness-200 invert-0" : ""
                }`}
                priority
              />
            </div>
            <div className={`hidden xl:flex flex-col border-l pl-3 transition-colors duration-300 ${
              isOverHero ? "border-white/30" : "border-stone-dark/30"
            }`}>
              <span className={`text-[0.62rem] font-bold tracking-[0.22em] uppercase transition-colors duration-300 ${
                isOverHero ? "text-white" : "text-walnut"
              }`}>
                Agrabad · Chattogram
              </span>
              <span className={`text-[0.55rem] tracking-wider transition-colors duration-300 ${
                isOverHero ? "text-slate-200" : "text-muted"
              }`}>
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
                className={`relative py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 group ${
                  isOverHero
                    ? "text-white hover:text-white"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                  isOverHero ? "bg-white" : "bg-walnut"
                }`} />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-[0.68rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300 rounded-sm ${
                isOverHero
                  ? "text-white hover:text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50"
                  : "text-charcoal/70 hover:text-charcoal bg-stone/40 hover:bg-stone border border-stone-dark/30 hover:border-walnut/40"
              }`}
              aria-label="Chat directly on WhatsApp with our concierge"
            >
              <MessageSquare className={`size-3.5 ${isOverHero ? "text-white" : "text-walnut"}`} />
              <span>WhatsApp</span>
            </a>

            <a
              href="#consultation"
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase transition-all duration-300 rounded-sm ${
                isOverHero
                  ? "glass-cta text-white"
                  : "bg-charcoal text-ivory hover:bg-earth"
              }`}
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center p-3 transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-walnut ${
              isOverHero
                ? "text-white hover:text-white bg-white/10 border border-white/30"
                : "text-charcoal hover:text-walnut bg-stone/40 border border-stone-dark/30"
            }`}
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* ─── Fullscreen Mobile Drawer ─── */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between px-6 pt-24 pb-8 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{
          background: "rgba(243, 240, 233, 0.95)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-5 my-auto">
          <div className="border-b border-stone-dark/30 pb-3">
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-walnut uppercase">
              Showroom Index
            </span>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-serif text-2xl sm:text-3xl tracking-tight text-charcoal hover:text-walnut transition-all duration-300 flex items-center justify-between ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-walnut/50">0{index + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Contact Footer */}
        <div className="flex flex-col gap-3.5 pt-6 border-t border-stone-dark/30">
          <div className="flex items-center gap-2 text-xs text-body">
            <MapPin className="size-4 text-walnut shrink-0" />
            <span>{site.fullAddress}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-body">
            <Phone className="size-4 text-walnut shrink-0" />
            <a href={site.phoneHref} className="hover:text-walnut transition-colors">
              {site.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 p-3 text-[0.7rem] font-semibold uppercase tracking-wider bg-stone text-charcoal border border-stone-dark/30 rounded-sm"
            >
              <MessageSquare className="size-4 text-walnut" />
              WhatsApp
            </a>
            <a
              href="#consultation"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 p-3 text-[0.7rem] font-bold uppercase tracking-wider bg-charcoal text-ivory rounded-sm"
            >
              Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
