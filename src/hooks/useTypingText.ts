import { useEffect, useMemo, useState } from 'react'

interface UseTypingTextOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
}

export function useTypingText(
  phrases: string[],
  {
    typingSpeed = 85,
    deletingSpeed = 45,
    pauseMs = 1400,
  }: UseTypingTextOptions = {},
) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases])
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const blinkTimer = window.setInterval(() => {
      setCursorVisible((visible) => !visible)
    }, 520)

    return () => window.clearInterval(blinkTimer)
  }, [])

  useEffect(() => {
    const phrase = safePhrases[phraseIndex] ?? ''

    if (!phrase) {
      return
    }

    if (!isDeleting && characterIndex === phrase.length) {
      const pauseTimer = window.setTimeout(() => {
        setIsDeleting(true)
      }, pauseMs)

      return () => window.clearTimeout(pauseTimer)
    }

    if (isDeleting && characterIndex === 0) {
      const resetTimer = window.setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((currentIndex) => (currentIndex + 1) % safePhrases.length)
      }, 0)

      return () => window.clearTimeout(resetTimer)
    }

    const nextDelay = isDeleting ? deletingSpeed : typingSpeed
    const typeTimer = window.setTimeout(() => {
      setCharacterIndex((currentIndex) => currentIndex + (isDeleting ? -1 : 1))
    }, nextDelay)

    return () => window.clearTimeout(typeTimer)
  }, [
    characterIndex,
    deletingSpeed,
    isDeleting,
    pauseMs,
    phraseIndex,
    safePhrases,
    typingSpeed,
  ])

  return {
    text: safePhrases[phraseIndex]?.slice(0, characterIndex) ?? '',
    cursorVisible,
  }
}
