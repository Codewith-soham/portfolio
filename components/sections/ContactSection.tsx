import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Mail, ArrowUpRight, MessageSquareCode } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          title="INITIATE CONTACT / COLLABORATE"
          subtitle="Open to discussing backend architectures, engineering roles, and scalable distributed projects."
          tag="COMMUNICATION"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-mono text-xs">
                <MessageSquareCode className="h-4 w-4" />
                <span>DIRECT_INBOX</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                Let’s build something performant and resilient together.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                Whether you’re looking to scale backend infrastructure, design an API contract, or explore engineering opportunities—drop a line.
              </p>
            </div>

            <div className="pt-4">
              <a href="mailto:contact@sohamghadge.dev">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <Mail className="h-4 w-4" />
                  contact@sohamghadge.dev
                </Button>
              </a>
            </div>
          </Card>

          <Card className="p-8 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted block">
              // Available Channels
            </span>
            <div className="space-y-3">
              {PORTFOLIO_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-canvas/60 border border-border-subtle rounded-sm hover:border-accent group transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {social.name}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {social.handle}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
