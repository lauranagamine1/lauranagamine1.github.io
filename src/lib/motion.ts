import type { Variants, Transition } from 'framer-motion'

/** Shared easing — a gentle deceleration used site-wide. */
export const EASE_SOFT: Transition['ease'] = [0.22, 1, 0.36, 1]

/** Rise + fade. The workhorse entrance for headings, copy and cards. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SOFT },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_SOFT } },
}

/** Parent that reveals its children one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

/** Viewport config for scroll-triggered reveals — fires once, slightly early. */
export const VIEWPORT_ONCE = { once: true, amount: 0.2 } as const
