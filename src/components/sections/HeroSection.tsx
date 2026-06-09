'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ParticleField } from '@/components/effects/ParticleField'
import { Button } from '@/components/ui/button'

const roles = [
  'Diseño Web',
  'Automatización',
  'Crecimiento',
  'Tecnología',
  'Resultados',
]

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Title entrance
    tl.from('.hero-title-line', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
    })
    // Subtitle
    tl.from(
      '.hero-subtitle',
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.4'
    )
    // CTA
    tl.from(
      '.hero-cta',
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      },
      '-=0.3'
    )

    // Rotate roles
    const roleElements = document.querySelectorAll('.hero-role')
    let currentRole = 0

    const rotateInterval = gsap.delayedCall(2.5, function rotate() {
      const outgoing = roleElements[currentRole]
      currentRole = (currentRole + 1) % roleElements.length
      const incoming = roleElements[currentRole]

      if (outgoing && incoming) {
        gsap.to(outgoing, {
          y: -40,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        gsap.set(incoming, { y: 40, opacity: 0 })
        gsap.to(incoming, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.1,
        })
      }
      rotateInterval.restart(true)
    })

    // Parallax on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to('.hero-parallax', {
          y: self.progress * 150,
          opacity: 1 - self.progress * 0.8,
          ease: 'none',
        })
      },
    })

    return () => {
      rotateInterval.kill()
    }
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle background */}
      <ParticleField />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={containerRef}
        className="hero-parallax relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-surface/50 backdrop-blur-sm mb-8"
        >
          <Sparkles size={14} className="text-brand" />
          <span className="text-xs text-muted-foreground tracking-wide uppercase">
            Technology Partner
          </span>
        </motion.div>

        {/* Main headline */}
        <h1
          ref={textRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[0.9] mb-6"
        >
          <span className="hero-title-line block">
            Construyo sistemas
          </span>
          <span className="hero-title-line block mt-2">
            que convierten{' '}
            <span className="text-brand">visitantes</span>
          </span>
          <span className="hero-title-line block mt-2">
            en{' '}
            <span className="relative inline-block">
              <span className="text-accent">clientes</span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-brand to-accent rounded-full" />
            </span>
          </span>
        </h1>

        {/* Rotating roles */}
        <div className="hero-subtitle h-12 flex items-center justify-center mb-10">
          <span className="text-lg sm:text-xl text-muted-foreground">
            Especialista en{' '}
            <span className="relative inline-block w-40 sm:w-48 h-10 align-middle overflow-hidden">
              {roles.map((role, i) => (
                <span
                  key={role}
                  className={`hero-role absolute inset-0 flex items-center justify-center font-heading font-bold text-brand text-xl sm:text-2xl ${
                    i === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {role}
                </span>
              ))}
            </span>
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#servicios">
            <Button
              size="lg"
              className="rounded-full text-base px-8 py-6 group magnetic-target"
            >
              Ver servicios
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </a>
          <a href="#contacto">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base px-8 py-6 border-border-subtle magnetic-target"
            >
              Agenda una llamada
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-cta mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { value: '50+', label: 'Proyectos' },
            { value: '15k+', label: 'Leads generados' },
            { value: '4', label: 'Plataformas' },
            { value: '99%', label: 'Uptime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-black text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-brand to-transparent"
        />
      </motion.div>
    </section>
  )
}
