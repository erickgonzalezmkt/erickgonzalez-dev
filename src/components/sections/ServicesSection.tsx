'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from 'motion/react'
import { services } from '@/data/services'
import { Badge } from '@/components/ui/badge'

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const Icon = service.icon

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(glowRef.current, {
      x: x - 150,
      y: y - 150,
      opacity: 1,
      duration: 0.3,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="service-card relative group cursor-default rounded-2xl border border-border-subtle bg-surface/50 backdrop-blur-sm p-8 transition-colors hover:bg-surface-hover/50 hover:border-brand/20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow follow */}
        <div
          ref={glowRef}
          className="absolute pointer-events-none w-[300px] h-[300px] rounded-full opacity-0 transition-opacity"
          style={{
            background: `radial-gradient(circle, ${service.gradient.includes('brand') ? 'rgba(6,182,212,0.1)' : service.gradient.includes('accent') ? 'rgba(168,85,247,0.1)' : 'rgba(16,185,129,0.1)'}, transparent 70%)`,
          }}
        />

        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 border border-border-subtle`}
          >
            <Icon size={28} className="text-brand" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-foreground mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-muted-foreground/80"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

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
          <h2 className="services-title text-4xl sm:text-5xl font-heading font-black tracking-tight">
            No solo diseño.{' '}
            <span className="text-brand">Sistemas completos.</span>
          </h2>
          <p className="services-title mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada servicio está diseñado para funcionar como un engranaje de tu
            máquina de crecimiento. Web + automatización + datos = resultados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
