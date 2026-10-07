import { profile } from '../data/profile'
import { GitHub, LinkedIn } from './Icons'
import Count from './Count'

// ILLUSTRATIVE values for a design element. Not real business results.
const rev = [30, 38, 34, 46, 52, 48, 60, 68, 64, 76]
const ord = [20, 26, 30, 28, 38, 42, 40, 50, 55, 58]
const bars = [40, 55, 45, 70, 62, 80]
const pts = (d) => d.map((v, i) => [(i / (d.length - 1)) * 260 + 6, 84 - v])

function CommandCenter() {
  const r = pts(rev), o = pts(ord)
  const line = (p) => p.map((q) => q.join(',')).join(' ')
  return (
    <div className="panel overflow-hidden shadow-lg shadow-black/10" role="group" aria-label="Interactive portfolio visualization with illustrative values">
      <div className="flex items-center justify-between border-b border-line bg-bg/60 px-4 py-2.5">
        <span className="font-display text-sm font-semibold">Analytics Command Center</span>
        <span className="text-[11px] text-muted">illustrative</span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
        {[['Revenue', 128, 'k'], ['Orders', 940, ''], ['Customers', 312, ''], ['Growth', 12, '%']].map(([l, v, s]) => (
          <div key={l} className="bg-surface p-3"><p className="text-xs text-muted">{l}</p><p className="font-display text-xl font-bold text-accent"><Count to={v} suffix={s} /></p></div>
        ))}
      </div>
      <div className="grid gap-px bg-line sm:grid-cols-[1.6fr_1fr]">
        <div className="bg-surface p-4">
          <p className="mb-2 text-xs text-muted">Revenue and orders trend</p>
          <svg viewBox="0 0 272 90" className="h-28 w-full" role="img" aria-label="Illustrative line chart">
            <polyline pathLength="1" className="draw" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" points={line(r)} />
            <polyline pathLength="1" className="draw" style={{ animationDelay: '.5s' }} fill="none" stroke="rgb(var(--amber))" strokeWidth="2" points={line(o)} />
            {r.map(([x, y], i) => <circle key={i} className="pop" style={{ animationDelay: `${0.4 + i * 0.12}s` }} cx={x} cy={y} r="2.5" fill="rgb(var(--accent))" />)}
          </svg>
        </div>
        <div className="bg-surface p-4">
          <p className="mb-2 text-xs text-muted">By segment</p>
          <div className="flex h-28 items-end gap-2" aria-hidden="true">{bars.map((v, i) => <div key={i} className="bar flex-1 rounded-t bg-accent/80" style={{ height: `${v}%`, animationDelay: `${0.3 + i * 70}ms` }} />)}</div>
        </div>
      </div>
      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2">
        <div className="bg-surface p-4"><p className="mb-2 text-xs text-muted">Customer indicator</p><div className="flex gap-1.5" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <span key={i} className={`pop h-3 w-3 rounded-full ${i < 9 ? 'bg-accent' : 'bg-line'}`} style={{ animationDelay: `${0.6 + i * 0.06}s` }} />)}</div><p className="mt-2 text-xs text-muted">Illustrative: 9 of 12 segments active</p></div>
        <div className="overflow-x-auto bg-surface p-4"><table className="w-full font-mono text-xs"><caption className="sr-only">Illustrative monthly sample table</caption><thead><tr className="text-left text-muted"><th className="pb-1 font-normal">month</th><th className="pb-1 font-normal">orders</th><th className="pb-1 font-normal">revenue</th></tr></thead><tbody><tr><td>m1</td><td>312</td><td>38.2k</td></tr><tr><td>m2</td><td>348</td><td>42.9k</td></tr><tr><td>m3</td><td>371</td><td>47.5k</td></tr></tbody></table></div>
      </div>
      <pre className="overflow-x-auto border-t border-line p-4 font-mono text-xs leading-6"><code><span className="text-accent">SELECT</span> month, <span className="text-accent">SUM</span>(order_total){'\n'}<span className="text-accent">FROM</span> sales_view <span className="text-accent">GROUP BY</span> month;</code></pre>
      <p className="border-t border-line bg-bg/60 px-4 py-2 text-xs text-muted">Interactive portfolio visualization. Values are illustrative, not real business results.</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-h" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
      <div>
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm"><span className="h-2 w-2 rounded-full bg-accent pulse-dot" aria-hidden="true" />Open to Analytics Opportunities</p>
        <h1 id="hero-h" className="rise mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: '80ms' }}>From Raw Data to Business Decisions.</h1>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: '160ms' }}>I build end-to-end analytics solutions using SQL, Python, Excel and Power BI, transforming raw business data into clear insights, KPIs and decision-ready dashboards.</p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
          <a href="#retailiq" className="btn-primary">Explore RetailIQ</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><GitHub /> View GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><LinkedIn /> LinkedIn</a>
        </div>
      </div>
      <div className="rise" style={{ animationDelay: '200ms' }}><CommandCenter /></div>
    </section>
  )
}
