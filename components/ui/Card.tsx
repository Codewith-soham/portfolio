import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  bordered = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-surface rounded-sm p-6 transition-all duration-200",
        bordered && "border border-border-subtle",
        hoverEffect && "hover:border-border-hover hover:bg-surface-hover/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
