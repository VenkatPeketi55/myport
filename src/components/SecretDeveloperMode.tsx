import { AnimatePresence, motion } from 'framer-motion'
import { Gamepad2, X } from 'lucide-react'
import { hiddenFacts } from '../data/portfolio'

interface SecretDeveloperModeProps {
  isOpen: boolean
  onClose: () => void
}

export function SecretDeveloperMode({
  isOpen,
  onClose,
}: SecretDeveloperModeProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[85] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="dev-mode-panel relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_28px_90px_var(--shadow)]"
            initial={{ scale: 0.96, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 16, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]"
              onClick={onClose}
              aria-label="Close secret developer mode"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                <Gamepad2 className="h-6 w-6 text-[color:var(--accent-secondary)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
                  Secret developer mode
                </p>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                  Konami unlocked
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-sm uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                  Hidden release notes
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {hiddenFacts.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-secondary)]" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-sm uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                  Retro popup
                </p>
                <div className="mt-5 rounded-[24px] border border-[color:var(--border)] bg-black/60 p-4 font-mono text-xs text-[color:var(--accent-secondary)]">
                  <p>&gt; loading pixel arcade...</p>
                  <p>&gt; obstacle avoidance module online</p>
                  <p>&gt; soundtrack visualizer armed</p>
                  <div className="mt-4 flex h-24 items-end gap-2">
                    {Array.from({ length: 18 }).map((_, index) => (
                      <motion.span
                        key={index}
                        className="flex-1 rounded-t bg-[linear-gradient(180deg,var(--accent-primary),var(--accent-secondary))]"
                        animate={{ height: [16, 84 - (index % 3) * 12, 22 + (index % 4) * 10] }}
                        transition={{
                          duration: 1 + index * 0.08,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: 'reverse',
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
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
