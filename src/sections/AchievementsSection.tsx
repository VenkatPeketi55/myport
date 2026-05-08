import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { achievements, stats } from '../data/portfolio'
import { AnimatedCounter } from '../components/AnimatedCounter'

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Achievements"
          title="Certificates, awards, hackathons, and milestone counters in one premium section."
          description="A cleaner proof layer for recruiters and hiring teams who want to scan not only what was built, but the signals around quality, curiosity, and momentum."
          titleId="achievements-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <GlassCard className="h-full">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                    <achievement.icon className="h-6 w-6 text-[color:var(--accent-secondary)]" />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                    {achievement.issuer} / {achievement.year}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                    {achievement.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {achievement.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard glow className="h-full">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              Animated milestones
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                >
                  <p className="font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--text-primary)]">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
