import React from "react";

export function Arrow({
  className = "",
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "up-right" | "down";
}) {
  if (direction === "up-right") {
    return (
      <svg
        className={`size-4 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (direction === "down") {
    return (
      <svg
        className={`size-4 shrink-0 transition-transform duration-500 ease-out group-hover:translate-y-1 ${className}`}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M10 3V17M10 17L4 11M10 17L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg
      className={`size-4 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1.5 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
