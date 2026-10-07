import { otherProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function OtherProjects() {
  return (
    <section id="projects" aria-labelledby="other-h" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <h2 id="other-h" className="font-display text-2xl font-bold tracking-tight">Other projects</h2>
      {otherProjects.length > 0
        ? <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{otherProjects.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
        : <p className="panel mt-6 border-dashed p-6 text-muted">More projects coming soon. RetailIQ is my primary project, and new work will be added here as it is completed.</p>}
    </section>
  )
}
