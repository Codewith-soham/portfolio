import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          title="ENGINEERING IDENTITY & BACKGROUND"
          subtitle="Mindset, technical foundations, and server-side problem-solving philosophy."
          tag="BIOGRAPHY"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-8 space-y-6">
            <h3 className="text-2xl font-display font-bold text-text-primary">
              Obsessed with server reliability, clean API contracts, and scalable mechanics.
            </h3>
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed font-sans">
              <p>
                My focus isn’t just writing code that runs—it’s architecting backend systems that are maintainable, testable, and resilient under load. I take deep satisfaction in designing thoughtful data models, establishing secure authentication handshakes, and optimizing queries.
              </p>
              <p className="text-text-muted">
                [Placeholder] Detailed background narrative, transition into backend distributed systems, and technical journey to be expanded in upcoming phases.
              </p>
            </div>
          </Card>

          <Card className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                // Core Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.coreTech.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
                // Active Deep Dives
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.learningTech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
