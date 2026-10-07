import { featured as f } from '../data/projects'
import Pipeline from '../components/Pipeline'
import { GitHub, Arrow } from '../components/Icons'

const Block = ({ title, children }) => (
  <section className="border-t border-line py-8"><h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2><div className="mt-4 max-w-3xl leading-relaxed text-muted">{children}</div></section>
)
const List = ({ items }) => <ul className="list-disc space-y-2 pl-5">{items.map((i) => <li key={i}>{i}</li>)}</ul>

export default function ProjectDetails() {
  const c = f.caseStudy
  return (
    <article className="mx-auto max-w-4xl px-5 pb-20 pt-10 sm:px-8">
      <a href="#retailiq" className="inline-flex items-center gap-2 text-sm text-accent hover:underline"><Arrow className="rotate-180" /> Back to RetailIQ</a>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-5xl">{f.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{f.summary}</p>
      <div className="mt-8"><Block title="Problem">{c.problem}</Block></div>
      <Block title="Approach">{c.approach}</Block>
      <Block title="Data">{c.data}</Block>
      <Block title="Tools"><ul className="flex flex-wrap gap-2">{f.tools.map((t) => <li key={t} className="chip">{t}</li>)}</ul></Block>
      <Block title="Data pipeline"><Pipeline steps={f.pipeline} /></Block>
      <Block title="SQL analysis"><List items={c.sql} /></Block>
      <Block title="Python analysis"><List items={c.python} /></Block>
      <Block title="Power BI dashboard">
        <p>{c.powerbi}</p>
        {f.powerBiUrl
          ? <a href={f.powerBiUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">Open dashboard</a>
          : <div className="mt-4 rounded-md border border-dashed border-line p-5 text-sm">Dashboard link coming soon. Set <code className="font-mono">powerBiUrl</code> in <code className="font-mono">src/data/projects.js</code>.</div>}
      </Block>
      <Block title="Business questions"><List items={c.questions} /></Block>
      <Block title="Key insights"><p>{c.insights}</p></Block>
      <Block title="GitHub repository"><a href={f.repo} target="_blank" rel="noopener noreferrer" className="btn-primary"><GitHub /> View on GitHub</a></Block>
    </article>
  )
}
