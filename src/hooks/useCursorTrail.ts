import { useEffect, useState } from 'react'

interface TrailPoint {
  x: number
  y: number
}

export function useCursorTrail(length = 10) {
  const [trail, setTrail] = useState<TrailPoint[]>(
    Array.from({ length }, () => ({ x: -120, y: -120 })),
  )

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')

    if (!media.matches) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      setTrail((currentTrail) => {
        const nextTrail = [{ x: event.clientX, y: event.clientY }, ...currentTrail]
        return nextTrail.slice(0, length)
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [length])

  return trail
}
