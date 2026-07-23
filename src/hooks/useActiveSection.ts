import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view for nav highlighting.
 *
 * Uses scroll position rather than IntersectionObserver so that sections of
 * very different heights (and the final section, which may not reach the top
 * of the viewport) all resolve correctly.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      // Anchor detection a third of the way down the viewport.
      const line = window.scrollY + window.innerHeight / 3

      // Bottom of the page always highlights the last section.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? '')
        return
      }

      let current = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      setActiveId(current)
    }

    const onScroll = () => {
      // Coalesce scroll events into one measurement per frame.
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return activeId
}
