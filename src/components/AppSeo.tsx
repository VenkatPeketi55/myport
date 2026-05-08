import { Helmet } from 'react-helmet-async'
import { portfolioMeta } from '../data/portfolio'
import { useTheme } from '../hooks/useTheme'
import type { SectionId } from '../types/portfolio'

const sectionLabels: Record<SectionId, string> = {
  home: 'Hero',
  dashboard: 'Bento Dashboard',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  'ai-lab': 'AI Features',
  github: 'GitHub',
  terminal: 'Developer Terminal',
  journey: 'Journey',
  experience: 'Experience',
  services: 'Services',
  achievements: 'Achievements',
  testimonials: 'Testimonials',
  contact: 'Contact',
}

export function AppSeo({ activeSection }: { activeSection: SectionId }) {
  const { theme } = useTheme()
  const sectionLabel = sectionLabels[activeSection]
  const title = `${portfolioMeta.name} | ${sectionLabel} | ${theme.label}`
  const description = `${portfolioMeta.headline} Explore the ${sectionLabel.toLowerCase()} section in the ${theme.label} theme experience.`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioMeta.name,
    jobTitle: portfolioMeta.role,
    description: portfolioMeta.statement,
    email: portfolioMeta.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: portfolioMeta.location,
    },
    sameAs: [
      'https://github.com/aaravmehta',
      'https://www.linkedin.com/in/aaravmehta',
      'https://dribbble.com/aaravmehta',
    ],
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-cover.svg" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="theme-color" content={theme.colors['--bg-app']} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
