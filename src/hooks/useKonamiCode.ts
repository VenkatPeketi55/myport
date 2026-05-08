import { useEffect, useState } from 'react'

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonamiCode() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    let progress = 0

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key

      if (key === KONAMI_SEQUENCE[progress]) {
        progress += 1

        if (progress === KONAMI_SEQUENCE.length) {
          setIsUnlocked(true)
          progress = 0
        }

        return
      }

      progress = key === KONAMI_SEQUENCE[0] ? 1 : 0
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return { isUnlocked, setIsUnlocked }
}
