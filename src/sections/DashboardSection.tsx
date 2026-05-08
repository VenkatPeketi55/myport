import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { dashboardCards, experienceHighlights, techStack } from '../data/portfolio'

export function DashboardSection() {
  return (
    <section
      id="dashboard"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="dashboard-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Bento Dashboard"
          title="An Apple-style overview for recruiters, founders, and product teams."
          description="A high-density snapshot of availability, experience, stack preference, contact speed, and the premium systems mindset behind the work."
          titleId="dashboard-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {dashboardCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <GlassCard className="h-full">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                    <card.icon className="h-6 w-6 text-[color:var(--accent-secondary)]" />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                    {card.title}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                    {card.value}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {card.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6">
            <GlassCard glow>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                Experience cards
              </p>
              <div className="mt-6 grid gap-4">
                {experienceHighlights.map((item) => (
                  <motion.div
                    key={item.company}
                    className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                          {item.company}
                        </p>
                      </div>
                      <span className="theme-chip">{item.period}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                      {item.summary}
                    </p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                Preferred stack
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                React + motion + strong product thinking.
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {techStack.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-4 text-center"
                  >
                    <Icon className="mx-auto h-6 w-6 text-[color:var(--accent-secondary)]" />
                    <p className="mt-3 text-sm font-medium text-[color:var(--text-primary)]">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[color:var(--text-secondary)]">
                Best suited for premium marketing pages, SaaS dashboards, AI product shells, motion-rich branding surfaces, and launch-ready developer portfolios.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
