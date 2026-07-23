import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineDownload } from 'react-icons/hi'
import { Button } from '@/components/ui/Button'
import { HERO_STATS, PERSON } from '@/data/site'
import { EASE_SOFT, fadeUp, staggerContainer } from '@/lib/motion'

/** Slow-drifting pastel orbs behind the hero copy. */
function AmbientOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -26, 0], x: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blush/30 blur-3xl sm:h-96 sm:w-96"
      />
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -18, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-sky/45 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-mint/40 blur-3xl"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 pb-20 pt-32 sm:px-8"
    >
      <AmbientOrbs />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-medium text-muted backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7bc98e]" />
          </span>
          Open to internships &amp; new grad roles
        </motion.p>

        <motion.h1
          variants={fadeUp}
          id="home-heading"
          className="text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {PERSON.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 font-display text-lg font-medium text-muted sm:text-xl md:text-2xl"
        >
          {PERSON.role}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {PERSON.intro}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#projects" className="w-full sm:w-auto">
            View Projects
          </Button>
          <Button
            href={PERSON.resumeUrl}
            download={PERSON.resumeFileName}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            <HiOutlineDownload size={17} aria-hidden="true" />
            Download Resume
          </Button>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-white/70 px-5 py-4 backdrop-blur-sm"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-lg font-semibold text-ink">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to the About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8, ease: EASE_SOFT }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors duration-300 hover:text-ink md:block"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <HiArrowDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}
