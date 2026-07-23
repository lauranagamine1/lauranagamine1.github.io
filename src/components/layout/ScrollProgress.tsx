import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar pinned to the top edge, tracking read progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-gradient-to-r from-blush via-sky to-mint"
    />
  )
}
