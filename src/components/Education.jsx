import { education } from '../data/profile'
import useInView from '../useInView'

function Item({ e }) {
  const [ref, seen] = useInView(0.4)
  return (
    <li ref={ref} className={`relative pb-10 pl-10 transition-all duration-700 last:pb-0 ${seen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}>
      <span aria-hidden="true" className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent transition-colors duration-500 ${seen ? 'bg-accent' : 'bg-bg'}`} />
      <p className="font-display text-3xl font-bold text-accent">{e.short}</p>
      <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{e.note}</p>
    </li>
  )
}
export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-h" className="section">
      <h2 id="edu-h" className="h2">Education</h2>
      <ol className="relative mt-10 before:absolute before:bottom-2 before:left-[6px] before:top-3 before:w-px before:bg-line" aria-label="Education timeline">{education.map((e) => <Item key={e.short} e={e} />)}</ol>
    </section>
  )
}
