import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface MorphTextProps {
  phrases: string[]
}

export function MorphText({ phrases }: MorphTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % phrases.length)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [phrases.length])

  return (
    <span className="relative inline-flex min-h-[1.2em] min-w-[11ch] items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          className="absolute left-0 top-0 text-gradient"
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0">{phrases[0]}</span>
    </span>
  )
}
