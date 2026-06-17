'use client'

import { motion } from 'motion/react'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_NUMBER = '584120198300'
const WA_BASE = `https://wa.me/${WA_NUMBER}`
const WA_MESSAGE_CTA = encodeURIComponent('Hola Erick! Vi tu landing y quiero agendar una llamada de 15 minutos.')
const WA_MESSAGE_GENERAL = encodeURIComponent('Hola Erick! Quiero saber más sobre tus servicios.')

export function CtaSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-white">
      <div className="glow-brand top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-brand/10 rounded-tl-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-brand/10 rounded-tr-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-brand/10 rounded-bl-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-brand/10 rounded-br-3xl pointer-events-none" aria-hidden />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-6">
            Convierte tu web en{' '}
            <span className="text-brand">tu mejor vendedor.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Una llamada de 15 minutos sin compromiso. Te explico cómo
            podemos construir un sistema que genere resultados desde el día 1.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`${WA_BASE}?text=${WA_MESSAGE_CTA}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="rounded-xl text-base px-8 py-6 group bg-foreground hover:bg-foreground/90"
              >
                <MessageCircle size={18} className="mr-2" />
                Agendar llamada
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </motion.a>
            <motion.a
              href={`${WA_BASE}?text=${WA_MESSAGE_GENERAL}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base px-10 py-6 border-border-subtle"
              >
                <Sparkles size={18} className="mr-2" />
                Enviar mensaje
              </Button>
            </motion.a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-muted-foreground">
            ⚡ Respuesta típica en menos de 2 horas · Sin compromiso · Sin spam
          </p>
        </motion.div>
      </div>
    </section>
  )
}
