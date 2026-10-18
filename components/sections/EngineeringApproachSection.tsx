import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Layers, Lock, Cpu, Network } from "lucide-react";

export function EngineeringApproachSection() {
  const principles = [
    {
      icon: Network,
      title: "API First & Deterministic Contracts",
      desc: "Explicit request validation, granular status codes, idempotent mutate operations, and backward-compatible versioning.",
    },
    {
      icon: Lock,
      title: "Zero-Trust Security & Token Pipelines",
      desc: "Stateless JWT lifecycle, short-lived tokens with secure refresh mechanisms, and strict authorization layers.",
    },
    {
      icon: Layers,
      title: "Pragmatic Data Modeling",
      desc: "Relational vs. document trade-offs, indexing strategies, write vs. read optimization, and schema integrity.",
    },
    {
      icon: Cpu,
      title: "Resilience & Observability",
      desc: "Graceful error recovery, structured JSON telemetry, structured logging, and resource leak prevention.",
    },
  ];

  return (
    <section id="engineering" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="ENGINEERING APPROACH & PRINCIPLES"
          subtitle="How I think about backend infrastructure, architectural trade-offs, and building systems that scale."
          tag="PHILOSOPHY"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <Card key={idx} className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-sm bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-text-muted">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary">
                  {principle.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {principle.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
