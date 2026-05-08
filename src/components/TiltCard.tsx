import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 160, damping: 16, mass: 0.2 })
  const springY = useSpring(rotateY, { stiffness: 160, damping: 16, mass: 0.2 })

  return (
    <motion.div
      className={cn('transform-gpu perspective-[1400px]', className)}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const offsetX = event.clientX - bounds.left
        const offsetY = event.clientY - bounds.top
        const rotateYValue = ((offsetX / bounds.width) - 0.5) * 10
        const rotateXValue = -((offsetY / bounds.height) - 0.5) * 10

        rotateX.set(rotateXValue)
        rotateY.set(rotateYValue)
      }}
      onPointerLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
