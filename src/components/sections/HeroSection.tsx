'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#servicios"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Socio Tecnológico</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                        Sistemas que convierten <span className="text-brand">visitantes</span> en <span className="text-accent">clientes</span>
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        Technology Partner. Automatización, diseño web premium y sistemas de crecimiento que generan resultados desde el día 1.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Link
                                            href="#servicios"
                                            className="inline-flex shrink-0 items-center justify-center rounded-[12px] border border-transparent bg-primary text-primary-foreground h-9 gap-1.5 px-5 text-sm font-medium whitespace-nowrap transition-all hover:bg-primary/80">
                                            <span className="text-nowrap">Ver servicios</span>
                                        </Link>
                                    </div>
                                    <Link
                                        key={2}
                                        href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Vi tu landing y quiero agendar una llamada.')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent h-9 gap-1.5 px-5 text-sm font-medium whitespace-nowrap transition-all hover:bg-muted hover:text-foreground text-muted-foreground">
                                        <span className="text-nowrap">Agendar llamada</span>
                                    </Link>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <img
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <img
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>

            </main>
        </>
    )
}

const menuItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Planes', href: '#planes' },
    { name: 'FAQ', href: '#faq' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Cerrar menú al hacer clic en un link
    const handleNavClick = () => {
        setMenuState(false)
    }

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                    isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
                )}>
                    <div className="flex items-center justify-between py-3 lg:py-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2 shrink-0">
                            <span className="text-xl font-heading font-bold tracking-tight whitespace-nowrap">
                                <span className="text-foreground">Erick</span>
                                <span className="text-brand"> Gonzalez</span>
                            </span>
                        </Link>

                        {/* Desktop nav centered */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150 whitespace-nowrap">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Quiero saber más sobre tus servicios.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-8 gap-1.5 px-3 text-sm font-medium whitespace-nowrap transition-all">
                                <span>WhatsApp</span>
                            </Link>
                            <Link
                                href="#contacto"
                                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 h-8 gap-1.5 px-3 text-sm font-medium whitespace-nowrap transition-all">
                                <span>Contacto</span>
                            </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Cerrar menú' : 'Abrir menú'}
                            className="relative z-30 flex cursor-pointer p-2 lg:hidden">
                            <Menu className={cn(
                                'size-6 transition-all duration-200',
                                menuState ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                            )} />
                            <X className={cn(
                                'absolute inset-0 m-auto size-6 transition-all duration-200',
                                menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                            )} />
                        </button>
                    </div>
                </div>

                {/* Mobile menu overlay */}
                <div className={cn(
                    'fixed inset-0 z-20 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden',
                    menuState
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                )}>
                    <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
                        <ul className="space-y-2 mb-8">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="block py-3 px-4 text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all duration-200">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto space-y-3">
                            <Link
                                href={`https://wa.me/584120198300?text=${encodeURIComponent('Hola Erick! Quiero saber más sobre tus servicios.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleNavClick}
                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/10 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground/5">
                                <span>WhatsApp</span>
                            </Link>
                            <Link
                                href="#contacto"
                                onClick={handleNavClick}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-brand/80">
                                <span>Contacto</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
