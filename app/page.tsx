import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { FinancialImpactSection } from "@/components/financial-impact-section"
import { WhatWeBuildSection } from "@/components/what-we-build-section"
import { CaseStudySection } from "@/components/case-study-section"
import { EngagementSection } from "@/components/engagement-section"
import { SecuritySection } from "@/components/security-section"
import { WhyNowSection } from "@/components/why-now-section"
import { CloseSection } from "@/components/close-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FinancialImpactSection />
      <WhatWeBuildSection />
      <CaseStudySection />
      <EngagementSection />
      <SecuritySection />
      <WhyNowSection />
      <CloseSection />
      <SiteFooter />
    </main>
  )
}
