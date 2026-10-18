import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "terminal";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-mono font-medium tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-sm active:scale-[0.98]";

  const sizes = {
    sm: "text-xs px-3 py-1.5 h-8",
    md: "text-sm px-4 py-2.5 h-10",
    lg: "text-base px-6 py-3.5 h-12",
  };

  const variants = {
    primary:
      "bg-accent text-canvas hover:bg-accent-hover font-semibold shadow-sm",
    secondary:
      "bg-surface text-text-primary border border-border-subtle hover:border-border-hover hover:bg-surface-hover",
    outline:
      "border border-border-subtle bg-transparent text-text-primary hover:border-accent hover:text-accent",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-surface/50",
    terminal:
      "bg-canvas border border-border-subtle text-accent hover:border-accent hover:bg-accent/5",
  };

  return (
    <button
      className={cn(baseStyles, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
