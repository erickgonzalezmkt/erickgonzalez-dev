'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Stack', href: '#stack' },
  { label: 'Planes', href: '#planes' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6">
      <div className={cn(
        'mx-auto max-w-6xl transition-all duration-500',
        scrolled
          ? 'mt-2 rounded-2xl border border-border bg-white/90 shadow-sm shadow-black/5'
          : 'mt-4'
      )}>
        <div className="flex items-center justify-between px-5 h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-heading font-bold tracking-tight whitespace-nowrap" aria-label="Home">
            <span className="text-foreground">Erick</span>
            <span className="text-brand"> Gonzalez</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Quiero saber m\u00e1s sobre tus servicios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-8 px-4 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200"
            >
              WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center h-8 px-4 text-sm font-medium rounded-lg bg-brand text-white hover:bg-brand-dark transition-all duration-200 shadow-sm shadow-brand/20"
            >
              Contacto
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar men\u00fa' : 'Abrir men\u00fa'}
            className="relative z-50 flex items-center justify-center p-2 md:hidden"
          >
            <Menu className={cn('size-5 transition-all duration-300', isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100')} />
            <X className={cn('absolute size-5 transition-all duration-300', isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0')} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/98 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <nav className="flex-1">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={handleNavClick}
                        className="block py-3 px-4 text-lg font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-3 pt-4 border-t border-border-subtle">
                <a
                  href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Quiero saber m\u00e1s sobre tus servicios.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="flex w-full items-center justify-center rounded-xl border border-foreground/10 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
                >
                  WhatsApp
                </a>
                <a
                  href="#contacto"
                  onClick={handleNavClick}
                  className="flex w-full items-center justify-center rounded-xl bg-brand px-4 py-3 text-sm font-medium text-white transition-all hover:bg-brand-dark"
                >
                  Contacto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
