import { SectionHeading } from '../components/SectionHeading'
import { TimelineItem } from '../components/TimelineItem'
import { timeline } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Experience"
          title="A vertical experience timeline built like a product roadmap instead of a plain resume."
          description="The emphasis here is on responsibility, product influence, and the quality bar brought into each environment rather than just a list of titles."
          titleId="experience-heading"
        />

        <div className="space-y-12">
          {timeline.map((entry, index) => (
            <TimelineItem
              key={`${entry.company}-${entry.role}`}
              entry={entry}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
