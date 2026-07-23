import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { PROJECTS } from '@/data/site'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Things I've built"
      subtitle="A selection of academic, hackathon and personal projects — from cloud architectures to machine learning models."
    >
      <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <li key={project.title} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
