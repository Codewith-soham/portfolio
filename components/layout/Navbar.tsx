"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Menu, X, Terminal } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity & Terminal Prompt */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="h-8 w-8 rounded-sm bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent group-hover:border-accent transition-colors">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-text-primary group-hover:text-accent transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
              {PORTFOLIO_DATA.personal.title}
            </span>
          </div>
        </a>

        {/* Center: Live Status Indicator (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-sm bg-surface border border-border-subtle text-xs font-mono text-text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{PORTFOLIO_DATA.personal.status}</span>
        </div>

        {/* Right: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {PORTFOLIO_DATA.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors py-1"
            >
              <span className="text-text-muted text-[10px] group-hover:text-accent transition-colors">
                {item.number}
              </span>
              <span>{item.label}</span>
            </a>
          ))}

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-sm text-xs font-mono font-medium bg-accent text-canvas hover:bg-accent-hover transition-colors"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-surface px-4 pt-2 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-2 py-2 text-xs font-mono text-text-secondary border-b border-border-subtle mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
            <span>{PORTFOLIO_DATA.personal.status}</span>
          </div>
          {PORTFOLIO_DATA.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-sm font-mono text-text-secondary hover:text-accent border-b border-border-subtle/50"
            >
              <span>{item.label}</span>
              <span className="text-xs text-text-muted">{item.number}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-4 py-2 text-xs font-mono font-semibold bg-accent text-canvas rounded-sm"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
