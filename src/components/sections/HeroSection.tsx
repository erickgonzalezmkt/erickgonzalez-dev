'use client'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle brand glow */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative w-full max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-px w-6 bg-brand" />
              Technology Partner
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-heading font-black leading-[1.05] tracking-tight text-balance text-foreground"
          >
            Sistemas que convierten{' '}
            <span className="text-brand">visitantes</span> en{' '}
            <span className="text-foreground">clientes.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Automatización, diseño web y sistemas de crecimiento que generan resultados
            desde el día 1 — sin complicaciones técnicas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-3"
          >
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-foreground text-white text-sm font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              Ver servicios
              <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Vi tu landing y quiero agendar una llamada.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-border text-foreground/80 text-sm font-medium hover:border-foreground/20 hover:text-foreground transition-all duration-300"
            >
              Agendar llamada
            </a>
          </motion.div>
        </div>

        {/* Decorative stats — clean, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-wrap gap-10 md:gap-16"
        >
          {[
            { number: '4.8×', label: 'ROI promedio en automatización' },
            { number: '+247', label: 'leads generados este mes' },
            { number: '24h', label: 'respuesta máxima en WhatsApp' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-heading font-black text-foreground">{stat.number}</p>
              <p className="mt-1 text-sm text-muted-foreground max-w-28">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
