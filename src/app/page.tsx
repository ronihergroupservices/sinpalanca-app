import { Navbar } from "@/components/landing/navbar";
import { ActivityStrip } from "@/components/landing/activity-strip";
import { FounderSection } from "@/components/landing/founder-section";
import { JobMatchSection } from "@/components/landing/job-match-section";
import { PlatformsStrip } from "@/components/landing/platforms-strip";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import {
  AtsSection,
  DeliverablesSection,
  FaqSection,
  FinalCta,
  Footer,
  Hero,
  PricingSection,
  ProblemSection,
  ProcessSection,
  StorySection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" className="overflow-x-clip bg-white text-[var(--ink)]">
        <Hero />
        <PlatformsStrip />
        <ProblemSection />
        <AtsSection />
        <ProcessSection />
        <DeliverablesSection />
        <ActivityStrip />
        <PricingSection />
        <FounderSection />
        <JobMatchSection />
        <TestimonialsSection />
        <StorySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
