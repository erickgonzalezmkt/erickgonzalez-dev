'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/data/faq'

export function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.faq-header',
        start: 'top 85%',
      },
    })
    tl.from('.faq-label', { y: 20, opacity: 0, duration: 0.5 })
    tl.from('.faq-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
    tl.from('.faq-desc', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="faq-header text-center mb-16">
          <h2 className="faq-title text-4xl sm:text-5xl font-heading font-black tracking-tight">
            Preguntas{' '}
            <span className="text-brand">frecuentes.</span>
          </h2>
          <p className="faq-desc mt-4 text-muted-foreground">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border-subtle rounded-xl px-6 bg-surface/20 backdrop-blur-sm data-[state=open]:border-brand/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-sm sm:text-base font-medium text-foreground hover:text-brand transition-colors py-5 [&[data-state=open]>svg]:text-brand [&>svg]:text-muted-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
