import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  duration: 12 + (index % 6) * 2,
  delay: index * 0.3,
}))

const stars = Array.from({ length: 64 }, (_, index) => ({
  id: index,
  left: `${(index * 7) % 100}%`,
  top: `${(index * 11) % 100}%`,
  size: 1 + (index % 3),
}))

export function PremiumBackground() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 })
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 180)
      mouseY.set(event.clientY - 180)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="aurora-layer aurora-one" />
      <div className="aurora-layer aurora-two" />
      <div className="aurora-layer aurora-three" />
      <div className="grid-layer" />
      <div className="stars-layer">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="star-dot"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{ opacity: [0.25, 1, 0.35], scale: [1, 1.3, 1] }}
            transition={{
              duration: 3 + (star.id % 5),
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: star.id * 0.08,
            }}
          />
        ))}
      </div>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="floating-particle"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -35, 20, 0],
            x: [0, 18, -16, 0],
            opacity: [0.18, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
      <motion.div
        className="mouse-light hidden lg:block"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        className="blob blob-a"
        animate={{ x: [0, 60, -35, 0], y: [0, -40, 35, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-b"
        animate={{ x: [0, -55, 30, 0], y: [0, 45, -20, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-c"
        animate={{ x: [0, 45, -18, 0], y: [0, 20, -35, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
    </div>
  )
}
