"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ArrowUpRight, Menu, X } from "lucide-react";

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

  // Concise navigation items for compact header fit
  const cleanNavLinks = [
    { href: "#collections", label: "Collections" },
    { href: "#signature", label: "Signature" },
    { href: "#bespoke", label: "Bespoke" },
    { href: "#showroom", label: "Showroom" },
  ];

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled
            ? "top-3 sm:top-4 left-1/2 -translate-x-1/2 w-full lg:w-auto px-4 sm:px-6 max-w-7xl"
            : "top-0 left-0 right-0 w-full px-4 sm:px-8 py-4 sm:py-5"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-60 focus:bg-gold-brass focus:px-4 focus:py-2 focus:text-ivory font-semibold text-xs uppercase tracking-widest rounded-sm"
        >
          Skip to main content
        </a>

        {/* Floating Capsule Container */}
        <div
          className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            scrolled
              ? "glass-nav-pill rounded-full p-2 px-4 sm:px-6 shadow-[0_22px_50px_rgba(0,0,0,0.75)] border border-[#C5A059]/40 gap-4 sm:gap-6 lg:gap-8 w-full lg:w-fit lg:min-w-[800px]"
              : "glass-nav-top rounded-2xl px-5 py-3 sm:px-8 sm:py-4 border-b border-[#C5A059]/20 w-full gap-4 sm:gap-6"
          }`}
        >
          {/* Logo with Glossy Background Cover */}
          <a
            href="#top"
            className="flex items-center group shrink-0 focus-visible:ring-2 focus-visible:ring-gold-brass rounded-full"
            aria-label={`${site.name} — Luxury Bespoke Furniture`}
          >
            <div className="glass-logo-badge relative py-1 px-2.5 sm:py-1.5 sm:px-3.5 rounded-full flex items-center justify-center transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={130}
                height={40}
                className="h-4.5 sm:h-5.5 w-auto object-contain brightness-125"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0"
            aria-label="Primary Navigation"
          >
            {cleanNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-[0.68rem] xl:text-[0.72rem] font-bold tracking-[0.14em] xl:tracking-[0.16em] uppercase text-gold-brass hover:text-gold-brass-light transition-colors duration-300 group whitespace-nowrap drop-shadow-sm"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-brass-light transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#consultation"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-[0.66rem] sm:text-[0.7rem] font-bold tracking-[0.14em] uppercase text-ivory glass-cta rounded-full transition-all duration-300 whitespace-nowrap shadow-md shrink-0"
            >
              <span>Consultation</span>
              <ArrowUpRight className="size-3.5 text-gold-brass-light shrink-0" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 text-gold-brass hover:text-gold-brass-light glass-logo-badge rounded-full transition-colors shrink-0"
              aria-expanded={open}
              aria-controls="mobile-navigation-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Fullscreen Drawer ─── */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between px-6 pt-28 pb-8 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{
          background: "rgba(19, 34, 37, 0.96)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
        }}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-6 my-auto max-w-sm mx-auto w-full">
          <div className="border-b border-[#C5A059]/30 pb-3">
            <span className="text-[0.68rem] font-bold tracking-[0.22em] text-gold-brass uppercase block">
              Navigation
            </span>
          </div>

          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {cleanNavLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-serif text-2xl tracking-tight text-gold-brass hover:text-gold-brass-light transition-all duration-300 flex items-center justify-between font-bold ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#C5A059]/20 max-w-sm mx-auto w-full flex flex-col gap-3">
          <a
            href="#consultation"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 p-3.5 text-xs font-bold uppercase tracking-widest text-ivory glass-cta rounded-full text-center"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </>
  );
}
