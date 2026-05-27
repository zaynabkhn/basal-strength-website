import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Premise } from "@/components/sections/Premise";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { AssessmentProcess } from "@/components/sections/AssessmentProcess";
import { VisualSummary } from "@/components/sections/VisualSummary";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Premise />
      <WhatWeDo />
      <PartnerEcosystem />
      <AssessmentProcess />
      <VisualSummary />
      <Founder />
      <Contact />
      <Footer />
    </>
  );
}