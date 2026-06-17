'use client'

import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { N8nFlowSection } from '@/components/sections/N8nFlowSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { StackSection } from '@/components/sections/StackSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { MultistepFormSection } from '@/components/sections/MultistepFormSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { Footer } from '@/components/Footer'

const SmoothScroll = dynamic(
  () => import('@/components/effects/SmoothScroll').then((m) => ({ default: m.SmoothScroll })),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Navigation />
      <SmoothScroll>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <N8nFlowSection />
        <TestimonialsSection />
        <StackSection />
        <PricingSection />
        <MultistepFormSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </SmoothScroll>
    </>
  )
}
