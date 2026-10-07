import useInView from '../useInView'
import { featured as f } from '../data/projects'

function Step({ n, title, text }) {
  const [ref, seen] = useInView(0.4)
  return (
    <li ref={ref} className={`relative pb-8 pl-10 transition-all duration-700 last:pb-0 ${seen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}>
      <span className={`absolute left-0 top-0 grid h-7 w-7 place-items-center rounded-full border text-xs transition-colors duration-500 ${seen ? 'border-accent bg-accent text-accentink' : 'border-line bg-surface'}`}>{n}</span>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 max-w-xl text-muted">{text}</p>
    </li>
  )
}

export default function CaseTimeline() {
  return (
    <ol className="relative before:absolute before:bottom-3 before:left-[13px] before:top-3 before:w-px before:bg-line" aria-label="RetailIQ case study timeline">
      {f.story.map(([t, d], i) => <Step key={t} n={i + 1} title={t} text={d} />)}
    </ol>
  )
}
