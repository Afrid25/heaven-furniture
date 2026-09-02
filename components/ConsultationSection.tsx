"use client";

import { useState } from "react";
import { site, getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

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
      className="relative py-20 sm:py-28 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-gold-brass/25">
            <div className="max-w-2xl">
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
                Direct Consultation
              </span>
              <h2
                id="consultation-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-brass tracking-tight leading-[1.05]"
              >
                Let&rsquo;s design your{" "}
                <em className="italic text-gold-brass-light font-normal">dream space.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              Whether you require a single signature statement sofa or a comprehensive villa interior fit-out, our design specialists are ready to assist you.
            </p>
          </div>
        </Reveal>

        {/* Master Section Card Container */}
        <Reveal delay={100}>
          <div className="my-8 sm:my-10 p-6 sm:p-10 lg:p-12 glass-card-dark glossy-reflection rounded-3xl border border-gold-brass/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-charcoal-teal-dark/80 backdrop-blur-xl">
            
            {/* Form and Contact Hub Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Interactive Consultation Form Card */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 glass-card-dark glossy-reflection rounded-2xl border border-gold-brass/30 shadow-xl">
                  {submitted ? (
                    <div className="text-center py-10 flex flex-col items-center gap-4">
                      <div className="p-3.5 bg-gold-brass/20 text-gold-brass rounded-full">
                        <CheckCircle2 className="size-10" />
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-gold-brass">
                        Thank You, {name || "Friend"}!
                      </h3>
                      <p className="text-sm text-gold-brass-light/85 max-w-md font-sans font-light">
                        Your consultation inquiry has been transferred to our WhatsApp concierge. Our team will review your specifications and contact you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 text-xs font-bold font-sans uppercase tracking-wider text-gold-brass hover:text-gold-brass-light underline cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5">
                      <div>
                        <h3 className="font-serif text-2xl text-gold-brass mb-1">
                          Book a Complimentary Consultation
                        </h3>
                        <p className="text-xs text-gold-brass-light/80 font-sans">
                          Connect directly with our master furniture artisans and interior stylists.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Tanvir Ahmed"
                            className="w-full px-3.5 py-3 text-sm glass-tile-dark text-gold-brass-light placeholder:text-gold-brass-light/40 border border-gold-brass/30 focus:border-gold-brass rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-brass/40 transition-all font-sans"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+880 1..."
                            className="w-full px-3.5 py-3 text-sm glass-tile-dark text-gold-brass-light placeholder:text-gold-brass-light/40 border border-gold-brass/30 focus:border-gold-brass rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-brass/40 transition-all font-sans"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                          Space of Interest
                        </label>
                        <select
                          value={room}
                          onChange={(e) => setRoom(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm glass-tile-dark text-gold-brass-light border border-gold-brass/30 focus:border-gold-brass rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-brass/40 transition-all font-sans bg-charcoal-teal-dark"
                        >
                          <option value="Living Room Suite">Living Room Suite &amp; Sofas</option>
                          <option value="Master Bedroom Sanctuary">Master Bedroom Sanctuary</option>
                          <option value="Dining Room Ensemble">Dining Room Ensemble</option>
                          <option value="Bespoke Showcase & Consoles">Bespoke Showcase &amp; Consoles</option>
                          <option value="Executive Office & Study">Executive Office &amp; Study</option>
                          <option value="Full Villa / Penthouse Project">Full Villa / Penthouse Project</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[0.68rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                          Project Details or Custom Sizing
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Tell us about your room dimensions, desired wood finish, or styling requirements..."
                          className="w-full px-3.5 py-3 text-sm glass-tile-dark text-gold-brass-light placeholder:text-gold-brass-light/40 border border-gold-brass/30 focus:border-gold-brass rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-brass/40 resize-none transition-all font-sans"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-3">
                        <button
                          type="submit"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 glass-cta text-charcoal-teal font-bold text-xs uppercase tracking-[0.14em] transition-all rounded-full shadow-md hover:scale-[1.02] cursor-pointer"
                        >
                          <MessageSquare className="size-4" />
                          <span>Send via WhatsApp</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleEmailSubmit}
                          className="inline-flex items-center justify-center gap-2 py-4 px-5 glass-btn-teal text-gold-brass hover:text-gold-brass-light font-bold text-xs uppercase tracking-[0.12em] rounded-full border border-gold-brass/40 transition-all hover:scale-[1.01] cursor-pointer"
                        >
                          <Mail className="size-4 text-gold-brass" />
                          <span>Email Us</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Direct Contact Line Card */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 sm:p-8 glass-card-dark glossy-reflection text-gold-brass rounded-2xl border border-gold-brass/30 flex flex-col gap-6 shadow-xl">
                  
                  <div>
                    <span className="text-[0.65rem] font-bold font-sans tracking-[0.2em] text-gold-brass uppercase block mb-1">
                      Direct Contact Line
                    </span>
                    <h3 className="font-serif text-2xl text-gold-brass">
                      Call Our Showroom Directly
                    </h3>
                    <p className="text-xs text-gold-brass-light/80 font-sans mt-1">
                      Speak with Managing Director MD Abul Kalam Bhuiyan or our senior design team.
                    </p>
                  </div>

                  <div className="p-4 glass-tile-dark rounded-xl border border-gold-brass/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-full bg-gold-brass/15 text-gold-brass shadow-md">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold font-sans uppercase tracking-wider text-gold-brass-light">
                          Direct Showroom Phone
                        </p>
                        <a
                          href={site.phoneHref}
                          className="font-serif text-xl sm:text-2xl text-gold-brass hover:text-gold-brass-light transition-colors font-semibold"
                        >
                          {site.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gold-brass-light/85 font-sans">
                    <Mail className="size-4 text-gold-brass shrink-0" />
                    <a href={site.emailConsult} className="hover:text-gold-brass transition-colors">
                      {site.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gold-brass-light/85 font-sans">
                    <MapPin className="size-4 text-gold-brass shrink-0" />
                    <span>{site.fullAddress}</span>
                  </div>

                  <div className="pt-4 border-t border-gold-brass/20 flex flex-col gap-2 font-sans">
                    <div className="flex items-center gap-2 text-[0.7rem] text-gold-brass font-bold">
                      <Sparkles className="size-3.5 text-gold-brass" />
                      <span>Free Space Measurement &amp; Consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-[0.7rem] text-gold-brass-light/80">
                      <ShieldCheck className="size-3.5 text-gold-brass" />
                      <span>10-Year Anti-Borer Hardwood Warranty</span>
                    </div>
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
