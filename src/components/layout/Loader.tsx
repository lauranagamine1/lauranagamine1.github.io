import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE_SOFT } from '@/lib/motion'

const DOTS = ['bg-blush', 'bg-sky', 'bg-mint']

interface LoaderProps {
  /** Called once the intro finishes so the page can start its own animations. */
  onFinish?: () => void
}

/** Brief pastel intro overlay shown on first paint. */
export function Loader({ onFinish }: LoaderProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false)
      onFinish?.()
    }, 1200)
    return () => window.clearTimeout(timer)
  }, [onFinish])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_SOFT }}
          className="bg-aurora fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_SOFT }}
            className="font-display text-2xl font-semibold tracking-tight text-ink"
          >
            Laura
            <span className="text-blush">.</span>
          </motion.span>

          <div className="mt-6 flex gap-2" aria-hidden="true">
            {DOTS.map((color, i) => (
              <motion.span
                key={color}
                className={`h-2.5 w-2.5 rounded-full ${color}`}
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
          <span className="sr-only">Loading portfolio</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
