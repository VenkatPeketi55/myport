import { motion } from 'framer-motion'
import { useCursorTrail } from '../hooks/useCursorTrail'

export function CursorTrails() {
  const trail = useCursorTrail(10)

  return (
    <div className="pointer-events-none fixed inset-0 z-[6] hidden lg:block" aria-hidden="true">
      {trail.map((point, index) => (
        <motion.span
          key={`${point.x}-${point.y}-${index}`}
          className="absolute rounded-full bg-[linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))] opacity-70"
          animate={{
            x: point.x - 6,
            y: point.y - 6,
            scale: 1 - index * 0.075,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.25 }}
          style={{
            width: `${Math.max(6, 12 - index * 0.7)}px`,
            height: `${Math.max(6, 12 - index * 0.7)}px`,
            filter: index < 3 ? 'blur(0px)' : 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}
