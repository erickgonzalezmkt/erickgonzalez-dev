'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { plans } from '@/data/pricing'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function PricingSection() {
  return (
    <section id="planes" className="relative py-28 px-6 overflow-hidden bg-surface/30">
      <div className="glow-brand top-1/3 -left-48 w-[500px] h-[500px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            Inversión <span className="text-brand">transparente.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Elegí el plan que mejor se adapte a tu proyecto. Sin letra chica, sin sorpresas.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-8 transition-all duration-500 ${
                plan.highlighted
                  ? 'border-brand/30 bg-white shadow-sm hover:border-brand/50'
                  : 'border-border bg-white hover:border-foreground/20 hover:shadow-sm'
              }`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-brand text-primary-foreground text-xs font-semibold whitespace-nowrap shadow-lg shadow-brand/20">
                    Más popular
                  </span>
                </div>
              )}

              {/* Platform */}
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand mb-3">
                {plan.platform}
              </span>

              {/* Name & Price */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-2xl md:text-3xl font-heading font-black text-foreground">{plan.price}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground/90">
                    <Check size={14} className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-brand' : 'text-muted-foreground/50'}`} strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href={`https://wa.me/584120198300?text=${encodeURIComponent(`Hola Erick! Me interesa el plan ${plan.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-brand text-white shadow-sm shadow-brand/20 hover:bg-brand-dark'
                      : 'border border-border text-foreground/80 hover:text-foreground hover:border-foreground/20'
                  }`}
                >
                  Empezar proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
