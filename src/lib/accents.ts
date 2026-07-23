import type { Accent } from '@/types'

/**
 * Tailwind class sets per pastel accent. Kept as complete literal strings so
 * the Tailwind compiler can statically detect every class it must generate.
 */
interface AccentStyles {
  /** Soft tinted surface, e.g. behind an icon badge. */
  surface: string
  /** Icon / emphasis foreground. */
  icon: string
  /** Border used on hover states. */
  border: string
  /** Ambient gradient for image placeholders and glows. */
  gradient: string
  /** Small pill / chip styling. */
  chip: string
}

export const ACCENTS: Record<Accent, AccentStyles> = {
  blush: {
    surface: 'bg-blush/25',
    icon: 'text-[#d1699f]',
    border: 'group-hover:border-blush/70',
    gradient: 'from-blush/45 via-blush/15 to-white',
    chip: 'bg-blush/20 text-ink',
  },
  sky: {
    surface: 'bg-sky/40',
    icon: 'text-[#4d94a6]',
    border: 'group-hover:border-sky/80',
    gradient: 'from-sky/55 via-sky/20 to-white',
    chip: 'bg-sky/35 text-ink',
  },
  mint: {
    surface: 'bg-mint/50',
    icon: 'text-[#4f9d63]',
    border: 'group-hover:border-mint',
    gradient: 'from-mint/60 via-mint/25 to-white',
    chip: 'bg-mint/45 text-ink',
  },
  butter: {
    surface: 'bg-butter',
    icon: 'text-[#96a54a]',
    border: 'group-hover:border-butter',
    gradient: 'from-butter via-butter/40 to-white',
    chip: 'bg-butter text-ink',
  },
}
