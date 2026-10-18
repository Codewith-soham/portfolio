import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "terminal";
}

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-surface border-border-subtle text-text-secondary hover:border-border-hover",
    accent: "bg-accent/10 border-accent/30 text-accent font-medium",
    outline: "border-border-subtle text-text-secondary bg-transparent hover:text-text-primary hover:border-border-hover",
    terminal: "bg-canvas border-border-subtle text-text-secondary font-mono before:content-['$'] before:mr-1.5 before:text-accent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border rounded-sm transition-colors duration-150",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
