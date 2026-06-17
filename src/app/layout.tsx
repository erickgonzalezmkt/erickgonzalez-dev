import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

// Primary font — DM Sans (clean, modern sans for body)
const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

// Headline font — Space Grotesk (distinctive, tech-forward, variable)
const headingFont = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  preload: true,
})

export const viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Erick Gonzalez | Technology Partner — Web, Automation & Growth',
    template: '%s | Erick Gonzalez',
  },
  description:
    'Socio tecnológico especializado en diseño web, automatización de leads y sistemas de crecimiento. Transformo visitantes en clientes con tecnología premium.',
  keywords: [
    'Erick Gonzalez',
    'desarrollo web',
    'automatización',
    'lead generation',
    'Cortex Lead Engine',
    'Next.js',
    'WordPress',
    'Framer',
    'tecnología',
    'crecimiento',
  ],
  authors: [{ name: 'Erick Gonzalez', url: 'https://erickgonzalez.dev' }],
  creator: 'Erick Gonzalez',
  publisher: 'Cortex Enterprise',
  metadataBase: new URL('https://erickgonzalez.dev'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Erick Gonzalez',
    title: 'Erick Gonzalez | Technology Partner — Web, Automation & Growth',
    description:
      'Socio tecnológico especializado en diseño web, automatización de leads y sistemas de crecimiento.',
    url: 'https://erickgonzalez.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Erick Gonzalez — Technology Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erick Gonzalez | Technology Partner',
    description:
      'Socio tecnológico especializado en diseño web, automatización de leads y sistemas de crecimiento.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Erick Gonzalez — Technology Partner',
      },
    ],
    creator: '@erickgonzalez',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://erickgonzalez.dev',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-MX"
      className={`${dmSans.variable} ${headingFont.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Erick Gonzalez',
              givenName: 'Erick',
              familyName: 'Gonzalez',
              url: 'https://erickgonzalez.dev',
              jobTitle: 'Technology Partner',
              worksFor: {
                '@type': 'Organization',
                name: 'Cortex Enterprise',
              },
              knowsAbout: [
                'Web Development',
                'Automation',
                'Lead Generation',
                'Next.js',
                'React',
                'WordPress',
                'Framer',
                'CRM Integration',
              ],
              sameAs: [
                'https://github.com/erickgonzalezmkt',
                'https://linkedin.com/in/erickgonzalez',
              ],
            }),
          }}
        />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Cortex Enterprise',
              url: 'https://cortexenterprise.com',
              founder: {
                '@type': 'Person',
                name: 'Erick Gonzalez',
              },
              description:
                'Sistemas de captación de leads automatizados y desarrollo web premium.',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Diseño Web Framer',
                  price: '300',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'WordPress',
                  price: '500',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'Next.js Premium',
                  price: '1500',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: 'Full Stack + Automation',
                  price: '3000',
                  priceCurrency: 'USD',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
