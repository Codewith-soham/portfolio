import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Code2, GitBranch, Terminal } from "lucide-react";

export function SelectedWorkSection() {
  return (
    <section id="work" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          title="SELECTED SYSTEMS & WORK"
          subtitle="A curated showcase of backend systems, API architectures, database layers, and distributed utilities."
          tag="CASE_STUDIES"
        />

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-dashed border-border-hover/60 bg-surface/50 p-8 flex flex-col justify-between min-h-[260px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="accent">SYSTEM_01</Badge>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Node.js / Express / MongoDB</span>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary">
                High-Throughput API Gateway & Auth Service
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                [Placeholder] Detailed architectural breakdown, endpoint contract specifications, JWT authentication pipeline, and rate-limiting middleware to be added in Phase 3.
              </p>
            </div>
            <div className="pt-6 border-t border-border-subtle/50 flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1">
                <GitBranch className="h-3.5 w-3.5 text-accent" />
                <span>REST API • Role-Based Access</span>
              </span>
              <span className="text-accent/80 font-semibold">PENDING CASE STUDY →</span>
            </div>
          </Card>

          <Card className="border-dashed border-border-hover/60 bg-surface/50 p-8 flex flex-col justify-between min-h-[260px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">SYSTEM_02</Badge>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>TypeScript / Caching / Queue</span>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary">
                Distributed Task Processor & Event Engine
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                [Placeholder] Asynchronous job distribution, Redis queue integration, idempotency mechanisms, and error telemetry architecture.
              </p>
            </div>
            <div className="pt-6 border-t border-border-subtle/50 flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1">
                <GitBranch className="h-3.5 w-3.5 text-accent" />
                <span>Event-Driven • Async Workflows</span>
              </span>
              <span className="text-accent/80 font-semibold">PENDING CASE STUDY →</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
