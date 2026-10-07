import { useState } from 'react'
import { featured as f, RETAILIQ_LIVE_URL, liveReady } from '../data/projects'
import { GitHub } from './Icons'
import Count from './Count'
import DashboardPreview from './DashboardPreview'
import ArchPipeline from './ArchPipeline'
import CaseTimeline from './CaseTimeline'

const Head = ({ id, children, sub }) => (<div className="mb-6"><h3 id={id} className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{children}</h3>{sub && <p className="mt-2 max-w-2xl text-muted">{sub}</p>}</div>)

export default function RetailIQ() {
  const [pos, setPos] = useState({ x: 50, y: 30 })
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }) }
  return (
    <section id="retailiq" aria-labelledby="riq-h" className="section">
      <div onMouseMove={move} className="panel relative overflow-hidden border-accent/50 p-6 shadow-xl shadow-black/10 sm:p-12" style={{ backgroundImage: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, rgb(var(--accent) / 0.10), transparent 60%)` }}>
        <p className="text-sm text-accent">Hero project</p>
        <h2 id="riq-h" className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-7xl">RetailIQ</h2>
        <p className="mt-2 font-display text-xl text-ink sm:text-2xl">Enterprise Retail Intelligence Platform</p>
        <p className="mt-3 text-lg text-muted">{f.tagline}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{f.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {liveReady
            ? <a href={RETAILIQ_LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group">Launch RetailIQ <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></a>
            : <button type="button" aria-disabled="true" className="btn-primary cursor-not-allowed opacity-60" title="Set RETAILIQ_LIVE_URL in src/data/projects.js">Launch RetailIQ ↗</button>}
          <a href={f.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost"><GitHub /> View Source ↗</a>
          <a href="#/project/retail" className="btn-ghost">Case study page</a>
        </div>
        {!liveReady && <p className="mt-3 text-xs text-muted">Live link is not set yet. Add it in src/data/projects.js.</p>}

        <h3 className="mt-12 font-display text-lg font-semibold">Project Dataset</h3>
        <dl className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-4">
          {f.kpis.map(([n, l]) => (<div key={l} className="bg-surface p-5"><dd className="font-display text-3xl font-bold text-accent sm:text-4xl"><Count to={n} /></dd><dt className="mt-1 text-sm text-muted">{l}</dt></div>))}
        </dl>
        <p className="mt-4 text-sm text-muted"><span className="font-semibold text-ink">Analysis Coverage:</span> {f.coverage.map(([n, l]) => `${n.toLocaleString('en-IN')} ${l}`).join(', ')}. These describe the project data, not personal or business results.</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology">{f.tools.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
      </div>

      <div className="mt-16" aria-labelledby="dash-h">
        <Head id="dash-h" sub="Interactive Portfolio Preview. Switch tabs to explore the kinds of views RetailIQ covers.">Dashboard preview</Head>
        <DashboardPreview />
      </div>

      <div className="mt-16" aria-labelledby="arch-h">
        <Head id="arch-h" sub="Hover, focus or tap a stage to see its tool, purpose and output.">How the data flows</Head>
        <ArchPipeline />
      </div>

      <div className="mt-16" aria-labelledby="q-h">
        <Head id="q-h">What can RetailIQ answer?</Head>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {f.questions.map(([q, tag]) => (
            <li key={q} tabIndex={0} className="panel group p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-black/10 focus-visible:-translate-y-1 focus-visible:border-accent">
              <span className="text-xs text-accent">{tag}</span>
              <p className="mt-2 font-medium leading-snug">{q}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16" aria-labelledby="story-h">
        <Head id="story-h">The case study, step by step</Head>
        <CaseTimeline />
      </div>
    </section>
  )
}
