import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  titleId?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
}: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <motion.div
      className={cn('max-w-3xl', isCentered && 'mx-auto text-center')}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="eyebrow-badge">
        <span className="h-2 w-2 rounded-full bg-[color:var(--accent-secondary)] shadow-[0_0_16px_var(--accent-secondary)]" />
        {eyebrow}
      </span>
      <h2
        id={titleId}
        className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-[color:var(--text-primary)] sm:text-5xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[color:var(--text-secondary)] sm:text-lg">
        {description}
      </p>
    </motion.div>
  )
}
