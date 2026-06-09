'use client'
import { useRef, useEffect, useCallback } from 'react'
import { gsap } from '@/lib/gsap'

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const linksRef = useRef<HTMLElement[]>([])
  const isHovering = useRef(false)

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = e.clientX
    mouse.current.y = e.clientY
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    window.addEventListener('mousemove', onMouseMove)

    gsap.ticker.add(() => {
      const mx = mouse.current.x
      const my = mouse.current.y

      pos.current.x += (mx - pos.current.x) * 0.18
      pos.current.y += (my - pos.current.y) * 0.18

      gsap.set(cursor, { x: mx, y: my })
      gsap.set(follower, { x: pos.current.x, y: pos.current.y })
    })

    const handleLinkEnter = () => {
      isHovering.current = true

      gsap.to(cursor, {
        scale: 0.5,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(follower, {
        scale: 2.5,
        borderColor: 'var(--brand)',
        backgroundColor: 'var(--brand)',
        duration: 0.4,
        ease: 'power3.out',
      })
    }

    const handleLinkLeave = () => {
      isHovering.current = false
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(follower, {
        scale: 1,
        borderColor: 'var(--brand)',
        backgroundColor: 'transparent',
        duration: 0.4,
        ease: 'power3.out',
      })
    }

    const links = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .magnetic-target'
    ) as NodeListOf<HTMLElement>
    linksRef.current = Array.from(links)

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkEnter)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      linksRef.current.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkEnter)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [onMouseMove])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-brand rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-brand rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 hidden lg:block"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
