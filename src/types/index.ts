import type { IconType } from 'react-icons'

/** One of the four pastel accents; drives per-card tinting across the site. */
export type Accent = 'blush' | 'sky' | 'mint' | 'butter'

export interface NavItem {
  /** Matches the `id` of the corresponding <section>. */
  id: string
  label: string
}

export interface SkillCategory {
  title: string
  icon: IconType
  accent: Accent
  skills: string[]
}

export interface Project {
  title: string
  description: string
  /** Short label shown on the card's image placeholder. */
  tag: string
  tech: string[]
  accent: Accent
  /** Set to null to hide the corresponding button on the card. */
  github: string | null
  demo: string | null
}

export interface SocialLink {
  label: string
  href: string
  icon: IconType
  accent: Accent
}

export interface TimelineEntry {
  title: string
  organization: string
  period: string
  location?: string
  points: string[]
}
