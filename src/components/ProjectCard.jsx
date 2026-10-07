// Reusable card. Props: project = { status: 'live' | 'soon', title, description, tags, repo, demo }
export default function ProjectCard({ project: p }) {
  const soon = p.status !== 'live'
  return (
    <article className={`panel flex flex-col p-5 ${soon ? 'border-dashed' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold">{p.title}</h3>
        {soon && <span className="rounded bg-bg px-2 py-0.5 text-xs text-amber">Coming Soon</span>}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
      {!soon && (
        <div className="mt-4 flex gap-3 text-sm font-semibold">
          {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live demo</a>}
        </div>
      )}
    </article>
  )
}
