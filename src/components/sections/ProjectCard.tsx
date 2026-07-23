import { motion } from 'framer-motion'
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { ACCENTS } from '@/lib/accents'
import { cn } from '@/lib/cn'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tag, tech, accent, github, demo } = project
  const tint = ACCENTS[accent]

  return (
    <Card className={cn('flex h-full flex-col', tint.border)}>
      {/*
        Image placeholder. To use a real screenshot, replace this block with:
        <img src="/assets/my-project.png" alt="" className="aspect-16/10 w-full object-cover" />
      */}
      <div
        className={cn(
          'relative flex aspect-16/10 items-center justify-center overflow-hidden bg-gradient-to-br',
          tint.gradient,
        )}
      >
        <motion.span
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm"
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <HiOutlineCode size={24} className={tint.icon} />
        </motion.span>

        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[0.7rem] font-medium text-ink backdrop-blur-sm">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink transition-colors duration-300">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item}>
              <Chip label={item} className={tint.chip} />
            </li>
          ))}
        </ul>

        {(github || demo) && (
          <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-5">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View the source code for ${title} on GitHub`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-medium text-ink transition-colors duration-300 hover:border-blush/70 hover:bg-blush/12"
              >
                <SiGithub size={14} aria-hidden="true" />
                GitHub
              </motion.a>
            )}
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open the live demo for ${title}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white transition-opacity duration-300 hover:opacity-88"
              >
                <HiOutlineExternalLink size={14} aria-hidden="true" />
                Live Demo
              </motion.a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
