"use client";

import { useState, useEffect } from "react";
import { site } from "@/lib/site";
import { MessageSquare, X } from "lucide-react";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || closed) return null;

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      style={{
        animation: "hero-float-in 0.5s var(--ease-luxury) both",
      }}
    >
      {/* Floating Tooltip */}
      <div className="hidden md:flex items-center gap-2 px-3.5 py-2 glass-dark text-ivory rounded-full shadow-lg text-xs">
        <span className="relative flex size-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
        </span>
        <span className="text-[0.68rem] font-medium text-ivory/85">
          Chat with Showroom Concierge
        </span>
        <button
          type="button"
          onClick={() => setClosed(true)}
          className="ml-1 text-ivory/40 hover:text-ivory cursor-pointer"
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
        className="group relative flex size-13 sm:size-14 items-center justify-center rounded-full bg-charcoal hover:bg-earth text-ivory border-2 border-walnut shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Chat directly on WhatsApp with Heaven Furniture Mart"
      >
        <MessageSquare className="size-6 text-walnut group-hover:text-walnut-light transition-colors" />
      </a>
    </aside>
  );
}
