'use client'

import { useMemo } from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { techStack, type TechItem } from '@/data/stack'

const categoryLabels: Record<TechItem['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  automation: 'Automatización',
  infra: 'Infraestructura',
}

const features = [
  'Next.js 15 + React 19 — Rendimiento nativo, SEO incorporado',
  'TypeScript + Tailwind v4 — Código limpio, diseño consistente',
  'n8n + APIs — Automatización sin límites',
  'Vercel / Railway — Deploy en segundos',
]

const categories = ['frontend', 'backend', 'automation', 'infra'] as const

function FeatureItem({ text, index }: { text: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-3"
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
        <Check size={12} className="text-brand" strokeWidth={3} />
      </span>
      <span className="text-muted-foreground text-sm leading-relaxed">{text}</span>
    </motion.li>
  )
}

function TechChip({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground hover:bg-surface"
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: tech.color || 'currentColor' }}
      />
      {tech.name}
    </motion.span>
  )
}

function CategoryGroup({
  category,
  index,
}: {
  category: TechItem['category']
  index: number
}) {
  const items = useMemo(() => techStack.filter((t) => t.category === category), [category])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/50">
        {categoryLabels[category]}
      </span>
      <div className="flex flex-wrap gap-2">
        {items.map((tech, i) => (
          <TechChip key={tech.name} tech={tech} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export function StackSection() {
  return (
    <section id="stack" className="relative py-24 md:py-28 overflow-hidden bg-white">

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text + features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground leading-[1.08]">
              Tecnología{' '}
              <span className="text-brand">de clase mundial.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Stack moderno, performance extrema. Cada herramienta elegida por su
              capacidad de escalar.
            </p>

            <ul className="mt-8 space-y-3.5">
              {features.map((text, i) => (
                <FeatureItem key={i} text={text} index={i} />
              ))}
            </ul>

            {/* Decorative border */}
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-brand/40 to-transparent" />
          </motion.div>

          {/* Right column — tech grid */}
          <div className="space-y-6">
            {/* Top divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
            />

            <div className="space-y-6 rounded-2xl border border-border bg-surface/50 p-6 md:p-8">
              <div className="space-y-5">
                {categories.map((cat, i) => (
                  <CategoryGroup key={cat} category={cat} index={i} />
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[11px] text-muted-foreground/30 text-center tracking-wide"
            >
              + 6 años de experiencia en producción
            </motion.p>

            {/* Bottom divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block h-px bg-gradient-to-r from-transparent via-border to-transparent origin-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
