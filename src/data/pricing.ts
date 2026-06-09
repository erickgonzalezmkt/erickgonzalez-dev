export interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  gradient: string
  platform: string
}

export const plans: Plan[] = [
  {
    name: 'Framer',
    price: '$300 – $600',
    description:
      'Rápido, elegante, económico. Ideal para landing pages y portafolios en días.',
    platform: 'Framer',
    features: [
      'Landing page responsive',
      'Animaciones básicas',
      'SEO on-page',
      'Hosting incluido',
      'Hasta 5 secciones',
      '1 ronda de revisiones',
    ],
    gradient: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    name: 'WordPress',
    price: '$500 – $1,000',
    description:
      'Flexibilidad total con CMS. Blogs, catálogos, sitios corporativos con gestión de contenido.',
    platform: 'WordPress',
    features: [
      'Tema personalizado (Elementor/ACF)',
      'SEO completo + Schema',
      'Blog + CMS autoadministrable',
      'Hosting + dominio (1 año)',
      'Hasta 10 páginas',
      'Formularios + analytics',
    ],
    gradient: 'from-accent/10 to-pink-500/5',
  },
  {
    name: 'Next.js Premium',
    price: '$1,500 – $4,000',
    description:
      'Máxima performance. Awwwards-level design con stack moderno y automatización incluida.',
    platform: 'Next.js',
    highlighted: true,
    features: [
      'Next.js 15 + TypeScript + Tailwind',
      'Motion graphics GSAP + Framer Motion',
      'SEO avanzado + JSON-LD + sitemap',
      'Automatización lead capture básica',
      'Dashboard admin personalizado',
      'Core Web Vitals perfectos',
    ],
    gradient: 'from-brand/20 via-accent/10 to-transparent',
  },
  {
    name: 'Full Stack + CRM',
    price: '$3,000 – $8,000+',
    description:
      'Sistema completo de crecimiento: web + automatización + CRM + lead engine.',
    platform: 'Enterprise',
    features: [
      'Web premium + SEO total',
      'Cortex Lead Engine integrado',
      'CRM automatizado (n8n + HubSpot)',
      'Chatbot con IA + ManyChat',
      'Pipeline de ventas completo',
      'Soporte y mantenimiento mensual',
    ],
    gradient: 'from-amber-500/15 via-brand/10 to-accent/10',
  },
]
