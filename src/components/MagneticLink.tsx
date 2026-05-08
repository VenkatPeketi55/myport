import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMagneticMotion } from '../hooks/useMagneticMotion'
import { cn } from '../lib/cn'

interface MagneticLinkProps extends HTMLMotionProps<'a'> {
  children: ReactNode
}

export function MagneticLink({
  children,
  className,
  ...props
}: MagneticLinkProps) {
  const magnetic = useMagneticMotion()

  return (
    <motion.a
      className={cn(className)}
      style={magnetic.style}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
