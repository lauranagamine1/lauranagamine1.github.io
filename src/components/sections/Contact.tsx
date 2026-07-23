import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { PERSON, SOCIAL_LINKS } from '@/data/site'
import { ACCENTS } from '@/lib/accents'
import { cn } from '@/lib/cn'
import { fadeUp } from '@/lib/motion'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Let's build something together"
      subtitle="I'm open to internships, research opportunities and collaborations. The fastest way to reach me is email — or find me on any of these platforms."
    >
      <motion.div variants={fadeUp} className="flex justify-center">
        <Button href={`mailto:${PERSON.email}`} size="md">
          <HiOutlineMail size={17} aria-hidden="true" />
          {PERSON.email}
        </Button>
      </motion.div>

      <motion.ul
        variants={fadeUp}
        className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7"
      >
        {SOCIAL_LINKS.map(({ label, href, icon: Icon, accent }) => {
          const tint = ACCENTS[accent]
          const isMail = href.startsWith('mailto:')
          return (
            <li key={label}>
              <motion.a
                href={href}
                aria-label={label}
                {...(isMail ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <span
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110',
                    tint.surface,
                  )}
                >
                  <Icon size={19} className={tint.icon} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-ink">
                  {label}
                </span>
              </motion.a>
            </li>
          )
        })}
      </motion.ul>
    </Section>
  )
}
