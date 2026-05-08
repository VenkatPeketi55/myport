import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { resumeAnalyzerKeywords } from '../data/portfolio'

export function ResumeAnalyzer() {
  const [value, setValue] = useState('')

  const analysis = useMemo(() => {
    const normalized = value.toLowerCase()
    const strongMatches = resumeAnalyzerKeywords.strengths.filter((keyword) =>
      normalized.includes(keyword),
    )
    const bonusMatches = resumeAnalyzerKeywords.bonus.filter((keyword) =>
      normalized.includes(keyword),
    )
    const score = Math.min(100, strongMatches.length * 8 + bonusMatches.length * 5)

    return {
      score,
      strongMatches,
      bonusMatches,
      note:
        score >= 70
          ? 'Strong alignment with the portfolio’s core frontend + product strengths.'
          : score >= 40
            ? 'Moderate alignment. Adding more explicit product, performance, or motion keywords would improve the fit.'
            : 'Light alignment so far. Mention React, TypeScript, performance, accessibility, motion, or product ownership to strengthen the signal.',
    }
  }, [value])

  return (
    <div className="space-y-4 rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
          AI resume analyzer
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
          Paste a resume summary
        </h3>
      </div>

      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="input-shell min-h-40 resize-y"
        placeholder="Paste a role summary, recruiter note, or resume excerpt to estimate alignment with this portfolio’s strengths."
      />

      <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel)] p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-[color:var(--text-secondary)]">
            Match score
          </p>
          <p className="font-display text-4xl text-[color:var(--text-primary)]">
            {analysis.score}%
          </p>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-[color:var(--panel-soft)]">
          <motion.div
            className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-primary),var(--accent-secondary))]"
            animate={{ width: `${analysis.score}%` }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
        </div>
        <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
          {analysis.note}
        </p>
      </div>
    </div>
  )
}
