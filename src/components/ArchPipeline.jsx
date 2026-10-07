import { useState } from 'react'
import { featured as f } from '../data/projects'
import useInView from '../useInView'

export default function ArchPipeline() {
  const [i, setI] = useState(3)
  const [ref, seen] = useInView(0.25)
  const s = f.stages[i]
  return (
    <div className="panel p-5 sm:p-6">
      <ol ref={ref} className="flex flex-col items-stretch md:flex-row md:flex-wrap md:items-center md:gap-y-3" aria-label="RetailIQ architecture">
        {f.stages.map((st, k) => (
          <li key={st.name} className={`flex flex-col items-stretch transition-all duration-500 md:flex-row md:items-center ${seen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`} style={{ transitionDelay: `${k * 110}ms` }}>
            <button onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)} aria-pressed={i === k}
              className={`rounded-md border px-3 py-2 text-left text-xs font-medium transition-all sm:text-sm ${i === k ? 'border-accent bg-accent/10 text-accent' : 'border-line bg-bg hover:border-accent/60'}`}>{st.name}</button>
            {k < f.stages.length - 1 && <span aria-hidden="true" className="flowline mx-auto my-1 h-4 w-px md:mx-1.5 md:my-0 md:h-px md:w-7" />}
          </li>
        ))}
      </ol>
      <dl className="mt-6 grid gap-4 rounded-md border border-line bg-bg/60 p-4 text-sm sm:grid-cols-3" aria-live="polite">
        <div><dt className="text-xs text-muted">Tool</dt><dd className="mt-1 font-semibold">{s.tool}</dd></div>
        <div><dt className="text-xs text-muted">Purpose</dt><dd className="mt-1">{s.purpose}</dd></div>
        <div><dt className="text-xs text-muted">Output</dt><dd className="mt-1">{s.output}</dd></div>
      </dl>
    </div>
  )
}
