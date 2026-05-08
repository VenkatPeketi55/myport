import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { skillCategories } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="A stack designed for premium interaction, scale, and product momentum."
          description="Each category is tuned toward a specific kind of output: polished frontend systems, dependable backends, strong data modeling, and delivery tooling that supports real products."
          titleId="skills-heading"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map(({ id, title, description, icon: Icon, skills }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                      {title}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
                      {title} Systems
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
                      {description}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                    <Icon className="h-6 w-6 text-[color:var(--accent-secondary)]" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {skills.map(({ name, icon: SkillIcon, level, note }) => (
                    <motion.div
                      key={name}
                      className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)]">
                            <SkillIcon className="h-5 w-5 text-[color:var(--accent-secondary)]" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-[color:var(--text-primary)]">
                              {name}
                            </h4>
                            <p className="text-sm text-[color:var(--text-muted)]">{level}</p>
                          </div>
                        </div>
                        <span className="theme-chip">{level}</span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                        {note}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
