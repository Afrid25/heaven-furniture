import React from "react";
import { Arrow } from "@/components/Arrow";

type Variant = "primary" | "secondary" | "walnut" | "ghost" | "ivory" | "glass";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-ivory border border-charcoal hover:bg-earth transition-colors shadow-sm",
  secondary:
    "bg-stone text-charcoal border border-stone-dark/50 hover:bg-stone-dark/30 transition-colors",
  walnut:
    "glass-cta text-ivory font-bold",
  ghost:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-walnut hover:text-walnut transition-colors",
  ivory:
    "bg-ivory text-charcoal hover:bg-stone border border-stone transition-colors",
  glass:
    "glass-warm text-charcoal hover:border-walnut/40 transition-all",
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
