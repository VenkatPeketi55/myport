import { startTransition, useEffect, useState } from 'react'
import type { SectionId } from '../types/portfolio'

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        const mostVisible = visibleEntries[0]

        if (!mostVisible) {
          return
        }

        startTransition(() => {
          setActiveSection(mostVisible.target.id as SectionId)
        })
      },
      {
        rootMargin: '-24% 0px -52% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
