"use client";

import Image from "next/image";
import { useState } from "react";
import { collectionsData, Product } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MessageSquare, Sparkles, Check, Ruler } from "lucide-react";

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
      className="relative py-12 sm:py-20 lg:py-28 bg-[#1C1B18] text-ivory overflow-hidden border-b border-ivory/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Area */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-ivory/10">
            <div className="max-w-2xl">
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-walnut uppercase block mb-3">
                Selection 03 · Featured Collections
              </span>
              <h2
                id="collections-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]"
              >
                Curated spaces designed for{" "}
                <em className="italic text-walnut-light font-normal">distinction.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Explore signature ensembles crafted from seasoned teak, dense mahogany, and imported textiles. Every piece is fully customizable to fit your home&apos;s exact floor plan.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Tabs (Mobile Horizontally Scrollable) */}
        <div className="pt-6 pb-8">
          <div
            role="tablist"
            aria-label="Filter collections by room category"
            className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-3 no-scrollbar scroll-rail border-b border-stone-dark/30"
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
                className={`min-h-[44px] px-4 py-2.5 text-[0.7rem] font-bold tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer border-b-2 rounded-t-xs outline-none focus-visible:ring-2 focus-visible:ring-walnut flex items-center gap-2 ${
                  activeTab === tab.key
                    ? "text-white border-walnut bg-white/5"
                    : "text-slate-400 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.key === "all" && <Sparkles className="size-3.5 text-walnut" />}
                <span>{tab.label}</span>
                {activeTab === tab.key && (
                  <span className="ml-1 text-[0.6rem] px-1.5 py-0.5 rounded-full bg-walnut/20 text-walnut-light font-mono">
                    {filteredProducts.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 3 cols Desktop, 2 cols Tablet, Swipeable Snap-Carousel / 1 col Mobile */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 scroll-rail no-scrollbar"
        >
          {filteredProducts.map((product, index) => {
            const waInquiryUrl = getWhatsAppUrl(
              `Hello Heaven Furniture Mart! I am inquiring about "${product.title}" from your ${product.categoryLabel} collection.`
            );

            return (
              <Reveal
                key={product.id}
                delay={index * 60}
                className="shrink-0 snap-center w-[85vw] sm:w-[70vw] md:w-auto h-full"
              >
                <article className="group relative flex flex-col h-full bg-[#1C1B18]/90 border border-stone-dark/30 hover:border-walnut/50 transition-all duration-500 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl">
                  
                  {/* Image Container with Hover Zoom & Floating Badge */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/40">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Floating Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-walnut-light border border-walnut/30 rounded-xs shadow-sm">
                        <Sparkles className="size-3 text-walnut" />
                        {product.badge || product.categoryLabel}
                      </span>
                    </div>

                    {/* Floating Quick Detail Trigger */}
                    {product.dimensions && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.6rem] font-mono text-slate-300 bg-black/60 backdrop-blur-md rounded-xs">
                          <Ruler className="size-3 text-slate-400" />
                          {product.dimensions.split(":")[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                    
                    <div className="flex flex-col gap-2">
                      {/* Category & Price Tag */}
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-walnut">
                          {product.categoryLabel}
                        </span>
                        {product.priceTag && (
                          <span className="text-[0.68rem] font-semibold text-slate-300">
                            {product.priceTag}
                          </span>
                        )}
                      </div>

                      {/* Crisp White Title */}
                      <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-walnut-light transition-colors line-clamp-1">
                        {product.title}
                      </h3>

                      {/* Tagline / Subtitle */}
                      <p className="text-xs text-slate-400 font-light line-clamp-1 italic">
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300/90 font-light leading-relaxed line-clamp-2 mt-1">
                        {product.description}
                      </p>

                      {/* Materials List */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {product.materials.slice(0, 3).map((mat) => (
                          <span
                            key={mat}
                            className="px-2 py-0.5 text-[0.62rem] bg-white/5 border border-white/10 text-slate-300 uppercase tracking-wider rounded-xs"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Minimum 44px Height Mobile-Friendly Action Button */}
                    <div className="pt-3 border-t border-stone-dark/30 flex items-center gap-2">
                      <a
                        href={waInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-walnut hover:bg-walnut-light text-white text-[0.7rem] font-bold uppercase tracking-widest rounded-xs transition-colors shadow-sm cursor-pointer"
                        aria-label={`Enquire about ${product.title} on WhatsApp`}
                      >
                        <MessageSquare className="size-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setActiveDetailModal(product)}
                        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-3 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-white/30 rounded-xs transition-colors cursor-pointer"
                        aria-label={`View full details of ${product.title}`}
                      >
                        <ArrowUpRight className="size-4" />
                      </button>
                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Quick Details Modal */}
      {activeDetailModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveDetailModal(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#1C1B18] border border-stone-dark/50 p-6 sm:p-8 rounded-sm shadow-2xl flex flex-col gap-5 text-ivory max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-stone-dark/40">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-walnut">
                  {activeDetailModal.categoryLabel} · {activeDetailModal.badge || "Masterpiece"}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  {activeDetailModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveDetailModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs bg-black/40">
              <Image
                src={activeDetailModal.image}
                alt={activeDetailModal.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <p className="font-light leading-relaxed">{activeDetailModal.description}</p>
              
              {activeDetailModal.dimensions && (
                <div className="p-3 bg-white/5 border border-white/10 rounded-xs flex items-center gap-2">
                  <Ruler className="size-4 text-walnut" />
                  <span className="text-xs text-slate-200">
                    <strong>Dimensions:</strong> {activeDetailModal.dimensions}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-walnut">
                  Crafting Materials
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeDetailModal.materials.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 text-xs bg-stone/40 border border-stone-dark/40 text-slate-200 rounded-xs flex items-center gap-1.5"
                    >
                      <Check className="size-3 text-walnut" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-dark/40 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(
                  `Hello Heaven Furniture Mart! I want to order/inquire about "${activeDetailModal.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-walnut hover:bg-walnut-light text-white font-bold text-xs uppercase tracking-widest rounded-xs"
              >
                <MessageSquare className="size-4" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveDetailModal(null)}
                className="min-h-[44px] px-6 py-3.5 bg-stone/40 hover:bg-stone/60 text-slate-300 border border-stone-dark/40 text-xs font-semibold uppercase tracking-wider rounded-xs"
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
