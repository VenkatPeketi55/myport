import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { roadmap } from '../data/portfolio'

export function JourneySection() {
  return (
    <section
      id="journey"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Journey"
          title="An interactive roadmap through learning, certifications, milestones, and modern product craft."
          description="This timeline is about more than titles. It shows how the work matured from UI experiments into product systems, AI workflows, and cinematic launch experiences."
          titleId="journey-heading"
        />

        <div className="space-y-8">
          {roadmap.map((entry, index) => (
            <motion.article
              key={entry.phase}
              className="relative grid gap-6 lg:grid-cols-[220px_1fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="relative">
                <div className="rounded-[26px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--accent-secondary)]">
                    Phase {entry.phase}
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--text-muted)]">{entry.period}</p>
                </div>
                {index !== roadmap.length - 1 ? (
                  <span className="absolute left-1/2 top-[calc(100%+0.8rem)] hidden h-16 w-px -translate-x-1/2 bg-[linear-gradient(180deg,var(--accent-primary),transparent)] lg:block" />
                ) : null}
              </div>

              <GlassCard glow className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                      Career roadmap
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
                      {entry.description}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                    <entry.icon className="h-6 w-6 text-[color:var(--accent-secondary)]" />
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {entry.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-4 text-sm leading-7 text-[color:var(--text-secondary)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
