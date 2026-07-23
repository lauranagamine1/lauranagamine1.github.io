import { motion } from 'framer-motion'
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineDownload,
  HiOutlineTranslate,
} from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { Section } from '@/components/ui/Section'
import { EDUCATION, EXPERIENCE, LANGUAGES, PERSON } from '@/data/site'
import { fadeUp } from '@/lib/motion'
import type { TimelineEntry } from '@/types'

interface TimelineProps {
  entries: TimelineEntry[]
}

/** Vertical list of dated entries sharing a pastel rail. */
function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative space-y-8 border-l border-line pl-6">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blush shadow-soft"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-display text-base font-semibold text-ink">
              {entry.title}
            </h4>
            <span className="text-xs font-medium text-muted">{entry.period}</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {entry.organization}
            {entry.location && <span className="text-muted/80"> · {entry.location}</span>}
          </p>
          {entry.points.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {entry.points.map((point, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blush" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="04 — Resume"
      title="Education & experience"
      subtitle="A snapshot of my background. The full resume is one click away."
      tinted
    >
      <div className="grid gap-7 lg:grid-cols-12">
        {/* Download card */}
        <motion.div variants={fadeUp} className="lg:col-span-4">
          <Card
            interactive={false}
            stagger={false}
            className="flex h-full flex-col justify-between p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-blush/45 via-blush/15 to-white blur-2xl"
            />
            <div className="relative">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/25">
                <HiOutlineDownload size={22} className="text-[#d1699f]" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                {PERSON.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{PERSON.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Full resume with education, projects, achievements and volunteering —
                available as a PDF.
              </p>

              <div className="mt-6">
                <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  <HiOutlineTranslate size={14} aria-hidden="true" />
                  Languages
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {LANGUAGES.map((language) => (
                    <li key={language.name}>
                      <Chip
                        label={`${language.name} · ${language.level}`}
                        className="bg-sky/35"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-8">
              <Button
                href={PERSON.resumeUrl}
                download={PERSON.resumeFileName}
                className="w-full"
              >
                <HiOutlineDownload size={17} aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Timelines */}
        <motion.div variants={fadeUp} className="lg:col-span-8">
          <Card interactive={false} stagger={false} className="h-full p-8">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-6 flex items-center gap-2.5 text-base font-semibold text-ink">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky/40">
                    <HiOutlineAcademicCap size={18} className="text-[#4d94a6]" aria-hidden="true" />
                  </span>
                  Education
                </h3>
                <Timeline entries={EDUCATION} />
              </div>

              <div>
                <h3 className="mb-6 flex items-center gap-2.5 text-base font-semibold text-ink">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-mint/50">
                    <HiOutlineBriefcase size={18} className="text-[#4f9d63]" aria-hidden="true" />
                  </span>
                  Experience
                </h3>
                <Timeline entries={EXPERIENCE} />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
