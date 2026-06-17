'use client'

import { motion } from 'motion/react'
import { services, type Service } from '@/data/services'
import { AnimatedGroup } from '@/components/ui/animated-group'

function ServiceCard({ service, featured }: { service: Service; featured?: boolean }) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={featured ? { y: -3 } : { y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative h-full"
    >
      <div
        className={`relative flex h-full flex-col rounded-2xl border transition-all duration-500 ${
          featured
            ? 'border-brand/20 bg-gradient-to-b from-brand/[0.04] to-white p-8 md:p-10'
            : 'border-border bg-white p-8 hover:border-brand/20 hover:bg-brand/[0.02]'
        }`}
      >
        {/* Gradient overlay */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${
            service.gradient
          } opacity-0 transition-opacity duration-500 ${
            featured ? 'opacity-40' : 'group-hover:opacity-100'
          }`}
        />

        {/* Icon */}
        <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/50 transition-colors duration-500 group-hover:border-brand/30 group-hover:bg-brand/5">
          <Icon size={22} className="text-brand" />
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col">
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className={`mb-6 leading-relaxed ${featured ? 'text-base text-muted-foreground/90' : 'text-sm text-muted-foreground'}`}>
            {service.description}
          </p>

          {/* Features */}
          <ul className={`mt-auto space-y-3 ${featured ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 space-y-0' : ''}`}>
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-muted-foreground/80"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 md:py-28 px-6 bg-white">
      <div className="glow-brand top-1/4 left-1/3 w-[500px] h-[500px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* Accent line instead of badge */}
          <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-brand/60 to-accent/40" />
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            No solo diseño.{' '}
            <span className="text-brand">Sistemas completos.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada servicio está diseñado para funcionar como un engranaje de tu
            máquina de crecimiento. Web + automatización + datos = resultados.
          </p>
        </motion.div>

        {/* Asymmetric grid — featured first, then 3-column row */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {/* Featured card — full width on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <ServiceCard service={services[0]} featured />
          </motion.div>

          {/* Remaining 3 cards in a row */}
          <AnimatedGroup className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:col-span-3">
            {services.slice(1).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}
