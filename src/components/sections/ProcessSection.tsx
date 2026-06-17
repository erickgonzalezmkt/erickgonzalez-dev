'use client'

import { motion } from 'motion/react'
import { ArrowRight, MessageCircle, FileText, Code, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    desc: 'Hablamos 15 min. Me contás tu negocio y qué problema resolver.',
    timeline: 'Día 1',
    icon: MessageCircle,
    color: 'text-brand',
    bg: 'bg-brand/10',
  },
  {
    number: '02',
    title: 'Propuesta',
    desc: 'Te envío alcance, tecnología, inversión y timeline. Sin sorpresas.',
    timeline: 'Día 2-3',
    icon: FileText,
    color: 'text-foreground',
    bg: 'bg-foreground/5',
  },
  {
    number: '03',
    title: 'Desarrollo',
    desc: 'Construyo tu sistema mientras vos seguís trabajando.',
    timeline: '1-3 semanas',
    icon: Code,
    color: 'text-brand',
    bg: 'bg-brand/10',
  },
  {
    number: '04',
    title: 'Activación',
    desc: 'Lanzamos, te enseño a usarlo y el sistema empieza a generar.',
    timeline: 'Lanzamiento',
    icon: Rocket,
    color: 'text-foreground',
    bg: 'bg-foreground/5',
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
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
            Así trabajamos.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Sin vueltas. Hablamos, te propongo, construimos y activamos. En ese orden.
          </p>
        </motion.div>

        {/* Desktop: Horizontal flow with SVG arrows */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* SVG connecting path */}
            <svg
              className="absolute top-10 left-[8%] right-[8%] h-0.5"
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
              aria-hidden
            >
              <line x1="0" y1="1" x2="1000" y2="1" stroke="currentColor" className="text-border" strokeWidth="1" strokeDasharray="6 4" />
            </svg>

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center w-[22%]"
              >
                {/* Icon circle */}
                <div className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-full ${step.bg} ${step.color} mb-5`}>
                  <step.icon size={28} strokeWidth={1.5} />
                  {/* Number badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-foreground text-white text-[11px] font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-[12%] top-9 text-border hidden lg:block">
                    <ArrowRight size={20} />
                  </div>
                )}

                {/* Text */}
                <h3 className="text-base font-heading font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[180px]">{step.desc}</p>
                <span className="mt-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50">{step.timeline}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical list */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.bg} ${step.color}`}>
                  <step.icon size={20} strokeWidth={1.5} />
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground/40">{step.number}</span>
                  <h3 className="text-base font-heading font-bold text-foreground">{step.title}</h3>
                  <span className="text-[10px] text-muted-foreground/50">{step.timeline}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-left"
        >
          <a
            href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Quiero agendar una llamada de 15 minutos para contarte mi proyecto.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-foreground text-white text-sm font-medium hover:bg-foreground/90 transition-all duration-300"
          >
            Empezar con una llamada
          </a>
        </motion.div>
      </div>
    </section>
  )
}
