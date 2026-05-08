import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Play, X } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const modalTabs = ['overview', 'timeline', 'before-after', 'preview'] as const
type ModalTab = (typeof modalTabs)[number]

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>('overview')

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] overflow-y-auto bg-black/72 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mx-auto max-w-6xl rounded-[34px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-5 shadow-[0_32px_120px_var(--shadow)] sm:p-7"
            initial={{ y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  Case study / {project.category}
                </p>
                <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]"
                aria-label="Close project modal"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {modalTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]'
                      : 'text-[color:var(--text-muted)]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-5">
                {activeTab === 'overview' ? (
                  <>
                    <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-6">
                      <p className="text-base leading-8 text-[color:var(--text-secondary)]">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="theme-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5 text-sm leading-7 text-[color:var(--text-secondary)]"
                        >
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}

                {activeTab === 'timeline' ? (
                  <div className="space-y-4">
                    {project.walkthrough.map((step, index) => (
                      <div
                        key={step}
                        className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                          Stage 0{index + 1}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {activeTab === 'before-after' ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-6">
                      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                        Before
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                        {project.before}
                      </p>
                    </div>
                    <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-6">
                      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                        After
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                        {project.after}
                      </p>
                    </div>
                  </div>
                ) : null}

                {activeTab === 'preview' ? (
                  <div className="overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                    {project.demoType === 'iframe' ? (
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} live preview`}
                        className="h-[420px] w-full border-0"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-[420px] flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] p-8 text-center">
                        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)]">
                          <Play className="h-7 w-7 text-[color:var(--accent-secondary)]" />
                        </div>
                        <h4 className="font-display text-2xl text-[color:var(--text-primary)]">
                          Showcase preview
                        </h4>
                        <p className="max-w-lg text-sm leading-7 text-[color:var(--text-secondary)]">
                          This project uses a stylized showcase mode instead of a real iframe so the presentation stays smooth even when the live product is private or protected.
                        </p>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>

              <div className="space-y-5">
                <div
                  className="laptop-shell rounded-[32px] border border-[color:var(--border)] p-4"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                  }}
                >
                  <div className="rounded-[24px] border border-white/18 bg-slate-950/30 p-5 backdrop-blur-md">
                    <div className="mb-4 h-3 w-24 rounded-full bg-white/55" />
                    <div className="space-y-4 rounded-[20px] border border-white/10 bg-white/8 p-4">
                      <div className="grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                          <div className="h-28 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.08))]" />
                        </div>
                        <div className="grid gap-3">
                          <div className="h-12 rounded-2xl bg-white/15" />
                          <div className="h-12 rounded-2xl bg-white/12" />
                          <div className="h-12 rounded-2xl bg-white/10" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/85">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-white/14 bg-white/10 px-3 py-2"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                    Tech stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="theme-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Open live
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
