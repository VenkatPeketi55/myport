import { motion } from 'framer-motion'
import { ArrowUpRight, FolderOpen, Play } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import type { Project } from '../types/portfolio'
import { GlassCard } from './GlassCard'
import { TiltCard } from './TiltCard'

interface ProjectCardProps {
  project: Project
  onPreview: (project: Project) => void
}

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <TiltCard>
        <GlassCard className="group h-full overflow-hidden p-0">
          <div
            className="relative overflow-hidden rounded-[28px] border-b border-[color:var(--border)] p-5"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_42%)]" />
            <div className="relative rounded-[24px] border border-white/18 bg-slate-950/22 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-white/80">
                <span>{project.preview.eyebrow}</span>
                <span>{project.year}</span>
              </div>
              <div className="mt-8 rounded-[22px] border border-white/10 bg-white/8 p-4">
                <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="h-2 w-[4.5rem] rounded-full bg-white/45" />
                    <div className="h-[6.5rem] rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08))]" />
                  </div>
                  <div className="grid gap-3">
                    <div className="h-12 rounded-2xl bg-white/16" />
                    <div className="h-12 rounded-2xl bg-white/12" />
                    <div className="h-12 rounded-2xl bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <p className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                  {project.preview.headline}
                </p>
                <p className="max-w-lg text-sm leading-7 text-white/76">
                  {project.preview.detail}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span key={metric} className="theme-chip">
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span key={category} className="theme-chip">
                  {category}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn-primary inline-flex items-center gap-2"
                onClick={() => onPreview(project)}
              >
                Preview modal
                <FolderOpen className="h-4 w-4" />
              </button>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                GitHub
                <FaGithub className="h-4 w-4" />
              </a>
              <span className="theme-chip">
                <Play className="h-3.5 w-3.5" />
                {project.demoType === 'iframe' ? 'Iframe preview' : 'Showcase mode'}
              </span>
            </div>
          </div>
        </GlassCard>
      </TiltCard>
    </motion.div>
  )
}
