import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Erick Gonzalez | Technology Partner',
    short_name: 'ErickGonzalez',
    description:
      'Socio tecnológico especializado en diseño web, automatización de leads y sistemas de crecimiento.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
