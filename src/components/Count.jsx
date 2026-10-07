import useInView from '../useInView'
import useCountUp from '../hooks/useCountUp'

export default function Count({ to, prefix = '', suffix = '', className = '' }) {
  const [ref, seen] = useInView(0.3)
  const v = useCountUp(to, seen)
  return <span ref={ref} className={`tabular-nums ${className}`}>{prefix}{v.toLocaleString('en-IN')}{suffix}</span>
}
