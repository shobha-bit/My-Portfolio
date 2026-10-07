import { useState } from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  const [sel, setSel] = useState(['SQL', skills[0].items[0][1]])
  return (
    <section id="skills" aria-labelledby="skills-h" className="section">
      <h2 id="skills-h" className="h2">My data stack</h2>
      <p className="mt-4 max-w-2xl text-muted">Select a tool to see how I use it.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="panel p-5">
            <h3 className="font-display text-lg font-semibold">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{g.items.map(([n, use]) => (
              <li key={n}><button onClick={() => setSel([n, use])} onMouseEnter={() => setSel([n, use])} onFocus={() => setSel([n, use])} aria-pressed={sel[0] === n} className={`rounded border px-2.5 py-1 text-xs transition-all hover:-translate-y-0.5 hover:border-accent ${sel[0] === n ? 'border-accent bg-accent/10 text-accent' : 'border-line bg-bg'}`}>{n}</button></li>
            ))}</ul>
          </div>
        ))}
      </div>
      <p className="panel mt-4 p-4 text-sm" aria-live="polite"><span className="font-semibold text-accent">{sel[0]}</span> <span className="text-muted">{sel[1]}</span></p>
    </section>
  )
}
