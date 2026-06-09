import {
  Globe,
  Bot,
  Search,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  gradient: string
}

export const services: Service[] = [
  {
    title: 'Diseño Web Premium',
    description:
      'Sitios web de alto impacto en Framer, WordPress o Next.js. No vendo plantillas — construyo sistemas digitales que convierten.',
    icon: Globe,
    features: [
      'Landing pages conversión-optimizadas',
      'Dashboards y plataformas SaaS',
      'SEO técnico + Core Web Vitals',
      'Integración con CRMs y email',
    ],
    gradient: 'from-brand/20 via-brand/5 to-transparent',
  },
  {
    title: 'Automatización de Leads',
    description:
      'Sistemas 24/7 que captan, clasifican y entregan prospectos calientes directamente a tu negocio sin intervención manual.',
    icon: Bot,
    features: [
      'Chatbots con IA + ManyChat',
      'Embudos multicanal automatizados',
      'Email & SMS sequences',
      'CRM auto-alimentado',
    ],
    gradient: 'from-accent/20 via-accent/5 to-transparent',
  },
  {
    title: 'Cortex Lead Engine',
    description:
      'Mi sistema estrella: scraper inteligente de Google Maps que extrae prospectos, los clasifica por nicho y los entrega semanalmente.',
    icon: Search,
    features: [
      'Scraping rotativo por nichos Gino-align',
      'Clasificación Caliente / Tibio / Frío',
      'Deduplicación automática',
      'Entrega por email o webhook',
    ],
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  {
    title: 'CRM + Growth Systems',
    description:
      'Arquitectura completa de crecimiento: desde la captura hasta el cierre. Conecto cada pieza para que trabajen juntas.',
    icon: Workflow,
    features: [
      'n8n + HubSpot + Salesforce',
      'Pipeline automatizado de ventas',
      'Analytics y dashboards en vivo',
      'Escalado a 6 y 7 cifras',
    ],
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
]
