import Image from "next/image";
import { site, navLinks } from "@/lib/site";
import { MapPin, Phone, Mail, Award, MessageSquare, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      role="contentinfo"
      className="bg-charcoal text-ivory pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/8">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <a href="#top" className="inline-block focus-visible:ring-2 focus-visible:ring-walnut">
              <div className="py-1.5 px-3 bg-white/5 border border-white/10 rounded-sm inline-block">
                <Image
                  src="/images/logo.png"
                  alt={site.name}
                  width={180}
                  height={60}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed max-w-sm">
              Heaven Furniture Mart delivers bespoke furniture that reflects success, taste, and comfort. We combine design, durability, and personalization — giving you furniture that truly feels yours.
            </p>

            <div className="flex items-center gap-2 text-[0.68rem] text-walnut uppercase tracking-wider font-semibold">
              <Award className="size-4 shrink-0" />
              <span>Chamber of Commerce &amp; BFIOA Recognized</span>
            </div>
          </div>

          {/* Col 2: Showroom Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-walnut">
              Showroom Index
            </span>
            <nav className="flex flex-col gap-2 text-xs" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ivory/60 hover:text-walnut-light transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Collections */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-walnut">
              Collections
            </span>
            <div className="flex flex-col gap-2 text-xs text-ivory/60">
              <a href="#collections" className="hover:text-walnut-light transition-colors">Living Room Suites</a>
              <a href="#collections" className="hover:text-walnut-light transition-colors">Master Bedroom Sets</a>
              <a href="#collections" className="hover:text-walnut-light transition-colors">Imperial Dining Tables</a>
              <a href="#collections" className="hover:text-walnut-light transition-colors">Showcases &amp; Credenzas</a>
              <a href="#bespoke" className="hover:text-walnut-light transition-colors">Bespoke Architectural Built-ins</a>
            </div>
          </div>

          {/* Col 4: Flagship Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-walnut">
              Showroom Contact
            </span>
            <div className="flex flex-col gap-3 text-xs text-ivory/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-walnut shrink-0 mt-0.5" />
                <span>{site.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-walnut shrink-0" />
                <a href={site.phoneHref} className="hover:text-walnut-light font-semibold text-ivory/80">
                  {site.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-walnut shrink-0" />
                <a href={site.emailConsult} className="hover:text-walnut-light">
                  {site.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="size-4 text-walnut shrink-0" />
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-walnut-light">
                  WhatsApp Direct Line
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>© {currentYear} {site.name}. All rights reserved. Agrabad, Chattogram, Bangladesh.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[0.68rem] tracking-wider uppercase text-ivory/50">
              Designed. Crafted. Customized.
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-walnut hover:text-walnut-light transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
