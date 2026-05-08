import { motion } from 'framer-motion'

const codeLines = [
  'const product = launchExperience({',
  "  stack: ['React', 'Motion', 'Three.js'],",
  "  mood: 'cinematic',",
  '  polish: true,',
  "  seo: 'structured + fast',",
  '})',
]

export function LiveCodePanel() {
  return (
    <div className="terminal-shell rounded-[28px] p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <div className="space-y-3 font-mono text-xs sm:text-sm">
        {codeLines.map((line, index) => (
          <motion.div
            key={line}
            className="flex gap-4 text-[color:var(--text-secondary)]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
          >
            <span className="w-5 text-[color:var(--text-muted)]">{index + 1}</span>
            <span>{line}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
