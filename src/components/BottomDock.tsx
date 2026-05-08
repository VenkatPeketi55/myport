import { motion } from 'framer-motion'
import { navItems } from '../data/portfolio'
import type { SectionId } from '../types/portfolio'
import { cn } from '../lib/cn'

interface BottomDockProps {
  activeSection: SectionId
}

export function BottomDock({ activeSection }: BottomDockProps) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-[55] px-4 lg:hidden">
      <motion.nav
        className="mx-auto flex max-w-md items-center justify-between gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 shadow-[0_20px_60px_var(--shadow)] backdrop-blur-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
        aria-label="Bottom dock navigation"
      >
        {navItems.slice(0, 6).map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              'flex-1 rounded-full px-3 py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition-colors',
              activeSection === item.id
                ? 'bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]'
                : 'text-[color:var(--text-muted)]',
            )}
          >
            {item.label}
          </a>
        ))}
      </motion.nav>
    </div>
  )
}
