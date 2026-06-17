'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Users, GitBranch, Database, Bell, Mail, ArrowRight } from 'lucide-react'

const nodes = [
  {
    id: 'lead',
    label: 'Lead',
    sublabel: 'Formulario / Web',
    icon: Users,
    x: 0,
    color: 'text-brand',
    bg: 'bg-brand/10',
    border: 'border-brand/30',
  },
  {
    id: 'n8n',
    label: 'n8n',
    sublabel: 'Automatización',
    icon: GitBranch,
    x: 1,
    color: 'text-foreground',
    bg: 'bg-foreground/5',
    border: 'border-border',
  },
  {
    id: 'crm',
    label: 'CRM',
    sublabel: 'Contacto creado',
    icon: Database,
    x: 2,
    color: 'text-brand',
    bg: 'bg-brand/10',
    border: 'border-brand/30',
  },
  {
    id: 'notify',
    label: 'Notificación',
    sublabel: 'Slack / Email',
    icon: Bell,
    x: 3,
    color: 'text-foreground',
    bg: 'bg-foreground/5',
    border: 'border-border',
  },
  {
    id: 'sequence',
    label: 'Secuencia',
    sublabel: 'Email + SMS',
    icon: Mail,
    x: 4,
    color: 'text-brand',
    bg: 'bg-brand/10',
    border: 'border-brand/30',
  },
]

export function N8nFlowSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} id="automacion" className="relative py-24 md:py-32 px-6 bg-surface overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mb-16 md:mb-20"
        >
          <div className="accent-line mb-5" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-foreground">
            Cómo fluye un lead.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Desde que alguien escribe hasta que recibe seguimiento. Todo automático.
          </p>
        </motion.div>

        {/* Desktop: Flow diagram */}
        <div className="hidden md:block">
          <div className="relative pt-16 pb-8">
            {/* Background connection track */}
            <div className="absolute top-[88px] left-[5%] right-[5%] h-px bg-border/50" />

            {/* Nodes */}
            <div className="relative flex justify-between">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col items-center w-[18%]"
                >
                  {/* Node box */}
                  <div className={`relative z-10 flex flex-col items-center gap-2 w-full px-3 py-5 rounded-2xl bg-white border ${node.border} shadow-sm`}>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${node.bg} ${node.color}`}>
                      <node.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-heading font-bold text-foreground">{node.label}</span>
                    <span className="text-[10px] text-muted-foreground font-medium">{node.sublabel}</span>
                  </div>

                  {/* Arrow to next */}
                  {i < nodes.length - 1 && (
                    <div className="absolute -right-[11%] top-[44px] text-border">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden space-y-0">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${node.bg} ${node.color} border ${node.border}`}>
                  <node.icon size={18} strokeWidth={1.5} />
                </div>
                {i < nodes.length - 1 && <div className="w-px flex-1 bg-border/50 my-1.5" />}
              </div>
              <div className="min-h-[60px] flex flex-col justify-center">
                <span className="text-sm font-heading font-bold text-foreground">{node.label}</span>
                <span className="text-xs text-muted-foreground">{node.sublabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-sm text-muted-foreground text-left max-w-lg leading-relaxed"
        >
          Este flujo corre 24/7. Cada lead entra, se organiza, notifica y recibe seguimiento — sin que toques un botón.
        </motion.p>
      </div>
    </section>
  )
}
