'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, Loader2, Send } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const steps = [
  { id: 'personal', title: 'Datos' },
  { id: 'proyecto', title: 'Proyecto' },
  { id: 'presupuesto', title: 'Presupuesto' },
  { id: 'confirmar', title: 'Confirmar' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
}

export function MultistepFormSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    goal: '',
    budget: '',
    timeline: '',
    details: '',
  })

  const updateFormData = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.name.trim() !== '' && formData.email.trim() !== ''
      case 1: return formData.service !== ''
      case 2: return formData.budget !== '' && formData.timeline !== ''
      default: return true
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Enviar email primero
    try {
      await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch (err) {
      console.error('Error sending email:', err)
      // No bloqueamos — el lead se envía igual por WhatsApp
    }

    // Abrir WhatsApp con resumen
    const message = encodeURIComponent(
      `Hola Erick! Soy ${formData.name} de ${formData.company || 'mi empresa'}.` +
      `\n\n📧 ${formData.email}` +
      `\n\n🚀 Servicio: ${formData.service}` +
      `\n🎯 Objetivo: ${formData.goal || 'No especificado'}` +
      `\n💰 Presupuesto: ${formData.budget}` +
      `\n⏱ Timeline: ${formData.timeline}` +
      `\n📝 Detalles: ${formData.details || 'Sin detalles'}`
    )
    window.open(`https://wa.me/584120198300?text=${message}`, '_blank')

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 500)
  }

  if (submitted) {
    return (
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-brand/5 to-background pointer-events-none" />
        <div className="relative max-w-lg mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand/20"
          >
            <Check className="h-10 w-10 text-brand" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-heading font-bold text-foreground mb-3"
          >
            ¡Recibido!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-8"
          >
            Te redirigimos a WhatsApp para continuar la conversación.
            Respondo en máximo 24 horas.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-brand/80"
          >
            Volver al inicio
          </motion.a>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="relative py-24 px-6 overflow-hidden">
      {/* Background con brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand/5 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-brand/30 text-brand">
            Trabajemos juntos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-foreground">
            Cuéntame tu <span className="text-brand">proyecto</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Responde estas preguntas rápidas y te enviaré una propuesta personalizada por WhatsApp.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-3 h-3 rounded-full cursor-pointer transition-all duration-300',
                    index < currentStep && 'bg-brand',
                    index === currentStep && 'bg-brand ring-4 ring-brand/20',
                    index > currentStep && 'bg-foreground/10'
                  )}
                  onClick={() => { if (index <= currentStep) setCurrentStep(index) }}
                />
                <span className={cn(
                  'text-[0.65rem] mt-1.5 hidden sm:block',
                  index === currentStep ? 'text-brand font-medium' : 'text-muted-foreground'
                )}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-foreground/5 h-1 rounded-full overflow-hidden mt-2">
            <motion.div
              className="h-full bg-brand"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_-8px_rgba(37,99,235,0.1)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              {/* Step 1: Datos personales */}
              {currentStep === 0 && (
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Datos personales</h3>
                    <p className="text-sm text-muted-foreground mb-5">Para conocerte y enviarte la propuesta</p>
                  </div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Nombre completo *</label>
                    <input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-2 focus:ring-brand/10"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-2 focus:ring-brand/10"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground/80">Empresa (opcional)</label>
                    <input
                      id="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => updateFormData('company', e.target.value)}
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-2 focus:ring-brand/10"
                    />
                  </motion.div>
                </div>
              )}

              {/* Step 2: Tipo de proyecto */}
              {currentStep === 1 && (
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Tu proyecto</h3>
                    <p className="text-sm text-muted-foreground mb-5">¿Qué necesitas exactamente?</p>
                  </div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Servicio que buscas *</label>
                    <div className="grid gap-2.5">
                      {[
                        { value: 'web-design', label: 'Diseño Web (Framer / WordPress / Next.js)' },
                        { value: 'automation', label: 'Automatización de Leads' },
                        { value: 'ecommerce', label: 'E-commerce' },
                        { value: 'cortex', label: 'Cortex Lead Engine' },
                        { value: 'fullstack', label: 'Full Stack + CRM completo' },
                        { value: 'consulting', label: 'Asesoría & Marketing' },
                      ].map((svc, i) => (
                        <motion.div
                          key={svc.value}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0, transition: { delay: 0.05 * i, duration: 0.25 } }}
                          className={cn(
                            'flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-200',
                            formData.service === svc.value
                              ? 'border-brand/40 bg-brand/[0.06]'
                              : 'border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02]'
                          )}
                          onClick={() => updateFormData('service', svc.value)}
                        >
                          <div className={cn(
                            'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
                            formData.service === svc.value ? 'border-brand' : 'border-foreground/20'
                          )}>
                            {formData.service === svc.value && (
                              <div className="w-2 h-2 rounded-full bg-brand" />
                            )}
                          </div>
                          <span className="text-sm text-foreground/80">{svc.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="goal" className="text-sm font-medium text-foreground/80">¿Cuál es tu objetivo principal?</label>
                    <textarea
                      id="goal"
                      placeholder="Ej: Generar 50 leads calificados al mes para mi agencia"
                      value={formData.goal}
                      onChange={(e) => updateFormData('goal', e.target.value)}
                      rows={2}
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-2 focus:ring-brand/10 resize-none"
                    />
                  </motion.div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 2 && (
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Presupuesto y tiempo</h3>
                    <p className="text-sm text-muted-foreground mb-5">Para ajustar la propuesta a tu realidad</p>
                  </div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Presupuesto estimado *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['$300 – $800', '$800 – $2,500', '$2,500 – $5,000', '$5,000 – $10,000+'].map((b) => (
                        <div
                          key={b}
                          className={cn(
                            'rounded-xl border px-3 py-2.5 text-center text-sm cursor-pointer transition-all duration-200',
                            formData.budget === b
                              ? 'border-brand/40 bg-brand/[0.06] text-brand'
                              : 'border-foreground/10 text-foreground/60 hover:border-foreground/20'
                          )}
                          onClick={() => updateFormData('budget', b)}
                        >
                          {b}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">¿Cuándo necesitas empezar? *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'asap', label: '¡Ya! 🚀' },
                        { value: '1-month', label: 'Este mes' },
                        { value: '3-months', label: '1–3 meses' },
                        { value: 'exploring', label: 'Estoy explorando' },
                      ].map((t) => (
                        <div
                          key={t.value}
                          className={cn(
                            'rounded-xl border px-3 py-2.5 text-center text-sm cursor-pointer transition-all duration-200',
                            formData.timeline === t.value
                              ? 'border-brand/40 bg-brand/[0.06] text-brand'
                              : 'border-foreground/10 text-foreground/60 hover:border-foreground/20'
                          )}
                          onClick={() => updateFormData('timeline', t.value)}
                        >
                          {t.label}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label htmlFor="details" className="text-sm font-medium text-foreground/80">Detalles adicionales</label>
                    <textarea
                      id="details"
                      placeholder="Cualquier cosa que quieras que sepa antes de la propuesta..."
                      value={formData.details}
                      onChange={(e) => updateFormData('details', e.target.value)}
                      rows={2}
                      className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-brand/40 focus:ring-2 focus:ring-brand/10 resize-none"
                    />
                  </motion.div>
                </div>
              )}

              {/* Step 4: Confirmar */}
              {currentStep === 3 && (
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Confirma tus datos</h3>
                    <p className="text-sm text-muted-foreground mb-5">¿Todo bien? Te redirigiremos a WhatsApp con un resumen.</p>
                  </div>
                  <motion.div variants={fadeInUp} className="space-y-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4">
                    {[
                      { label: 'Nombre', value: formData.name },
                      { label: 'Email', value: formData.email },
                      { label: 'Empresa', value: formData.company || '—' },
                      { label: 'Servicio', value: formData.service },
                      { label: 'Objetivo', value: formData.goal || '—' },
                      { label: 'Presupuesto', value: formData.budget },
                      { label: 'Timeline', value: formData.timeline },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium text-right max-w-[60%]">{item.value}</span>
                      </div>
                    ))}
                  </motion.div>
                  <motion.div variants={fadeInUp} className="rounded-xl bg-brand/[0.06] border border-brand/20 p-4 text-center">
                    <p className="text-sm text-foreground/80">
                      Al enviar, abriremos WhatsApp con un resumen de tu proyecto. Solo dale &quot;Enviar&quot; y te responderé en máximo 24 horas.
                    </p>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer buttons */}
          <div className="flex justify-between items-center p-6 pt-2 border-t border-foreground/5">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200',
                currentStep === 0
                  ? 'text-foreground/20 cursor-not-allowed'
                  : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
              )}
            >
              <ChevronLeft className="h-4 w-4" /> Atrás
            </button>
            <button
              onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
              disabled={!isStepValid() || isSubmitting}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200',
                !isStepValid() || isSubmitting
                  ? 'bg-foreground/10 text-foreground/30 cursor-not-allowed'
                  : 'bg-brand text-primary-foreground hover:bg-brand/80'
              )}
            >
              {isSubmitting ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
              ) : currentStep === steps.length - 1 ? (
                <><Send className="h-4 w-4" /> Enviar a WhatsApp</>
              ) : (
                <>{currentStep === 0 ? 'Empezar' : 'Siguiente'} <ChevronRight className="h-4 w-4" /></>
              )}
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Paso {currentStep + 1} de {steps.length}: {steps[currentStep].title}
        </p>
      </div>
    </section>
  )
}
