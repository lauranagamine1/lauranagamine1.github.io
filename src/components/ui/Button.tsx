import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-blush to-[#f7c9e4] text-ink shadow-glow hover:shadow-lift',
  secondary:
    'bg-white text-ink border border-line hover:border-blush/70 shadow-soft hover:shadow-lift',
  ghost: 'text-muted hover:text-ink hover:bg-blush/12',
}

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
}

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  /** Adds target/rel for links leaving the site. */
  external?: boolean
  /** Triggers a file download rather than navigation. */
  download?: string
  className?: string
  ariaLabel?: string
}

/**
 * Shared button. Renders an <a> when `href` is provided, otherwise a <button>,
 * so semantics always match behaviour.
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  download,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium',
    'transition-shadow duration-300 will-change-transform',
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 26 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        download={download}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
