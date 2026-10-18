import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          title="EXPERIENCE & MILESTONES"
          subtitle="Chronological track record of development experience, open-source work, and technical projects."
          tag="TIMELINE"
        />

        <div className="space-y-6">
          <Card className="p-8 border-dashed border-border-hover/60 bg-surface/50 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-accent" />
                <h3 className="text-lg font-display font-bold text-text-primary">
                  Backend Developer & Open Source Contributor
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <Calendar className="h-3.5 w-3.5" />
                <span>Present</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">
              [Placeholder] Technical roles, key backend responsibilities, impact metrics, and infrastructure improvements to be detailed in Phase 5.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">Express.js</Badge>
              <Badge variant="outline">REST APIs</Badge>
              <Badge variant="outline">System Design</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
