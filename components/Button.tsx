import React from "react";
import { Arrow } from "@/components/Arrow";

type Variant = "primary" | "secondary" | "walnut" | "ghost" | "ivory" | "glass";

const variants: Record<Variant, string> = {
  primary:
    "glass-cta glossy-reflection text-charcoal-teal font-bold shadow-md hover:shadow-xl",
  secondary:
    "glass-btn-teal glossy-reflection text-ivory font-bold shadow-md hover:shadow-xl",
  walnut:
    "glass-cta glossy-reflection text-charcoal-teal font-bold shadow-md hover:shadow-xl",
  ghost:
    "glass-btn-teal glossy-reflection text-ivory font-bold shadow-md hover:shadow-xl",
  ivory:
    "glass-warm glossy-reflection text-deep-brown font-bold shadow-md hover:shadow-xl",
  glass:
    "glass-btn-teal glossy-reflection text-ivory font-bold shadow-md hover:shadow-xl",
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
  const baseClasses = `group inline-flex min-h-12 items-center justify-center gap-3 px-7 py-3.5 text-[0.72rem] font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 ${variants[variant]} ${className}`;

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
