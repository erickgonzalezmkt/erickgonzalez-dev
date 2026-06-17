'use client'

import { motion } from 'motion/react'
import { services, type Service } from '@/data/services'
import { Badge } from '@/components/ui/badge'
import { AnimatedGroup } from '@/components/ui/animated-group'

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <div className="group relative h-full">
      {/* Card */}
      <div
        className="relative flex h-full flex-col rounded-2xl border border-border-subtle bg-surface/40 p-8 transition-all duration-500 hover:border-brand/30 hover:bg-surface/60 hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.12)]"
      >
        {/* Gradient overlay */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Icon */}
        <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-background/60 transition-colors duration-500 group-hover:border-brand/30 group-hover:bg-brand/10">
          <Icon size={22} className="text-brand" />
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col">
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          {/* Features */}
          <ul className="mt-auto space-y-3">
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
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-28 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand/[0.02] to-background pointer-events-none" />
      <div className="glow-blue top-1/4 left-1/3 w-[500px] h-[500px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 border-brand/30 text-brand"
          >
            Servicios
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            No solo diseño.{' '}
            <span className="text-brand">Sistemas completos.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada servicio está diseñado para funcionar como un engranaje de tu
            máquina de crecimiento. Web + automatización + datos = resultados.
          </p>
        </motion.div>

        {/* Grid */}
        <AnimatedGroup className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
