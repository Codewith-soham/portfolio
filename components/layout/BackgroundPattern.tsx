import React from "react";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-70" />
      {/* Subtle top ambient radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/[0.03] blur-[120px] rounded-full" />
    </div>
  );
}
