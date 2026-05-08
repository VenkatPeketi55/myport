import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { cn } from '../lib/cn'

interface SplitRevealTextProps {
  text: string
  className?: string
}

export function SplitRevealText({ text, className }: SplitRevealTextProps) {
  const rootRef = useRef<HTMLSpanElement | null>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.split-word',
        {
          yPercent: 120,
          opacity: 0,
          filter: 'blur(10px)',
        },
        {
          yPercent: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.72,
          ease: 'power3.out',
          stagger: 0.05,
        },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [text])

  return (
    <span ref={rootRef} className={cn('inline-block overflow-hidden', className)}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.26em] inline-block overflow-hidden">
          <span className="split-word inline-block">{word}</span>
        </span>
      ))}
    </span>
  )
}
