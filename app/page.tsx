import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Premise } from "@/components/sections/Premise";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { AssessmentProcess } from "@/components/sections/AssessmentProcess";
import { VisualSummary } from "@/components/sections/VisualSummary";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Premise />
        <WhatWeDo />
        <PartnerEcosystem />
        <AssessmentProcess />
        <VisualSummary />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}