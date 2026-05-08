import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/portfolio'

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Support that stretches from launch visuals to full stack product delivery."
          description="Built for teams that want strong first impressions and strong implementation discipline at the same time."
          titleId="services-heading"
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon, outcomes }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <GlassCard className="h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                  <Icon className="h-6 w-6 text-[color:var(--accent-secondary)]" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-secondary)]">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-secondary)]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
