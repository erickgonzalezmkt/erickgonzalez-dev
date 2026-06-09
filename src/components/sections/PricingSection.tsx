'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from 'motion/react'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { plans } from '@/data/pricing'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function PlanCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(cardRef.current, {
      rotateX: y * -6,
      rotateY: x * 6,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '800px' }}
      className={`relative ${plan.highlighted ? 'lg:-mt-4 lg:mb-[-16px] z-10' : ''}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-2xl border p-8 backdrop-blur-sm h-full flex flex-col transition-all duration-500 cursor-default ${
          plan.highlighted
            ? 'border-brand/40 bg-gradient-to-b from-brand/10 to-accent/5 shadow-[0_0_40px_-8px_rgba(6,182,212,0.2)]'
            : 'border-border-subtle bg-surface/30 hover:border-brand/20'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Highlighted badge */}
        {plan.highlighted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand text-primary-foreground text-xs font-semibold">
              <Zap size={12} />
              Más popular
            </span>
          </div>
        )}

        <div style={{ transform: 'translateZ(20px)' }}>
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              {plan.platform}
            </span>
            <h3 className="text-2xl font-heading font-bold text-foreground mt-1">
              {plan.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {plan.description}
            </p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <span className="text-4xl font-heading font-black text-foreground">
              {plan.price}
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-muted-foreground/80"
              >
                <Check
                  size={16}
                  className={`mt-0.5 shrink-0 ${
                    plan.highlighted ? 'text-brand' : 'text-muted-foreground/50'
                  }`}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contacto" className="block">
            <Button
              className={`w-full rounded-full ${
                plan.highlighted
                  ? 'bg-brand text-primary-foreground hover:bg-brand-dark'
                  : ''
              }`}
              variant={plan.highlighted ? 'default' : 'outline'}
            >
              Empezar
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.pricing-header',
        start: 'top 85%',
      },
    })
    tl.from('.pricing-label', { y: 20, opacity: 0, duration: 0.5 })
    tl.from('.pricing-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
    tl.from('.pricing-desc', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="planes"
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="pricing-header text-center mb-16">
          <Badge
            variant="outline"
            className="pricing-label mb-4 border-amber-500/30 text-amber-400"
          >
            Planes
          </Badge>
          <h2 className="pricing-title text-4xl sm:text-5xl font-heading font-black tracking-tight">
            Inversión{' '}
            <span className="text-brand">transparente.</span>
          </h2>
          <p className="pricing-desc mt-4 text-muted-foreground max-w-xl mx-auto">
            Desde landing pages rápidas hasta sistemas completos de crecimiento.
            Escala cuando quieras.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
