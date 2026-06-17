'use client'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'

const fadeUp = {
  container: {
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, bounce: 0.25, duration: 1 } },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative stripes — Cruip style */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 stripes-pattern opacity-30" />
      </div>

      {/* Glow circles */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-brand/5 blur-[80px] pointer-events-none" aria-hidden />

      <div className="relative w-full max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedGroup variants={fadeUp}>
            <motion.a
              href="#servicios"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-foreground/5 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all group mb-8"
            >
              <Sparkles size={14} className="text-brand" />
              <span>Socio Tecnológico</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </motion.a>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-heading font-black leading-[1.05] tracking-tight text-balance">
              Sistemas que convierten{' '}
              <span className="text-brand">visitantes</span> en{' '}
              <span className="text-accent">clientes</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
              Technology Partner. Automatización, diseño web premium y sistemas de crecimiento
              que generan resultados desde el día 1.
            </p>
          </AnimatedGroup>

          {/* CTAs */}
          <AnimatedGroup
            variants={{
              container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.8 } } },
              item: {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.8 } },
              },
            }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.a
              href="#servicios"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
            >
              Ver servicios
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Vi tu landing y quiero agendar una llamada.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-border bg-background text-muted-foreground text-sm font-medium hover:text-foreground hover:border-foreground/20 transition-all"
            >
              Agendar llamada
            </motion.a>
          </AnimatedGroup>

          {/* Dashboard preview — Cruip-style terminal */}
          <AnimatedGroup
            variants={{
              container: { visible: { transition: { delayChildren: 1.2 } } },
              item: {
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.2, duration: 1.2 } },
              },
            }}
          >
            <div className="mt-16 max-w-3xl mx-auto relative">
              {/* Terminal window */}
              <div className="relative rounded-xl border border-border-subtle bg-surface/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/30">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-background/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-muted-foreground/60 ml-2 font-mono">cortex@terminal:~/proyectos</span>
                </div>
                {/* Terminal body */}
                <div className="p-5 md:p-6 font-mono text-sm leading-relaxed">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span className="text-foreground/40">$</span>
                      <span>cortex lead-engine --deploy</span>
                    </div>
                    <div className="text-muted-foreground pl-5 space-y-1">
                      <p><span className="text-brand">✓</span> Sistema de captación activado</p>
                      <p><span className="text-brand">✓</span> CRM sincronizado en tiempo real</p>
                      <p><span className="text-brand">✓</span> Chatbot desplegado en web</p>
                      <p><span className="text-brand">✓</span> Email sequence configurada</p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 pt-2">
                      <span className="text-foreground/40">$</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="mt-4 pt-4 border-t border-border-subtle grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-foreground/40 text-xs">LEADS CAPTADOS</p>
                      <p className="text-foreground font-semibold text-base">+247</p>
                    </div>
                    <div>
                      <p className="text-foreground/40 text-xs">TASA CONV.</p>
                      <p className="text-foreground font-semibold text-base">12.4%</p>
                    </div>
                    <div>
                      <p className="text-foreground/40 text-xs">ROI PROMEDIO</p>
                      <p className="text-foreground font-semibold text-base">4.8x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}
