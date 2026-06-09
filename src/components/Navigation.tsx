'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Stack', href: '#stack' },
  { label: 'Cortex Lead Engine', href: '#cortex' },
  { label: 'Planes', href: '#planes' },
  { label: 'FAQ', href: '#faq' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animate nav links on mount
    gsap.from('.nav-link', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.5,
    })
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-heading font-bold tracking-tight relative group"
        >
          <span className="text-foreground">Erick</span>
          <span className="text-brand"> Gonzalez</span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contacto" className="nav-link">
            <Button size="sm" className="rounded-full">
              Contacto
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground relative z-50 magnetic-target"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-medium hover:text-brand transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              <Button className="rounded-full mt-4">Contacto</Button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
