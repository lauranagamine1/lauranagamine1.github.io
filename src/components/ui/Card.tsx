import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { fadeUp } from '@/lib/motion'

interface CardProps {
  children: ReactNode
  className?: string
  /** Lifts the card on hover. Disable for static/content-only cards. */
  interactive?: boolean
  /** Participates in a parent's stagger sequence when true. */
  stagger?: boolean
}

/** Rounded white surface with a soft shadow — the base for every card. */
export function Card({
  children,
  className,
  interactive = true,
  stagger = true,
}: CardProps) {
  return (
    <motion.div
      variants={stagger ? fadeUp : undefined}
      whileHover={interactive ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-line bg-white',
        'shadow-soft transition-shadow duration-300',
        interactive && 'hover:shadow-lift',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
