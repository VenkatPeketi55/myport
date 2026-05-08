import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Testimonial } from '../types/portfolio'
import { GlassCard } from './GlassCard'

interface TestimonialSliderProps {
  items: Testimonial[]
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
    }, 5200)

    return () => window.clearInterval(intervalId)
  }, [items.length])

  const activeItem = items[activeIndex]

  return (
    <div className="space-y-6">
      <GlassCard className="overflow-hidden p-0">
        <div className="border-b border-[color:var(--border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent-primary)_18%,transparent),color-mix(in_srgb,var(--accent-secondary)_8%,transparent))] px-6 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-secondary)]">
              Client feedback
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]"
                aria-label="Show previous testimonial"
                onClick={() =>
                  setActiveIndex((currentIndex) =>
                    currentIndex === 0 ? items.length - 1 : currentIndex - 1,
                  )
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]"
                aria-label="Show next testimonial"
                onClick={() =>
                  setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
                }
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-[300px] p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.figure
              key={`${activeItem.name}-${activeIndex}`}
              className="space-y-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              <blockquote className="font-display text-2xl leading-[1.4] tracking-[-0.03em] text-[color:var(--text-primary)] sm:text-3xl">
                "{activeItem.quote}"
              </blockquote>
              <figcaption className="space-y-4">
                <div>
                  <p className="text-base font-semibold text-[color:var(--text-primary)]">
                    {activeItem.name}
                  </p>
                  <p className="text-sm text-[color:var(--text-muted)]">
                    {activeItem.role} · {activeItem.company}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="theme-chip">{activeItem.logo}</span>
                  <span className="theme-chip">
                    <PlayCircle className="h-3.5 w-3.5" />
                    {activeItem.videoLabel}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </GlassCard>

      <div className="flex items-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.name}
            type="button"
            className="group flex items-center gap-3 rounded-full"
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setActiveIndex(index)}
          >
            <span
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? 'w-12 bg-[color:var(--accent-secondary)]'
                  : 'w-2.5 bg-[color:var(--border)]'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
