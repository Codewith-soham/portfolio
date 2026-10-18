import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  tag,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3 mb-12", className)}>
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-text-muted">
        <span className="text-accent font-semibold">// {number}</span>
        <span className="h-px flex-1 max-w-16 bg-border-subtle" />
        {tag && <span>{tag}</span>}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-text-secondary max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
