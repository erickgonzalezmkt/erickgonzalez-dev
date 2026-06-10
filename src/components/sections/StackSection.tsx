'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from 'motion/react'
import { techStack, type TechItem } from '@/data/stack'
import { TechIcon } from '@/components/ui/tech-icons'
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
  automation: 'border-amber-500/30 text-amber-400',
  infra: 'border-purple-500/30 text-purple-400',
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="group relative flex cursor-default items-center gap-3 rounded-xl border border-foreground/10 bg-background/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:bg-brand/[0.04] hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.15)]">
        {/* Icon */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center">
          <TechIcon
            name={tech.name}
            className="h-6 w-6 text-foreground/60 transition-colors duration-300 group-hover:text-brand"
          />
        </div>

        {/* Name */}
        <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
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
      className="relative py-24 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="stack-header text-center mb-14">
          <Badge
            variant="outline"
            className="stack-label mb-4 border-emerald-500/30 text-emerald-400"
          >
            Tech Stack
          </Badge>
          <h2 className="stack-title text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            Tecnología{' '}
            <span className="text-brand">de clase mundial.</span>
          </h2>
          <p className="stack-title mt-4 text-muted-foreground max-w-xl mx-auto">
            Stack moderno, performance extrema. Cada herramienta elegida por su
            capacidad de escalar.
          </p>
        </div>

        {/* Category groups */}
        <div className="space-y-10">
          {categories.map((category) => {
            const items = techStack.filter((t) => t.category === category)
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[category]}`}
                  >
                    {categoryLabels[category]}
                  </span>
                  <div className="flex-1 h-px bg-foreground/5" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {items.map((tech, i) => (
                    <TechCard key={tech.name} tech={tech} index={i} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
