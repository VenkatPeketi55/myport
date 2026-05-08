import type { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean
}

export function GlassCard({
  className,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-[28px] p-6 sm:p-8',
        glow && 'glow-ring',
        className,
      )}
      {...props}
    />
  )
}
