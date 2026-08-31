"use client";

import { useState, useEffect } from "react";
import { site } from "@/lib/site";
import { MessageSquare, X } from "lucide-react";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || closed) return null;

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Floating Tooltip Pill */}
      <div className="hidden md:flex items-center gap-2 px-3.5 py-2 glass-charcoal text-ivory rounded-full border border-brass/40 shadow-xl text-xs">
        <span className="relative flex size-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
        </span>
        <span className="text-[0.68rem] font-medium text-ivory/90">
          Chat with Showroom Concierge
        </span>
        <button
          type="button"
          onClick={() => setClosed(true)}
          className="ml-1 text-ivory/50 hover:text-ivory"
          aria-label="Dismiss message"
        >
          <X className="size-3" />
        </button>
      </div>

      {/* Floating Action Button */}
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex size-13 sm:size-14 items-center justify-center rounded-full bg-charcoal hover:bg-charcoal-surface text-ivory border-2 border-brass shadow-2xl shadow-black/50 transition-transform duration-300 hover:scale-110"
        aria-label="Chat directly on WhatsApp with Heaven Furniture Mart"
      >
        <span className="absolute -inset-1 rounded-full bg-brass/20 animate-ping -z-10" />
        <MessageSquare className="size-6 text-brass group-hover:text-brass-light transition-colors" />
      </a>
    </aside>
  );
}
