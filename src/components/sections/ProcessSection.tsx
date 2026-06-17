'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    desc: 'Hablamos 15 minutos por WhatsApp o videollamada. Me contás tu negocio, tus objetivos y qué problema querés resolver. Sin compromiso.',
    timeline: 'Día 1',
  },
  {
    number: '02',
    title: 'Propuesta',
    desc: 'Te envío una propuesta clara: alcance, tecnología, inversión y timeline. Sin letra chica, sin sorpresas. Ajustamos lo que haga falta.',
    timeline: 'Día 2-3',
  },
  {
    number: '03',
    title: 'Desarrollo',
    desc: 'Construyo tu sistema mientras vos seguís trabajando. Web, automatización o CRM — todo integrado y probado antes de entregarte.',
    timeline: '1-3 semanas',
  },
  {
    number: '04',
    title: 'Activación',
    desc: 'Lanzamos, configuramos todo y te enseño a usar cada pieza. Desde el día 1 el sistema empieza a generar resultados.',
    timeline: 'Lanzamiento',
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
      },
    })

    tl.from('.process-step', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
      ease: 'power3.out',
    })

    tl.from('.process-line', {
      scaleY: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      transformOrigin: 'top center',
    }, 0)
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="proceso" className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 md:mb-20">
          <div className="accent-line mb-5" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-foreground">
            Así trabajamos.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Sin vueltas. Hablamos, te propongo, construimos, y activamos. En ese orden.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border">
            <div className="process-line absolute inset-0 bg-brand origin-left" />
          </div>

          {steps.map((step) => (
            <div key={step.number} className="process-step relative">
              {/* Number */}
              <div className="flex items-center gap-4 md:block">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 text-brand text-sm font-heading font-bold">
                  {step.number}
                </span>
                {/* Mobile timeline */}
                <span className="md:hidden text-xs text-muted-foreground/60 font-medium">{step.timeline}</span>
              </div>

              {/* Content */}
              <div className="mt-4 md:mt-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-heading font-bold text-foreground">{step.title}</h3>
                  <span className="hidden md:block text-[11px] text-muted-foreground/50 font-medium uppercase tracking-wider mt-1">{step.timeline}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-left">
          <a
            href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Quiero agendar una llamada de 15 minutos para contarte mi proyecto.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-all duration-300"
          >
            Empezar con una llamada
          </a>
        </div>
      </div>
    </section>
  )
}
