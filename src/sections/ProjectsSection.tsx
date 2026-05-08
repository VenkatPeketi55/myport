import { AnimatePresence } from 'framer-motion'
import { startTransition, useDeferredValue, useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { SectionHeading } from '../components/SectionHeading'
import { aiRecommendations, projectFilters, projects } from '../data/portfolio'
import type { Project } from '../types/portfolio'

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const deferredFilter = useDeferredValue(selectedFilter)

  const filteredProjects = useMemo(() => {
    if (deferredFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.categories.includes(deferredFilter))
  }, [deferredFilter])

  const recommendation = useMemo(
    () =>
      aiRecommendations.find((item) =>
        selectedFilter !== 'All'
          ? item.matchingProjects.some((projectName) =>
              filteredProjects.some((project) => project.title === projectName),
            )
          : item.title === 'Visual Craft Recommendation',
      ) ?? aiRecommendations[0],
    [filteredProjects, selectedFilter],
  )

  return (
    <>
      <section
        id="projects"
        className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Immersive project experiences with filtering, case-study detail, and live previews."
              description="These cards are designed to feel more like mini product launches than portfolio thumbnails, with preview modals, before/after framing, and walkthrough timelines."
              titleId="projects-heading"
            />
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'border-[color:var(--accent-secondary)]/40 bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]'
                      : 'border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--text-secondary)]'
                  }`}
                  onClick={() => {
                    startTransition(() => {
                      setSelectedFilter(filter)
                    })
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              AI project recommendation
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
              {recommendation.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
              {recommendation.explanation}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {recommendation.matchingProjects.map((projectName) => (
                <span key={projectName} className="theme-chip">
                  {projectName}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onPreview={setActiveProject}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ProjectModal
        key={activeProject?.slug ?? 'closed'}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}
