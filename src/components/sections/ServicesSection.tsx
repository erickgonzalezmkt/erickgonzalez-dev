'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { services } from '@/data/services'
import { ServiceCarousel } from '@/components/ui/animated-service-card'
import { Badge } from '@/components/ui/badge'

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
      },
    })
    tl.from('.services-label', { y: 20, opacity: 0, duration: 0.5 })
    tl.from(
      '.services-title',
      { y: 30, opacity: 0, duration: 0.6 },
      '-=0.2'
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative py-32 px-6 bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <Badge
            variant="outline"
            className="services-label mb-4 border-brand/30 text-brand"
          >
            Servicios
          </Badge>
          <h2 className="services-title text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            No solo diseño.{' '}
            <span className="text-brand">Sistemas completos.</span>
          </h2>
          <p className="services-title mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada servicio está diseñado para funcionar como un engranaje de tu
            máquina de crecimiento. Web + automatización + datos = resultados.
          </p>
        </div>

        {/* Carousel */}
        <ServiceCarousel services={services} />
      </div>
    </section>
  )
}
