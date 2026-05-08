import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Download, Sparkles } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { GlassCard } from '../components/GlassCard'
import { LiveCodePanel } from '../components/LiveCodePanel'
import { MagneticLink } from '../components/MagneticLink'
import { MorphText } from '../components/MorphText'
import { SocialLinks } from '../components/SocialLinks'
import { SplitRevealText } from '../components/SplitRevealText'
import {
  floatingBadges,
  heroHighlights,
  portfolioMeta,
  socialLinks,
  stats,
} from '../data/portfolio'
import { useTypingText } from '../hooks/useTypingText'

const GlobeCanvas = lazy(() =>
  import('../components/three/GlobeCanvas').then((module) => ({
    default: module.GlobeCanvas,
  })),
)

export function HeroSection() {
  const { text, cursorVisible } = useTypingText(portfolioMeta.typingRoles)

  return (
    <section
      id="home"
      className="scroll-mt-28 px-4 pb-20 pt-10 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <motion.div
            className="eyebrow-badge"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <Sparkles className="h-4 w-4" />
            {portfolioMeta.availability}
          </motion.div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.34em] text-[color:var(--text-muted)]">
              {portfolioMeta.intro}
            </p>
            <h1
              id="hero-heading"
              className="max-w-4xl font-display text-5xl font-bold tracking-[-0.06em] text-[color:var(--text-primary)] sm:text-6xl lg:text-7xl"
            >
              <SplitRevealText text={portfolioMeta.name} />
              <span className="mt-4 block">
                <MorphText
                  phrases={[
                    'Cinematic product launches',
                    'Futuristic SaaS interfaces',
                    'AI-native portfolio systems',
                  ]}
                />
              </span>
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--text-secondary)] sm:text-lg">
              {portfolioMeta.statement}
            </p>
          </div>

          <div className="terminal-shell max-w-2xl rounded-[28px] p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <div className="font-mono text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
              <span className="text-[color:var(--accent-secondary)]">$</span>{' '}
              <span className="text-[color:var(--text-muted)]">live-status</span>{' '}
              <span className="text-[color:var(--text-primary)]">{text}</span>
              <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>|</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <MagneticLink href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink
              href={portfolioMeta.resumeHref}
              download
              className="btn-secondary"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </MagneticLink>
          </div>

          <SocialLinks links={socialLinks} compact />
        </div>

        <div className="grid gap-5">
          <GlassCard glow className="relative overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Hero signal
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
                  {portfolioMeta.headline}
                </h2>
                <p className="text-sm leading-7 text-[color:var(--text-secondary)]">
                  {portfolioMeta.heroBlurb}
                </p>
                <div className="flex flex-wrap gap-3">
                  {floatingBadges.map(({ label, icon: Icon }) => (
                    <motion.span
                      key={label}
                      className="theme-chip"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Suspense
                  fallback={
                    <div className="h-[320px] w-full rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)]" />
                  }
                >
                  <GlobeCanvas />
                </Suspense>
                <motion.div
                  className="absolute -left-4 top-6 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--text-secondary)] shadow-[0_18px_50px_var(--shadow)] backdrop-blur-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                >
                  Interactive globe
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 right-6 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--text-secondary)] shadow-[0_18px_50px_var(--shadow)] backdrop-blur-xl"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.1, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                >
                  3D preview mode
                </motion.div>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
            <LiveCodePanel />
            <GlassCard className="h-full">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                    Scroll intelligence
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                    Apple-style density with calm readability.
                  </h3>
                </div>
                <a
                  href="#dashboard"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-secondary)]"
                >
                  Explore
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-4"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                      {highlight.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[color:var(--text-primary)]">
                      {highlight.value}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label}>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  {stat.label}
                </p>
                <p className="mt-5 font-display text-4xl font-bold tracking-[-0.06em] text-[color:var(--text-primary)]">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {stat.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
