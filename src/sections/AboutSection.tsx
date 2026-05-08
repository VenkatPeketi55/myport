import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { portfolioMeta } from '../data/portfolio'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="About"
          title="Built for teams that want product quality you can feel immediately."
          description={portfolioMeta.about}
          titleId="about-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="h-full">
            <GlassCard glow className="h-full">
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                Professional bio
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
                {portfolioMeta.bio}
              </h3>
              <p className="mt-5 text-base leading-8 text-[color:var(--text-secondary)]">
                {portfolioMeta.about}
              </p>
              <div className="mt-8 rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-sm leading-7 text-[color:var(--text-secondary)]">
                  I like interfaces that carry the confidence of a product launch page but still feel calm enough for everyday use. That usually means stronger hierarchy, cleaner motion, tighter copy, and engineering decisions that keep the system scalable after launch.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6">
            <Reveal>
              <GlassCard>
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                  Working style
                </p>
                <div className="mt-5 grid gap-4">
                  {[
                    'Translate product complexity into interfaces that feel lighter and clearer.',
                    'Move fast without sacrificing polish, accessibility, or maintainability.',
                    'Use motion and layout to support comprehension rather than distract from it.',
                    'Keep systems flexible enough for teams to extend after launch.',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5 text-sm leading-7 text-[color:var(--text-secondary)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.08}>
              <GlassCard>
                <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                  Design references
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Apple', 'Linear', 'Vercel', 'Stripe', 'Raycast', 'Framer'].map(
                    (brand) => (
                      <span key={brand} className="theme-chip">
                        {brand}
                      </span>
                    ),
                  )}
                </div>
                <p className="mt-5 text-sm leading-7 text-[color:var(--text-secondary)]">
                  The goal is not imitation. It is to borrow the clarity, restraint, confidence, and product storytelling discipline that make those experiences feel premium.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
