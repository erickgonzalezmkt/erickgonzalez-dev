'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from 'motion/react'
import {
  Search,
  Filter,
  Mail,
  Zap,
  TrendingUp,
  Shield,
  Bot,
  BarChart3,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Search,
    title: 'Escanea Google Maps',
    description:
      'El motor busca negocios en tu nicho con queries rotativas que evitan resultados repetidos.',
    gradient: 'from-brand/20 to-cyan-500/5',
  },
  {
    icon: Filter,
    title: 'Clasifica por nicho',
    description:
      'Cada prospecto se etiqueta como 🔥 Caliente, 💡 Tibio o ❄️ Frío según su perfil.',
    gradient: 'from-accent/20 to-purple-500/5',
  },
  {
    icon: Mail,
    title: 'Entrega semanal',
    description:
      'Cada lunes recibes un email con prospectos nuevos. Sin duplicados, sin ruido.',
    gradient: 'from-emerald-500/20 to-green-500/5',
  },
  {
    icon: TrendingUp,
    title: 'Escala automático',
    description:
      'Más queries, más nichos, más leads. El sistema escala sin que toques nada.',
    gradient: 'from-amber-500/20 to-orange-500/5',
  },
]

const features = [
  {
    icon: Shield,
    title: '24 queries rotativas',
    description: '4 grupos de 6 que rotan semanalmente. Nunca repites los mismos resultados.',
  },
  {
    icon: Bot,
    title: 'Deduplicación inteligente',
    description: 'Si un prospecto ya apareció antes, se omite automáticamente.',
  },
  {
    icon: BarChart3,
    title: 'Clasificación Gino-align',
    description: '24 keywords mapeadas a 8 grupos de nicho para máxima precisión.',
  },
  {
    icon: Zap,
    title: 'n8n-powered',
    description: '7 nodos de automatización: trigger → scrape → filter → save → notify.',
  },
]

export function CortexSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cortex-header',
        start: 'top 85%',
      },
    })
    tl.from('.cortex-label', { y: 20, opacity: 0, duration: 0.5 })
    tl.from('.cortex-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
    tl.from('.cortex-desc', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')

    // Animate steps
    gsap.from('.cortex-step', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.cortex-steps',
        start: 'top 85%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="cortex"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background with brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand/5 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="cortex-header text-center mb-20">
          <Badge
            variant="outline"
            className="cortex-label mb-4 border-brand/30 text-brand"
          >
            Producto Estrella
          </Badge>
          <h2 className="cortex-title text-4xl sm:text-5xl font-heading font-black tracking-tight">
            Cortex{' '}
            <span className="text-brand">Lead Engine</span>
          </h2>
          <p className="cortex-desc mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Tu máquina de leads 24/7. Escanea Google Maps, clasifica prospectos por
            nicho y te los entrega cada semana. Sin intervención humana.
          </p>
        </div>

        {/* How it works */}
        <div className="cortex-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="cortex-step relative group rounded-2xl border border-border-subtle bg-surface/30 backdrop-blur-sm p-6 hover:border-brand/20 transition-all duration-500"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 border border-border-subtle`}
              >
                <step.icon size={22} className="text-brand" />
              </div>
              <div className="absolute top-4 right-4 text-3xl font-heading font-black text-border-subtle select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border-subtle bg-surface/20 p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <feature.icon size={18} className="text-brand" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo / CTA */}
        <div className="text-center">
          <a href="#planes">
            <Button
              size="lg"
              className="rounded-full text-base px-10 py-6 group magnetic-target"
            >
              Inclúyelo en tu plan
              <Zap
                size={18}
                className="ml-2 text-amber-300 transition-transform group-hover:scale-110"
              />
            </Button>
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Disponible en planes Next.js Premium y Full Stack + CRM
          </p>
        </div>
      </div>
    </section>
  )
}
