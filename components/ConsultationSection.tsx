"use client";

import { useState } from "react";
import { site, getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function ConsultationSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState("Living Room Suite");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Heaven Furniture Mart! I would like to book a bespoke consultation:\n\n• Name: ${name || "Valued Client"}\n• Phone: ${phone || "Not provided"}\n• Space of Interest: ${room}\n• Requirements/Notes: ${notes || "Looking for bespoke recommendations."}\n\nPlease let me know when we can arrange a consultation.`;
    window.open(getWhatsAppUrl(message), "_blank");
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Bespoke Consultation Request - ${name || "Client"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nSpace: ${room}\nNotes: ${notes}\n\nSent from Heaven Furniture Mart Landing Page.`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="consultation"
      aria-labelledby="consultation-heading"
      className="relative py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden luxury-noise border-b border-brown/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal>
          <div className="max-w-3xl mb-12">
            <span className="text-[0.68rem] font-bold tracking-[0.22em] text-brass uppercase block mb-3">
              Scene 08 · Direct Consultation & Contact
            </span>
            <h2
              id="consultation-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.05]"
            >
              Let’s design your{" "}
              <em className="italic text-brass font-normal">dream space.</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-text-body font-light leading-relaxed">
              Whether you require a single signature statement sofa or a comprehensive villa interior fit-out, our design specialists are ready to assist you.
            </p>
          </div>
        </Reveal>

        {/* Form and Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="p-6 sm:p-10 bg-white rounded-sm border border-brown/15 shadow-xl">
                {submitted ? (
                  <div className="text-center py-10 flex flex-col items-center gap-4">
                    <div className="p-3 bg-brass/10 text-brass rounded-full">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal">
                      Thank You, {name || "Friend"}!
                    </h3>
                    <p className="text-sm text-text-muted max-w-md">
                      Your consultation inquiry has been transferred to our WhatsApp concierge. Our team will review your specifications and contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-bold uppercase tracking-wider text-brass hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5">
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal mb-1">
                        Book a Complimentary Consultation
                      </h3>
                      <p className="text-xs text-text-muted">
                        Connect directly with our master furniture artisans and interior stylists.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Tanvir Ahmed"
                          className="w-full px-3.5 py-3 text-sm bg-ivory/50 border border-brown/20 rounded-xs focus:outline-none focus:border-brass text-charcoal placeholder:text-charcoal/40"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+880 1..."
                          className="w-full px-3.5 py-3 text-sm bg-ivory/50 border border-brown/20 rounded-xs focus:outline-none focus:border-brass text-charcoal placeholder:text-charcoal/40"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                        Space of Interest
                      </label>
                      <select
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        className="w-full px-3.5 py-3 text-sm bg-ivory/50 border border-brown/20 rounded-xs focus:outline-none focus:border-brass text-charcoal"
                      >
                        <option value="Living Room Suite">Living Room Suite & Sofas</option>
                        <option value="Master Bedroom Sanctuary">Master Bedroom Sanctuary</option>
                        <option value="Dining Room Ensemble">Dining Room Ensemble</option>
                        <option value="Bespoke Showcase & Consoles">Bespoke Showcase & Consoles</option>
                        <option value="Executive Office & Study">Executive Office & Study</option>
                        <option value="Full Villa / Penthouse Project">Full Villa / Penthouse Project</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal">
                        Project Details or Custom Sizing
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about your room dimensions, desired wood finish, or styling requirements..."
                        className="w-full px-3.5 py-3 text-sm bg-ivory/50 border border-brown/20 rounded-xs focus:outline-none focus:border-brass text-charcoal placeholder:text-charcoal/40 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                      <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 bg-brass hover:bg-brass-light text-charcoal font-bold text-xs uppercase tracking-[0.14em] transition-all shadow-md shadow-brass/20 cursor-pointer"
                      >
                        <MessageSquare className="size-4" />
                        <span>Send via WhatsApp Concierge</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="inline-flex items-center justify-center gap-2 py-4 px-5 bg-ivory hover:bg-white text-charcoal font-semibold text-xs uppercase tracking-[0.12em] border border-brown/20 transition-all cursor-pointer"
                      >
                        <Mail className="size-4 text-brass" />
                        <span>Email Us</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Direct Contact Cards & Phone Line */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal direction="right" delay={100}>
              <div className="p-6 sm:p-8 bg-charcoal text-ivory rounded-sm border border-brass/30 shadow-xl flex flex-col gap-6">
                
                <div>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brass uppercase block mb-1">
                    Direct Contact Line
                  </span>
                  <h3 className="font-serif text-2xl text-ivory">
                    Call Our Showroom Directly
                  </h3>
                  <p className="text-xs text-ivory/70 mt-1">
                    Speak with Managing Director MD Abul Kalam Bhuiyan or our senior design team.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-brass/20 text-brass">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brass">
                        Direct Showroom Phone
                      </p>
                      <a
                        href={site.phoneHref}
                        className="font-serif text-xl sm:text-2xl text-ivory hover:text-brass transition-colors font-semibold"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-ivory/80">
                  <Mail className="size-4 text-brass shrink-0" />
                  <a href={site.emailConsult} className="hover:text-brass transition-colors">
                    {site.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-ivory/80">
                  <MapPin className="size-4 text-brass shrink-0" />
                  <span>{site.fullAddress}</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[0.7rem] text-brass font-medium">
                    <Sparkles className="size-3.5" />
                    <span>Free Space Measurement & Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-[0.7rem] text-ivory/70">
                    <ShieldCheck className="size-3.5 text-brass" />
                    <span>10-Year Anti-Borer Hardwood Warranty</span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
