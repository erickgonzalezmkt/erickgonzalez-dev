export interface TechItem {
  name: string
  category: 'frontend' | 'backend' | 'automation' | 'infra'
  color: string
}

export const techStack: TechItem[] = [
  // Frontend
  { name: 'Next.js', category: 'frontend', color: '#000000' },
  { name: 'React', category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'frontend', color: '#06B6D4' },
  { name: 'Framer Motion', category: 'frontend', color: '#0055FF' },
  { name: 'Framer', category: 'frontend', color: '#0055FF' },
  // Backend
  { name: 'Node.js', category: 'backend', color: '#339933' },
  { name: 'Python', category: 'backend', color: '#3776AB' },
  { name: 'FastAPI', category: 'backend', color: '#009688' },
  { name: 'PostgreSQL', category: 'backend', color: '#4169E1' },
  // Automation
  { name: 'n8n', category: 'automation', color: '#EA4C89' },
  { name: 'Zapier', category: 'automation', color: '#FF4A00' },
  { name: 'Make', category: 'automation', color: '#A855F7' },
  { name: 'ManyChat', category: 'automation', color: '#00C853' },
  // Infra
  { name: 'Vercel', category: 'infra', color: '#000000' },
  { name: 'Netlify', category: 'infra', color: '#00C7B7' },
  { name: 'Railway', category: 'infra', color: '#0B0D0E' },
  { name: 'AWS', category: 'infra', color: '#FF9900' },
]
