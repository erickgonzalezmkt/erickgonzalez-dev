'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const flowSteps = [
  {
    label: 'Lead llega',
    desc: 'WhatsApp, web o redes sociales — un prospecto entra al sistema.',
    color: 'bg-brand/10 text-brand',
  },
  {
    label: 'n8n procesa',
    desc: 'Clasifica, filtra duplicados y enriquece con datos del contacto.',
    color: 'bg-foreground/5 text-foreground',
  },
  {
    label: 'CRM se actualiza',
    desc: 'El lead caliente aparece automáticamente en tu pipeline.',
    color: 'bg-brand/10 text-brand',
  },
  {
    label: 'Te notifica',
    desc: 'Recibes un mensaje con la ficha del prospecto. Actuá rápido.',
    color: 'bg-foreground/5 text-foreground',
  },
  {
    label: 'Secuencia sigue',
    desc: 'Email/SMS sequence automática para los que no respondieron.',
    color: 'bg-brand/10 text-brand',
  },
]

export function N8nFlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
      },
    })

    tl.from('.flow-node', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    })

    tl.from('.flow-arrow', {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: 'power2.out',
      transformOrigin: 'left center',
    }, 0.2)
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="automation" className="relative py-24 md:py-32 px-6 bg-surface/50 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 md:mb-20">
          <div className="accent-line mb-5" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-foreground">
            Cómo fluye un lead.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Desde que alguien escribe hasta que llega a tu WhatsApp como lead calificado.
            Todo automático, 24/7.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-3 lg:gap-4">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flow-node flex md:flex-col items-center gap-4 md:gap-3 w-full md:w-auto">
              {/* Node */}
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-white w-full md:w-auto ${step.color}`}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 text-brand text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <p className="text-xs text-muted-foreground/70 leading-snug mt-0.5 max-w-[180px]">{step.desc}</p>
                </div>
              </div>

              {/* Arrow (desktop) */}
              {i < flowSteps.length - 1 && (
                <div className="flow-arrow hidden md:flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Ejemplo real:</span> Un cliente en Caracas recibió 47 leads calificados en la primera semana después de activar este flujo. Sin mover un dedo.
          </p>
        </div>
      </div>
    </section>
  )
}
