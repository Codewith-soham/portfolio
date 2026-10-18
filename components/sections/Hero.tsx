"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowDownRight, ArrowUpRight, Terminal, Cpu } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = PORTFOLIO_DATA;

  // Stagger animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-18 md:pb-20 border-b border-border-subtle overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Structural Accent Lines (Architectural Grid Framing) */}
      <div
        className="absolute top-0 right-12 md:right-24 w-px h-full bg-border-subtle/30 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-0 w-full h-px bg-border-subtle/25 pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* Main Hero Column (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* 1. Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 flex-wrap"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono tracking-wider uppercase text-accent bg-accent-subtle border border-accent/30 rounded-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>{hero.eyebrow}</span>
              </div>
            </motion.div>

            {/* 2. Dominant Editorial Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-text-primary leading-[0.92] uppercase select-none">
                {hero.headingLines.map((line, idx) => (
                  <span
                    key={idx}
                    className="block transition-colors duration-200 hover:text-accent cursor-default"
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* 3. Supporting Copy */}
            <motion.div variants={itemVariants}>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-xl font-sans font-normal leading-relaxed border-l-2 border-accent/40 pl-4">
                {hero.supportingCopy}
              </p>
            </motion.div>

            {/* 4. Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-canvas font-mono text-sm font-semibold tracking-wide rounded-sm hover:bg-accent-hover active:scale-[0.98] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href={hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface text-text-primary border border-border-subtle font-mono text-sm font-medium tracking-wide rounded-sm hover:border-border-hover hover:text-accent hover:bg-surface-hover active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="h-4 w-4 text-text-muted" />
              </a>
            </motion.div>

            {/* 5. Technical Stack Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 sm:pt-8 border-t border-border-subtle"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted shrink-0">
                  // CORE ENGINE
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {hero.techStrip.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium tracking-wider text-text-secondary bg-surface border border-border-subtle rounded-sm hover:border-accent hover:text-text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Terminal Bio & Active Projects (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6 lg:pl-2">
            {/* Terminal Bio Element */}
            <motion.div
              variants={itemVariants}
              className="bg-surface border border-border-subtle rounded-sm overflow-hidden shadow-md"
              role="region"
              aria-label="Developer Terminal Bio"
            >
              {/* Terminal Header bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-surface-elevated border-b border-border-subtle">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-muted">
                  <Terminal className="h-3 w-3 text-accent" />
                  <span>identity.sh</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3 bg-canvas/90">
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent font-semibold">{hero.terminalBio.prompt}</span>
                </div>

                <div className="text-text-primary font-semibold pl-2 border-l border-border-subtle">
                  {hero.terminalBio.user}
                </div>

                <div className="space-y-1.5 pt-1 pl-2 border-l border-border-subtle text-text-secondary">
                  {hero.terminalBio.outputs.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-accent text-[10px]">&gt;</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] text-text-muted flex items-center gap-2">
                  <span className="inline-block h-2 w-1 bg-accent animate-pulse" />
                  <span>SYSTEM_READY</span>
                </div>
              </div>
            </motion.div>

            {/* Currently Building Metadata Area */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-surface/70 border border-border-subtle rounded-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-accent" />
                  CURRENTLY BUILDING
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
              </div>

              <div className="space-y-2">
                {hero.currentlyBuilding.map((project) => (
                  <div
                    key={project.name}
                    className="flex items-center justify-between p-2.5 bg-canvas/80 border border-border-subtle rounded-sm text-xs font-mono hover:border-border-hover transition-colors"
                  >
                    <span className="font-semibold text-text-primary">
                      {project.name}
                    </span>
                    <span className="text-[10px] text-accent font-medium px-1.5 py-0.5 bg-accent-subtle rounded-sm border border-accent/20">
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
