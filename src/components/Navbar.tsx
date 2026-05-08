import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Sparkles, X } from 'lucide-react'
import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { portfolioMeta } from '../data/portfolio'
import { cn } from '../lib/cn'
import { useTheme } from '../hooks/useTheme'
import type { NavItem, SectionId } from '../types/portfolio'
import { MagneticLink } from './MagneticLink'
import { ThemeSwitcher } from './ThemeSwitcher'

interface NavbarProps {
  activeSection: SectionId
  items: NavItem[]
}

export function Navbar({ activeSection, items }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 28 : false,
  )
  const [isVisible, setIsVisible] = useState(true)
  const previousScrollY = useRef(
    typeof window !== 'undefined' ? window.scrollY : 0,
  )
  const { theme } = useTheme()

  const handleScroll = useEffectEvent(() => {
    const currentScrollY = window.scrollY
    setIsScrolled(currentScrollY > 28)
    setIsVisible(
      currentScrollY < 88 || currentScrollY < previousScrollY.current,
    )
    previousScrollY.current = currentScrollY
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      animate={{ y: isVisible ? 0 : -110 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <motion.div
        className={cn('mx-auto max-w-7xl nav-surface', isScrolled && 'is-scrolled')}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-full px-2 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-secondary)]/70"
            aria-label="Go to home section"
          >
            <span className="brand-orb flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold tracking-[0.2em]">
              AM
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-[color:var(--text-primary)]">
                {portfolioMeta.name}
              </span>
              <span className="block text-xs text-[color:var(--text-muted)]">
                {portfolioMeta.shortRole}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-secondary)]/70',
                  activeSection === item.id
                    ? 'text-[color:var(--text-primary)]'
                    : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]',
                )}
              >
                {activeSection === item.id ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent-primary)_26%,transparent),color-mix(in_srgb,var(--accent-secondary)_20%,transparent))]"
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <span className="theme-chip hidden xl:inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              {theme.mood}
            </span>
            <MagneticLink href="#contact" className="btn-primary hidden md:inline-flex">
              Start a project
            </MagneticLink>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-primary)] lg:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl rounded-[30px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4 shadow-[0_24px_80px_var(--shadow)] backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav className="grid gap-2" aria-label="Mobile primary">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                    activeSection === item.id
                      ? 'bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <MagneticLink
                href="#contact"
                className="btn-primary mt-2 inline-flex justify-center rounded-2xl"
                onClick={() => setMenuOpen(false)}
              >
                Start a project
              </MagneticLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
