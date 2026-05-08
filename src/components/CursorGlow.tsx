import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useEffectEvent, useState } from 'react'

export function CursorGlow() {
  const prefersReducedMotion = useReducedMotion()
  const [isFinePointer, setIsFinePointer] = useState(false)
  const x = useMotionValue(-320)
  const y = useMotionValue(-320)
  const smoothX = useSpring(x, { stiffness: 140, damping: 20, mass: 0.18 })
  const smoothY = useSpring(y, { stiffness: 140, damping: 20, mass: 0.18 })

  const handlePointerMove = useEffectEvent((event: PointerEvent) => {
    x.set(event.clientX - 160)
    y.set(event.clientY - 160)
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const updatePointer = () => setIsFinePointer(mediaQuery.matches)

    updatePointer()
    mediaQuery.addEventListener('change', updatePointer)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', updatePointer)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  if (prefersReducedMotion || !isFinePointer) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-96 w-96 rounded-full blur-3xl lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          'radial-gradient(circle, color-mix(in srgb, var(--accent-primary) 26%, transparent) 0%, color-mix(in srgb, var(--accent-secondary) 18%, transparent) 35%, transparent 72%)',
      }}
      aria-hidden="true"
    />
  )
}
