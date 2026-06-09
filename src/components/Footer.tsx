'use client'

import { Mail, ArrowUp, Globe, Link2, MessageCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = [
  {
    label: 'Servicios',
    href: '#servicios',
  },
  {
    label: 'Stack',
    href: '#stack',
  },
  {
    label: 'Cortex Lead Engine',
    href: '#cortex',
  },
  {
    label: 'Planes',
    href: '#planes',
  },
  {
    label: 'FAQ',
    href: '#faq',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
]

const socialLinks = [
  { icon: Globe, href: 'https://github.com/erickgonzalezmkt', label: 'GitHub' },
  { icon: Link2, href: 'https://linkedin.com/in/erickgonzalez', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/584120198300', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:erick@cortexenterprise.com', label: 'Email' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#"
              className="text-xl font-heading font-bold tracking-tight"
            >
              <span className="text-foreground">Erick</span>
              <span className="text-brand"> Gonzalez</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Technology Partner. Construyo sistemas que convierten visitantes en
              clientes. Automatización + diseño web premium.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Navegación
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Redes
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors group"
                      >
                        <Icon size={14} className="transition-colors group-hover:text-brand" />
                        {social.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border-subtle" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Erick Gonzalez / Cortex Enterprise.
            Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted-foreground/60 hover:text-brand transition-colors group"
            aria-label="Scroll to top"
          >
            Volver arriba
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}
