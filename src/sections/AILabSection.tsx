import { motion } from 'framer-motion'
import { GlassCard } from '../components/GlassCard'
import { ResumeAnalyzer } from '../components/ResumeAnalyzer'
import { SectionHeading } from '../components/SectionHeading'
import { aiRecommendations, askMeAnswers } from '../data/portfolio'

export function AILabSection() {
  return (
    <section
      id="ai-lab"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="ai-lab-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="AI Features"
          title="Portfolio intelligence: assistant prompts, resume matching, and project recommendations."
          description="These tools are built to feel useful in a real recruiting or founder conversation, even without requiring a backend model to respond."
          titleId="ai-lab-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <ResumeAnalyzer />

          <GlassCard className="h-full">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
              Ask me anything knowledge base
            </p>
            <div className="mt-6 space-y-4">
              {askMeAnswers.map((item) => (
                <motion.div
                  key={item.question}
                  className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-sm font-semibold text-[color:var(--text-primary)]">
                    {item.question}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {aiRecommendations.map((recommendation) => (
            <GlassCard key={recommendation.title}>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                AI recommendation
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                {recommendation.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                {recommendation.explanation}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {recommendation.matchingProjects.map((projectName) => (
                  <span key={projectName} className="theme-chip">
                    {projectName}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
