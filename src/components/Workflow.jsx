import { workflow } from '../data/profile'
import useInView from '../useInView'

export default function Workflow() {
  const [ref, seen] = useInView(0.2)
  return (
    <section aria-labelledby="wf-h" className="section">
      <h2 id="wf-h" className="h2">How I work with data</h2>
      <ol ref={ref} className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
        {workflow.map((w, i) => (
          <li key={w.step} className="relative">
            <div className={`panel h-full p-5 transition-all duration-500 ${seen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{w.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
            </div>
            {i < workflow.length - 1 && <span aria-hidden="true" className={`absolute -right-3 top-1/2 hidden h-px w-3 origin-left bg-accent transition-transform duration-500 lg:block ${seen ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: `${i * 120 + 300}ms` }} />}
          </li>
        ))}
      </ol>
    </section>
  )
}
