import React from "react";
import { Arrow } from "@/components/Arrow";

type Variant = "primary" | "secondary" | "brass" | "ghost" | "ivory";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-ivory border border-brass/40 hover:bg-charcoal-surface hover:border-brass shadow-lg shadow-black/20 hover:shadow-brass/10",
  secondary:
    "bg-ivory text-charcoal border border-brown/20 hover:bg-white hover:border-brass/60 shadow-md",
  brass:
    "bg-brass text-charcoal font-bold hover:bg-brass-light border border-brass-light shadow-md shadow-brass/20",
  ghost:
    "bg-transparent text-ivory border border-white/30 hover:border-brass hover:bg-white/5 hover:text-white",
  ivory:
    "bg-ivory text-charcoal hover:bg-white hover:text-charcoal border border-ivory",
};

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  arrowDirection?: "right" | "up-right" | "down";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  arrow = true,
  arrowDirection = "right",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel}>
        <span>{children}</span>
        {arrow && <Arrow direction={arrowDirection} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {arrow && <Arrow direction={arrowDirection} />}
    </button>
  );
}
