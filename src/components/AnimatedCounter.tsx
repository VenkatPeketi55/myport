import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(counterRef, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!isInView) {
      return
    }

    let frameId = 0
    const duration = 1200
    const start = performance.now()

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) ** 3

      setCount(Math.round(value * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frameId)
  }, [isInView, value])

  return (
    <span ref={counterRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
