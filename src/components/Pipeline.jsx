import useInView from '../useInView'
// Compact pipeline used on the case-study page. Nodes light up in order once.
export default function Pipeline({ steps }) {
  const [ref, seen] = useInView(0.3)
  return (
    <ol ref={ref} className="flex flex-wrap items-center gap-y-3" aria-label="Project data pipeline">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <span className={`rounded border px-3 py-1.5 text-xs transition-colors duration-500 sm:text-sm ${seen ? 'border-accent/60 bg-surface' : 'border-line bg-bg'}`} style={{ transitionDelay: seen ? `${i * 90}ms` : '0ms' }}>{s}</span>
          {i < steps.length - 1 && <span aria-hidden="true" className={`mx-1.5 h-px w-4 bg-accent transition-opacity duration-500 sm:w-6 ${seen ? 'opacity-100' : 'opacity-20'}`} />}
        </li>
      ))}
    </ol>
  )
}
