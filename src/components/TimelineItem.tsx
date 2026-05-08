import { motion } from 'framer-motion'
import type { TimelineEntry } from '../types/portfolio'

interface TimelineItemProps {
  entry: TimelineEntry
  isLast: boolean
}

export function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <motion.article
      className="relative grid gap-6 pl-10 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="absolute left-0 top-1 sm:left-[172px] sm:top-2">
        <span className="timeline-dot block h-4 w-4 rounded-full" />
        {!isLast ? <span className="timeline-stem absolute left-1.5 top-4 h-[calc(100%+3rem)] w-px" /> : null}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-secondary)]">
          {entry.duration}
        </p>
        <p className="text-sm text-[color:var(--text-muted)]">{entry.location}</p>
      </div>
      <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-6 shadow-[0_24px_64px_var(--shadow)] backdrop-blur-md sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
              {entry.role}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              {entry.company}
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
          {entry.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-secondary)]" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
