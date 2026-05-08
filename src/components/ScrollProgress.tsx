import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    mass: 0.15,
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[linear-gradient(90deg,var(--accent-primary)_0%,var(--accent-secondary)_100%)] shadow-[0_0_18px_var(--accent-secondary)]"
      style={{ scaleX }}
    />
  )
}
