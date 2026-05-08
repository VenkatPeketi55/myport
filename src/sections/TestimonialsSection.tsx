import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialSlider } from '../components/TestimonialSlider'
import { testimonials } from '../data/portfolio'

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Auto-sliding testimonials, glass cards, company badges, and recruiter-friendly proof."
          description="This section keeps the tone premium and cinematic while still giving real, scannable social proof."
          titleId="testimonials-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <TestimonialSlider items={testimonials} />
          <GlassCard glow className="h-full">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              Why the work lands
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
              Calm process. Premium output. Strong signal for hiring teams.
            </h3>
            <p className="mt-5 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
              The strongest compliment I get is that the output feels high-end without becoming noisy. The same standard applies to dashboards, launch pages, AI tooling, and this portfolio itself.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['4.9/5', 'Average collaboration rating'],
                ['78%', 'Repeat engagement rate'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                >
                  <p className="font-display text-4xl font-bold tracking-[-0.06em] text-[color:var(--text-primary)]">
                    {value}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                    {label}
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
