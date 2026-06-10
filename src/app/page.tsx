'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { StackSection } from '@/components/sections/StackSection'
import { CortexSection } from '@/components/sections/CortexSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { Footer } from '@/components/Footer'

// SmoothScroll y MagneticCursor se cargan solo en cliente con dynamic import
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
      <SmoothScroll>
        <HeroSection />
        <ServicesSection />
        <StackSection />
        <CortexSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </SmoothScroll>
    </>
  )
}
