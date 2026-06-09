'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from 'motion/react'
import { techStack, type TechItem } from '@/data/stack'
import { Badge } from '@/components/ui/badge'

const categoryLabels: Record<TechItem['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  automation: 'Automatización',
  infra: 'Infraestructura',
}

const categoryColors: Record<TechItem['category'], string> = {
  frontend: 'border-brand/30 text-brand',
  backend: 'border-emerald-500/30 text-emerald-400',
  automation: 'border-accent/30 text-accent',
  infra: 'border-amber-500/30 text-amber-400',
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(cardRef.current, {
      rotateX: y * -10,
      rotateY: x * 10,
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
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      style={{ perspective: '600px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tech-card group cursor-default rounded-xl border border-border-subtle bg-surface/30 backdrop-blur-sm px-5 py-4 flex items-center justify-center hover:border-brand/20 hover:bg-surface-hover/30 transition-all duration-300"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span
          className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
          style={{ transform: 'translateZ(10px)' }}
        >
          {tech.name}
        </span>
      </div>
    </motion.div>
  )
}

export function StackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.stack-header',
        start: 'top 85%',
      },
    })
    tl.from('.stack-label', { y: 20, opacity: 0, duration: 0.5 })
    tl.from('.stack-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
  }, { scope: sectionRef })

  const categories = ['frontend', 'backend', 'automation', 'infra'] as const

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="stack-header text-center mb-16">
          <Badge
            variant="outline"
            className="stack-label mb-4 border-emerald-500/30 text-emerald-400"
          >
            Tech Stack
          </Badge>
          <h2 className="stack-title text-4xl sm:text-5xl font-heading font-black tracking-tight">
            Tecnología{' '}
            <span className="text-brand">de clase mundial.</span>
          </h2>
          <p className="stack-title mt-4 text-muted-foreground max-w-xl mx-auto">
            Stack moderno, performance extrema. Cada herramienta elegida por su
            capacidad de escalar.
          </p>
        </div>

        {/* Category tabs */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[category]}`}
                >
                  {categoryLabels[category]}
                </span>
                <div className="flex-1 h-px bg-border-subtle" />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {techStack
                  .filter((t) => t.category === category)
                  .map((tech, i) => (
                    <TechCard key={tech.name} tech={tech} index={i} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
