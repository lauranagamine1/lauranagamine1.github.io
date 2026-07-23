import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from '@/lib/motion'

interface SectionProps {
  id: string
  /** Small label above the heading, e.g. "02 — About". */
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  /** Adds the pastel wash background. */
  tinted?: boolean
}

/**
 * Standard section shell: consistent vertical rhythm, centered heading block,
 * and a scroll-triggered stagger context shared by its children.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  tinted = false,
}: SectionProps) {
  const labelledBy = title ? `${id}-heading` : undefined

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative scroll-mt-24 px-6 py-24 sm:px-8 md:py-32',
        tinted && 'bg-aurora',
        className,
      )}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="mx-auto w-full max-w-6xl"
      >
        {(eyebrow || title) && (
          <div className="mb-14 text-center md:mb-20">
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                id={labelledBy}
                className="text-3xl font-semibold text-ink sm:text-4xl md:text-5xl"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              variants={fadeUp}
              className="divider-pastel mx-auto mt-8 h-px w-28"
              aria-hidden="true"
            />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  )
}
