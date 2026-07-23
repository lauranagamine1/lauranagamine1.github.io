import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { Section } from '@/components/ui/Section'
import { SKILL_CATEGORIES } from '@/data/site'
import { ACCENTS } from '@/lib/accents'
import { cn } from '@/lib/cn'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools I build with"
      subtitle="The languages, frameworks and tools I reach for most often."
      tinted
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map(({ title, icon: Icon, accent, skills }) => {
          const tint = ACCENTS[accent]
          return (
            <li key={title}>
              <Card className={cn('h-full p-7', tint.border)}>
                {/* Ambient corner wash that warms up on hover */}
                <div
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100',
                    tint.gradient,
                  )}
                />

                <div className="relative">
                  <span
                    className={cn(
                      'mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110',
                      tint.surface,
                    )}
                  >
                    <Icon size={22} className={tint.icon} aria-hidden="true" />
                  </span>

                  <h3 className="mb-4 text-lg font-semibold text-ink">{title}</h3>

                  <ul className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li key={skill}>
                        <Chip label={skill} className={tint.chip} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
