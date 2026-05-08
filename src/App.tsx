import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { AppSeo } from './components/AppSeo'
import { AskMeWidget } from './components/AskMeWidget'
import { BottomDock } from './components/BottomDock'
import { CursorGlow } from './components/CursorGlow'
import { CursorTrails } from './components/CursorTrails'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { PremiumBackground } from './components/PremiumBackground'
import { ScrollProgress } from './components/ScrollProgress'
import { SecretDeveloperMode } from './components/SecretDeveloperMode'
import { SmoothScroll } from './components/SmoothScroll'
import { navItems, portfolioMeta } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { useKonamiCode } from './hooks/useKonamiCode'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { DashboardSection } from './sections/DashboardSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { Footer } from './sections/Footer'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'
import { SkillsSection } from './sections/SkillsSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import type { SectionId } from './types/portfolio'

const AILabSection = lazy(() =>
  import('./sections/AILabSection').then((module) => ({
    default: module.AILabSection,
  })),
)
const GithubSection = lazy(() =>
  import('./sections/GithubSection').then((module) => ({
    default: module.GithubSection,
  })),
)
const TerminalSection = lazy(() =>
  import('./sections/TerminalSection').then((module) => ({
    default: module.TerminalSection,
  })),
)
const JourneySection = lazy(() =>
  import('./sections/JourneySection').then((module) => ({
    default: module.JourneySection,
  })),
)
const AchievementsSection = lazy(() =>
  import('./sections/AchievementsSection').then((module) => ({
    default: module.AchievementsSection,
  })),
)

const trackedSections: SectionId[] = [
  'home',
  'dashboard',
  'about',
  'skills',
  'projects',
  'ai-lab',
  'github',
  'terminal',
  'journey',
  'experience',
  'services',
  'achievements',
  'testimonials',
  'contact',
]

function SectionFallback({ id }: { id: string }) {
  return (
    <section id={id} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-8" />
    </section>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const activeSection = useActiveSection(trackedSections)
  const { isUnlocked, setIsUnlocked } = useKonamiCode()

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AppSeo activeSection={activeSection} />
      <LoadingScreen isVisible={isLoading} name={portfolioMeta.name} />
      <ScrollProgress />
      <SmoothScroll />
      <PremiumBackground />
      <CursorGlow />
      <CursorTrails />
      <BottomDock activeSection={activeSection} />
      <AskMeWidget />
      <SecretDeveloperMode isOpen={isUnlocked} onClose={() => setIsUnlocked(false)} />

      <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--bg-app)] text-[color:var(--text-primary)] transition-colors duration-500">
        <div className="noise-overlay pointer-events-none fixed inset-0 z-0" />

        <a
          href="#home"
          className="skip-link fixed left-4 top-4 z-[95] rounded-full bg-[color:var(--panel-strong)] px-4 py-3 text-sm font-semibold text-[color:var(--text-primary)]"
        >
          Skip to content
        </a>

        <Navbar activeSection={activeSection} items={navItems} />

        <motion.main
          className="relative z-10 pb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 18 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <HeroSection />
          <DashboardSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <Suspense fallback={<SectionFallback id="ai-lab" />}>
            <AILabSection />
          </Suspense>
          <Suspense fallback={<SectionFallback id="github" />}>
            <GithubSection />
          </Suspense>
          <Suspense fallback={<SectionFallback id="terminal" />}>
            <TerminalSection />
          </Suspense>
          <Suspense fallback={<SectionFallback id="journey" />}>
            <JourneySection />
          </Suspense>
          <ExperienceSection />
          <ServicesSection />
          <Suspense fallback={<SectionFallback id="achievements" />}>
            <AchievementsSection />
          </Suspense>
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </motion.main>
      </div>
    </>
  )
}

export default App
