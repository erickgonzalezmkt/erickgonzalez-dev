'use client'

import dynamic from 'next/dynamic'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
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

const MagneticCursor = dynamic(
  () => import('@/components/effects/MagneticCursor').then((m) => ({ default: m.MagneticCursor })),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <MagneticCursor />
      <Navigation />
      <SmoothScroll>
        <HeroSection />
        <ServicesSection />
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
