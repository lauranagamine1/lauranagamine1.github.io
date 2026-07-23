import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { NAV_ITEMS, PERSON } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'
import { EASE_SOFT } from '@/lib/motion'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const scrolled = useScrolled(24)

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE_SOFT, delay: 0.1 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line/80 bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Laura
          <span className="text-blush">.</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                    isActive ? 'text-ink' : 'text-muted hover:text-ink',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-blush/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href={PERSON.resumeUrl}
            download={PERSON.resumeFileName}
            className="rounded-full border border-line bg-white px-5 py-2 text-sm font-medium text-ink shadow-soft transition-all duration-300 hover:border-blush/70 hover:shadow-lift"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="rounded-full p-2.5 text-ink transition-colors duration-300 hover:bg-blush/20 md:hidden"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE_SOFT }}
            className="overflow-hidden border-t border-line bg-white/95 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-6 py-5">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, ease: EASE_SOFT }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={activeId === item.id ? 'true' : undefined}
                    className={cn(
                      'block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200',
                      activeId === item.id
                        ? 'bg-blush/25 text-ink'
                        : 'text-muted hover:bg-blush/12 hover:text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href={PERSON.resumeUrl}
                  download={PERSON.resumeFileName}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl bg-gradient-to-r from-blush to-[#f7c9e4] px-4 py-3 text-center text-base font-medium text-ink"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
