import { motion } from 'framer-motion'
import type { SocialLink } from '../types/portfolio'
import { cn } from '../lib/cn'

interface SocialLinksProps {
  links: SocialLink[]
  compact?: boolean
}

export function SocialLinks({ links, compact = false }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className={cn(
            'group inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--accent-secondary)]/40 hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-secondary)]/70',
            compact ? 'h-11 w-11' : 'gap-3 px-4 py-3',
          )}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
        >
          <Icon className="h-4 w-4" />
          {!compact ? <span className="text-sm font-medium">{label}</span> : null}
        </motion.a>
      ))}
    </div>
  )
}
