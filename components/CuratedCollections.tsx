"use client";

import Image from "next/image";
import { useState } from "react";
import { collectionsData, Product } from "@/lib/data";
import { site, getWhatsAppUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MessageSquare, Check, Sparkles } from "lucide-react";

type FilterCategory = "all" | "living" | "bedroom" | "dining" | "bespoke";

export function CuratedCollections() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeTab === "all"
      ? collectionsData
      : collectionsData.filter((item) => item.category === activeTab);

  const tabs: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All Masterpieces" },
    { key: "living", label: "Living Room" },
    { key: "bedroom", label: "Bedroom Sanctuary" },
    { key: "dining", label: "Dining Suite" },
    { key: "bespoke", label: "Storage & Showcase" },
  ];

  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="relative py-24 sm:py-32 bg-charcoal text-ivory overflow-hidden luxury-noise border-b border-brass/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/15">
            <div>
              <span className="text-[0.68rem] font-bold tracking-[0.22em] text-brass uppercase block mb-3">
                Scene 03 · The Showroom Collection
              </span>
              <h2
                id="collections-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-[1.05]"
              >
                Curated spaces designed for{" "}
                <em className="italic text-brass font-normal">distinction.</em>
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
              Explore signature ensembles crafted from seasoned teak, dense mahogany, and imported textiles. Every piece is customizable to fit your home's exact dimensions.
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-8 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-5 py-2.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 whitespace-nowrap rounded-xs ${
                activeTab === tab.key
                  ? "bg-brass text-charcoal shadow-lg shadow-brass/20 font-bold"
                  : "bg-white/5 hover:bg-white/10 text-ivory/70 hover:text-ivory border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Collections Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredProducts.map((product, index) => {
            const waInquiryUrl = getWhatsAppUrl(
              `Hello Heaven Furniture Mart! I am interested in inquiring about the "${product.title}" from your ${product.categoryLabel} collection.`
            );

            return (
              <Reveal key={product.id} delay={index * 60}>
                <article className="group relative flex flex-col h-full bg-charcoal-surface border border-white/10 hover:border-brass/50 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/60">
                  
                  {/* Image Container with Zoom Effect */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

                    {/* Floating Category Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.16em] uppercase bg-black/70 backdrop-blur-md text-brass border border-brass/40 rounded-xs">
                        {product.categoryLabel}
                      </span>
                    </div>

                    {/* Quick Inquiry Hover Action */}
                    <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={waInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-9 items-center justify-center rounded-full bg-brass text-charcoal hover:bg-brass-light shadow-lg transition-transform hover:scale-110"
                        title="Inquire on WhatsApp"
                        aria-label={`Inquire about ${product.title} on WhatsApp`}
                      >
                        <MessageSquare className="size-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-brass transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs text-brass/90 font-medium tracking-wide mt-1">
                        {product.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-ivory/70 font-light mt-3 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Material Pills */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[0.62rem] font-semibold tracking-wider text-ivory/50 uppercase mb-2">
                        Key Materials & Craft
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.materials.map((mat) => (
                          <span
                            key={mat}
                            className="px-2 py-0.5 text-[0.62rem] bg-white/5 border border-white/10 text-ivory/80 rounded-xs"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      {product.dimensions && (
                        <span className="text-[0.65rem] text-ivory/60 truncate font-mono">
                          {product.dimensions}
                        </span>
                      )}

                      <a
                        href={waInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-[0.68rem] font-bold tracking-[0.14em] uppercase text-brass hover:text-brass-light transition-colors group/link"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>

                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
