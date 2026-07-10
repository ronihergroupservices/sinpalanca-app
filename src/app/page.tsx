import { Navbar } from "@/components/landing/navbar";
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
        <ProblemSection />
        <AtsSection />
        <ProcessSection />
        <DeliverablesSection />
        <PricingSection />
        <StorySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
