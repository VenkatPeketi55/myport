import { AnimatePresence, motion } from 'framer-motion'

interface LoadingScreenProps {
  isVisible: boolean
  name: string
}

export function LoadingScreen({ isVisible, name }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#080b14]/96 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          <div className="relative flex flex-col items-center gap-5 text-center">
            <motion.div
              className="absolute h-28 w-28 rounded-full bg-violet-500/20 blur-3xl"
              animate={{ scale: [0.9, 1.08, 0.92], opacity: [0.5, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            />
            <motion.div
              className="relative h-20 w-20 rounded-[28px] border border-white/12 bg-white/6"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            >
              <div className="absolute inset-3 rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.35),rgba(6,182,212,0.22))]" />
            </motion.div>
            <div className="relative space-y-2">
              <p className="font-display text-3xl font-bold tracking-[-0.04em] text-white">
                {name}
              </p>
              <p className="text-sm uppercase tracking-[0.34em] text-slate-400">
                Initializing portfolio experience
              </p>
            </div>
            <motion.div
              className="h-1.5 w-44 overflow-hidden rounded-full bg-white/8"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,#7C3AED_0%,#06B6D4_100%)]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
