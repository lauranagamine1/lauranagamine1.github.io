import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from 'react-icons/hi'
import { Chip } from '@/components/ui/Chip'
import { Section } from '@/components/ui/Section'
import { ABOUT_INTERESTS, ABOUT_PARAGRAPHS, PERSON } from '@/data/site'
import { fadeUp } from '@/lib/motion'

/** Rotating pastel accents for the interest chips. */
const CHIP_TINTS = [
  'bg-blush/22',
  'bg-sky/40',
  'bg-mint/45',
  'bg-butter',
] as const

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A little about me"
      subtitle="Curious by default, deliberate by habit — here's what drives my work."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait / monogram card */}
        <motion.div variants={fadeUp} className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blush/40 via-sky/35 to-mint/40 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-2 shadow-soft">
              {/*
                Placeholder portrait. To use a real photo, drop it in /public
                and swap this block for:
                <img src="/portrait.jpg" alt="Laura Nagamine" className="aspect-4/5 w-full rounded-3xl object-cover" />
              */}
              <div className="flex aspect-4/5 items-center justify-center rounded-3xl bg-gradient-to-br from-blush/30 via-sky/25 to-mint/30">
                <span
                  className="font-display text-7xl font-semibold text-white/90 drop-shadow-sm"
                  aria-hidden="true"
                >
                  LN
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div variants={fadeUp} className="mb-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky/35 px-4 py-2 text-xs font-medium text-ink">
              <HiOutlineAcademicCap size={15} aria-hidden="true" />
              {PERSON.university}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint/45 px-4 py-2 text-xs font-medium text-ink">
              <HiOutlineLocationMarker size={15} aria-hidden="true" />
              {PERSON.location}
            </span>
          </motion.div>

          <div className="space-y-5">
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base leading-relaxed text-muted"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              What I'm into
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {ABOUT_INTERESTS.map((interest, i) => (
                <li key={interest}>
                  <Chip
                    label={interest}
                    className={CHIP_TINTS[i % CHIP_TINTS.length]}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
