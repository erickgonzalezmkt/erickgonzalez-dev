export interface FAQItem {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: '¿Cuánto tiempo toma construir un sitio web?',
    answer:
      'Depende de la complejidad. Un sitio en Framer lo entrego en 3–5 días. WordPress en 1–2 semanas. Next.js premium en 2–4 semanas. Los sistemas completos con automatización pueden tomar 4–8 semanas, pero ves resultados parciales desde la semana 1.',
  },
  {
    question: '¿Qué incluye exactamente "automatización de leads"?',
    answer:
      'Construyo un sistema que capta prospectos automáticamente desde Google Maps, los clasifica por nicho (caliente/tibio/frío), elimina duplicados y te los entrega por email o webhook cada semana. Sin intervención manual. Todo corriendo 24/7 en la nube.',
  },
  {
    question: '¿Necesito tener un negocio existente?',
    answer:
      'No necesariamente. Si estás empezando, te recomiendo empezar con un plan Framer o WordPress y escalar. Si ya tienes negocio y quieres resultados inmediatos, el Full Stack + CRM es tu mejor opción.',
  },
  {
    question: '¿Das mantenimiento después de entregar?',
    answer:
      'Sí. Ofrezco mantenimiento mensual para todos los planes (desde $50/mes para Framer hasta $300/mes para Enterprise). Incluye actualizaciones, monitoreo, backups y soporte técnico.',
  },
  {
    question: '¿Puedo escalar de un plan a otro después?',
    answer:
      'Absolutamente. Todos mis sistemas están construidos para escalar. Puedes empezar con un site en Framer y migrar a Next.js con automatización completa cuando tu negocio lo requiera. Sin perder datos ni progreso.',
  },
  {
    question: '¿Qué métodos de pago aceptas?',
    answer:
      'Acepto transferencia bancaria, PayPal, Stripe y cripto (USDT/USDC). Para planes premium, trabajo con pagos fraccionados: 50% al inicio, 50% al entregar / 25% inicio + 25% hitos + 50% final.',
  },
]
