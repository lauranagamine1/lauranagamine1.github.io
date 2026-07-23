import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'
import { useScrolled } from '@/hooks/useScrolled'

/** Floating button that appears after scrolling and returns to the top. */
export function ScrollToTop() {
  const visible = useScrolled(600)

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ y: -3, scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          className="fixed bottom-7 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-lift transition-colors duration-300 hover:bg-blush/20 sm:bottom-9 sm:right-9"
        >
          <HiArrowUp size={19} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
