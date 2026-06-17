'use client'

import Link from 'next/link'
import { Mail, ArrowUp, Globe, Link2, MessageCircle } from 'lucide-react'

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/584120198300', label: 'WhatsApp' },
  { icon: Globe, href: 'https://github.com/erickgonzalezmkt', label: 'GitHub' },
  { icon: Link2, href: 'https://linkedin.com/in/erickgonzalez', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:erick@cortexenterprise.com', label: 'Email' },
]

const footerColumns = [
  {
    title: 'Producto',
    links: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Planes', href: '#planes' },
      { label: 'Cortex Lead Engine', href: '#cortex' },
      { label: 'Stack', href: '#stack' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'WhatsApp', href: 'https://wa.me/584120198300' },
    ],
  },
  {
    title: 'Redes',
    links: socialLinks.map((s) => ({ label: s.label, href: s.href })),
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border-subtle bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="text-lg font-heading font-bold tracking-tight">
              <span className="text-foreground">Erick</span>
              <span className="text-brand"> Gonzalez</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground/70 leading-relaxed max-w-xs">
              Technology Partner. Construyo sistemas que convierten visitantes en
              clientes. Automatización + diseño web premium.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground/50">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
                +6 años de experiencia
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                +50 proyectos entregados
              </span>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/50 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle">
          <p className="text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} Erick Gonzalez / Cortex Enterprise.
            Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted-foreground/40 hover:text-brand transition-colors group"
            aria-label="Scroll to top"
          >
            Volver arriba
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}
