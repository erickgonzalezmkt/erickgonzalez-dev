'use client'

import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'

const testimonials = {
  featured: {
    quote: '"Erick transformó nuestra página en una máquina de ventas. Pasamos de tener un sitio web estático a un sistema que nos genera leads calificados todas las semanas."',
    author: 'Carlos Méndez',
    role: 'CEO — TechFlow LATAM',
  },
  cards: [
    {
      quote: 'El Cortex Lead Engine nos consiguió 47 leads calificados en la primera semana. Increíble.',
      author: 'María G.',
      role: 'Directora de Marketing',
      rating: 5,
    },
    {
      quote: 'No es solo diseño bonito. Es un sistema completo que funciona mientras duermes.',
      author: 'Andrés P.',
      role: 'Founder — GrowthMx',
      rating: 5,
    },
    {
      quote: 'Migrar de WordPress a Next.js con Erick fue la mejor decisión técnica que tomamos este año.',
      author: 'Laura S.',
      role: 'CTO — InnovaTech',
      rating: 5,
    },
  ],
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-surface/30">
      <div className="glow-brand top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            Lo que dicen{' '}
            <span className="text-brand">mis clientes</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="text-brand/60">✦</span>
            <span>Resultados reales de negocios reales. Sin humo.</span>
            <span className="text-brand/60">✦</span>
          </div>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-16 overflow-hidden rounded-2xl border border-border bg-white p-8 md:p-12"
        >
          {/* Quote mark decoration */}
          <svg
            className="absolute -left-4 -top-4 h-20 w-20 text-brand/10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>

          <div className="relative z-10">
            <p className="mb-6 text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
              {testimonials.featured.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonials.featured.author}</div>
                <div className="text-sm text-muted-foreground">{testimonials.featured.role}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-xl border border-border bg-white p-6 hover:border-brand/20 hover:shadow-sm transition-all duration-300"
            >
              <StarRating rating={card.rating} />
              <p className="mt-4 flex-1 text-muted-foreground leading-relaxed text-sm">
                &ldquo;{card.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-border-subtle">
                <div className="font-semibold text-foreground text-sm">{card.author}</div>
                <div className="text-sm text-muted-foreground/70">{card.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
