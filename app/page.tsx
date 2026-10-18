import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";
import { Hero } from "@/components/sections/Hero";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EngineeringApproachSection } from "@/components/sections/EngineeringApproachSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-accent selection:text-canvas">
      {/* Visual background texture & subtle grid */}
      <BackgroundPattern />

      {/* Navigation Header Shell */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Phase 2: Hero Section */}
        <Hero />

        {/* Subsequent sections (Placeholders awaiting respective phases) */}
        <SelectedWorkSection />
        <AboutSection />
        <EngineeringApproachSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
