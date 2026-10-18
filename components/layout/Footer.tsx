import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Terminal, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-canvas mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand and identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-accent" />
              <span className="font-display font-bold text-sm tracking-tight text-text-primary">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs text-text-secondary font-mono max-w-sm">
              Architecting scalable backend ecosystems, high-throughput APIs, and reliable data layers.
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
              // Direct Links
            </span>
            <div className="flex flex-col space-y-2">
              {PORTFOLIO_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent transition-colors"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="h-3 w-3 text-text-muted group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* System status */}
          <div className="space-y-3 md:text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
              // System Info
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary bg-surface px-3 py-1.5 rounded-sm border border-border-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Next.js • TypeScript • Tailwind</span>
            </div>
            <p className="text-[11px] font-mono text-text-muted">
              © {currentYear} {PORTFOLIO_DATA.personal.name}. All systems operational.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
