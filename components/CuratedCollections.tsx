"use client";

import Image from "next/image";
import { useState } from "react";
import { collectionsData, Product } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MessageSquare, Sparkles, Check, Ruler, X } from "lucide-react";

type FilterCategory = "all" | "living" | "bedroom" | "dining" | "bespoke";

export function CuratedCollections() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("all");
  const [activeDetailModal, setActiveDetailModal] = useState<Product | null>(null);

  const filteredProducts =
    activeTab === "all"
      ? collectionsData
      : collectionsData.filter((item) => item.category === activeTab);

  const tabs: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All Collections" },
    { key: "living", label: "Living Room" },
    { key: "bedroom", label: "Bedroom Sanctuary" },
    { key: "dining", label: "Dining Suite" },
    { key: "bespoke", label: "Storage & Showcase" },
  ];

  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="relative py-16 sm:py-24 lg:py-32 bg-charcoal-teal text-gold-brass overflow-hidden border-b border-gold-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Area */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-gold-brass/25">
            <div className="max-w-2xl">
              <span className="text-[0.68rem] font-bold font-sans tracking-[0.22em] text-gold-brass uppercase block mb-3">
                Featured Collections
              </span>
              <h2
                id="collections-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-gold-brass tracking-tight leading-[1.05]"
              >
                Curated spaces designed for{" "}
                <em className="italic text-gold-brass-light font-normal">distinction.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-gold-brass-light/85 font-sans font-light leading-relaxed">
              Explore signature ensembles crafted from seasoned teak, dense mahogany, and imported textiles. Every piece is fully customizable to fit your home&apos;s exact floor plan.
            </p>
          </div>
        </Reveal>

        {/* Master Section Card Container */}
        <Reveal delay={100}>
          <div className="my-8 sm:my-10 p-5 sm:p-8 lg:p-10 glass-card-dark glossy-reflection rounded-3xl border border-gold-brass/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-charcoal-teal-dark/80 backdrop-blur-xl">
            
            {/* Category Filter Tabs Bar */}
            <div className="pb-8">
              <div
                role="tablist"
                aria-label="Filter collections by room category"
                className="glass-card-dark p-2 rounded-2xl border border-gold-brass/25 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-rail shadow-inner"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    role="tab"
                    type="button"
                    id={`tab-${tab.key}`}
                    aria-selected={activeTab === tab.key}
                    aria-controls={`tabpanel-${tab.key}`}
                    onClick={() => setActiveTab(tab.key)}
                    className={`min-h-[42px] px-4 py-2 text-[0.68rem] sm:text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer rounded-xl outline-none flex items-center gap-2 ${
                      activeTab === tab.key
                        ? "bg-option-yellow text-deep-brown font-bold shadow-md border border-gold-brass/50 scale-[1.02]"
                        : "text-gold-brass/80 hover:text-gold-brass-light hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {tab.key === "all" && <Sparkles className="size-3.5 text-gold-brass" />}
                    <span>{tab.label}</span>
                    {activeTab === tab.key && (
                      <span className="ml-1 text-[0.6rem] px-1.5 py-0.5 rounded-full bg-deep-brown/15 text-deep-brown font-mono font-bold">
                        {filteredProducts.length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Responsive Grid (2 Columns on Mobile, 3 on Desktop) */}
            <div
              role="tabpanel"
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
            >
              {filteredProducts.map((product, index) => {
                const waInquiryUrl = getWhatsAppUrl(
                  `Hello Heaven Furniture Mart! I am inquiring about "${product.title}" from your ${product.categoryLabel} collection.`
                );

                return (
                  <Reveal
                    key={product.id}
                    delay={index * 60}
                    className="w-full h-full"
                  >
                    <article className="group relative flex flex-col h-full glass-card-dark glossy-reflection rounded-xl sm:rounded-2xl overflow-hidden border border-gold-brass/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      
                      {/* Image Container with Responsive Aspect Ratio & Floating Badges */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/50">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-teal-dark/90 via-black/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                        {/* Floating Badge */}
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 text-[0.52rem] sm:text-[0.62rem] font-bold uppercase tracking-wider glass-card-dark text-gold-brass rounded-full border border-gold-brass/30 shadow-md backdrop-blur-md max-w-[90px] sm:max-w-none truncate">
                            <Sparkles className="size-2.5 sm:size-3 text-gold-brass shrink-0" />
                            <span className="truncate">{product.badge || product.categoryLabel}</span>
                          </span>
                        </div>

                        {/* Floating Dimension Tag */}
                        {product.dimensions && (
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 hidden sm:block">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.6rem] font-mono text-gold-brass-light glass-card-dark rounded-full border border-gold-brass/30 shadow-md backdrop-blur-md">
                              <Ruler className="size-3 text-gold-brass" />
                              {product.dimensions.split(":")[0]}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content Body */}
                      <div className="p-3 sm:p-6 flex flex-col flex-1 justify-between gap-2.5 sm:gap-4">
                        
                        <div className="flex flex-col gap-1 sm:gap-2">
                          {/* Category & Price Tag */}
                          <div className="flex items-center justify-between gap-1 text-xs">
                            <span className="text-[0.55rem] sm:text-[0.65rem] font-bold font-sans uppercase tracking-wider text-gold-brass truncate">
                              {product.categoryLabel}
                            </span>
                          </div>

                          {/* Product Title */}
                          <h3 className="font-serif text-sm sm:text-2xl text-gold-brass group-hover:text-gold-brass-light transition-colors line-clamp-1 leading-snug">
                            {product.title}
                          </h3>

                          {/* Tagline / Subtitle */}
                          <p className="text-[0.65rem] sm:text-xs text-gold-brass-light/70 font-light italic line-clamp-1">
                            {product.tagline}
                          </p>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-gold-brass-light/85 font-sans font-light leading-relaxed line-clamp-2 hidden sm:block mt-1">
                            {product.description}
                          </p>

                          {/* Materials List */}
                          <div className="flex flex-wrap gap-1 pt-1 sm:pt-2">
                            {product.materials.slice(0, 2).map((mat) => (
                              <span
                                key={mat}
                                className="px-1.5 py-0.5 text-[0.52rem] sm:text-[0.62rem] glass-tile-dark text-gold-brass-light border border-gold-brass/25 uppercase tracking-wider rounded-full font-sans truncate max-w-full"
                              >
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2 sm:pt-3 border-t border-gold-brass/20 flex items-center gap-1.5 sm:gap-2">
                          <a
                            href={waInquiryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[38px] sm:min-h-[44px] flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-3 glass-cta text-charcoal-teal text-[0.6rem] sm:text-[0.7rem] font-bold uppercase tracking-wider sm:tracking-widest rounded-full transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                            aria-label={`Enquire about ${product.title} on WhatsApp`}
                          >
                            <MessageSquare className="size-3 sm:size-4 shrink-0" />
                            <span className="hidden sm:inline">Enquire on WhatsApp</span>
                            <span className="sm:hidden">WhatsApp</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => setActiveDetailModal(product)}
                            className="min-h-[38px] min-w-[38px] sm:min-h-[44px] sm:min-w-[44px] inline-flex items-center justify-center p-2 sm:p-3 glass-btn-teal text-gold-brass hover:text-gold-brass-light border border-gold-brass/40 rounded-full transition-all cursor-pointer hover:scale-105 shrink-0"
                            aria-label={`View full details of ${product.title}`}
                          >
                            <ArrowUpRight className="size-3.5 sm:size-4" />
                          </button>
                        </div>

                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </Reveal>

      </div>

      {/* Quick Details Modal */}
      {activeDetailModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveDetailModal(null)}
        >
          <div
            className="relative w-full max-w-xl glass-card-dark glossy-reflection p-6 sm:p-8 rounded-2xl text-gold-brass border border-gold-brass/40 max-h-[90vh] overflow-y-auto bg-charcoal-teal-dark/95 backdrop-blur-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-gold-brass/25">
              <div>
                <span className="text-[0.65rem] font-bold font-sans uppercase tracking-widest text-gold-brass-light">
                  {activeDetailModal.categoryLabel} · {activeDetailModal.badge || "Masterpiece"}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-gold-brass mt-1">
                  {activeDetailModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveDetailModal(null)}
                className="p-2 text-gold-brass-light hover:text-gold-brass rounded-full glass-btn-teal"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/50 my-4 border border-gold-brass/25">
              <Image
                src={activeDetailModal.image}
                alt={activeDetailModal.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 text-sm text-gold-brass-light/90">
              <p className="font-sans font-light leading-relaxed">{activeDetailModal.description}</p>
              
              {activeDetailModal.dimensions && (
                <div className="p-3 glass-tile-dark border border-gold-brass/25 rounded-xl flex items-center gap-2">
                  <Ruler className="size-4 text-gold-brass" />
                  <span className="text-xs text-gold-brass-light font-sans">
                    <strong className="text-gold-brass">Dimensions:</strong> {activeDetailModal.dimensions}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[0.65rem] font-bold font-sans uppercase tracking-wider text-gold-brass">
                  Crafting Materials
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeDetailModal.materials.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 text-xs glass-tile-dark border border-gold-brass/30 text-gold-brass-light rounded-full flex items-center gap-1.5 font-sans"
                    >
                      <Check className="size-3 text-gold-brass" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gold-brass/25 flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={getWhatsAppUrl(
                  `Hello Heaven Furniture Mart! I want to order/inquire about "${activeDetailModal.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex-1 flex items-center justify-center gap-2 py-3.5 px-6 glass-cta text-charcoal-teal font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
              >
                <MessageSquare className="size-4" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveDetailModal(null)}
                className="min-h-[44px] px-6 py-3.5 glass-btn-teal text-gold-brass border border-gold-brass/40 text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
