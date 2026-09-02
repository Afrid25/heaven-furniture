"use client";

import { Reveal } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section
      aria-label="Heaven Furniture brand philosophy"
      className="relative py-28 sm:py-36 lg:py-44 bg-ivory text-deep-brown overflow-hidden border-t border-b border-stone-dark/30"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <Reveal>
          <div className="flex flex-col items-center gap-8">
            {/* Section Counter */}
            <span className="text-[0.65rem] font-bold font-sans tracking-[0.25em] uppercase text-wood-tan">
              08 · Our Philosophy
            </span>

            {/* Primary Editorial Typography */}
            <h2
              className="font-serif leading-[1.08] tracking-[-0.02em] text-deep-brown"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.6rem)" }}
            >
              We don&rsquo;t build furniture
              <br className="hidden sm:block" />
              {" "}for spaces.
              <br />
              We craft{" "}
              <em className="italic text-gold-brass font-normal">
                heirlooms
              </em>{" "}
              for
              <br className="hidden sm:block" />
              {" "}the families who live in them.
            </h2>

            {/* Divider */}
            <div
              className="w-12 h-px bg-gold-brass/40"
              aria-hidden="true"
            />

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-deep-brown/80 font-sans font-light leading-relaxed max-w-lg">
              Every joint, every finish, every curve is a commitment to
              the homes that trust us with their comfort and legacy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
