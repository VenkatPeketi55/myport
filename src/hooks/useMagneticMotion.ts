import type { MotionStyle } from 'framer-motion'
import { useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
import type { PointerEventHandler } from 'react'

interface UseMagneticMotionOptions {
  strength?: number
}

export function useMagneticMotion({
  strength = 16,
}: UseMagneticMotionOptions = {}) {
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.2 })

  const onPointerMove: PointerEventHandler<HTMLElement> = (event) => {
    if (prefersReducedMotion) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - (bounds.left + bounds.width / 2)
    const offsetY = event.clientY - (bounds.top + bounds.height / 2)

    x.set(offsetX / strength)
    y.set(offsetY / strength)
  }

  const onPointerLeave: PointerEventHandler<HTMLElement> = () => {
    x.set(0)
    y.set(0)
  }

  const style: MotionStyle = prefersReducedMotion ? {} : { x: springX, y: springY }

  return {
    style,
    onPointerMove,
    onPointerLeave,
  }
}
