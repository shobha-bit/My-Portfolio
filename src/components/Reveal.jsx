import useInView from '../useInView'
// Fades a section up once when it enters the viewport. Plain div wrapper; CSS handles reduced motion.
export default function Reveal({ children }) {
  const [ref, seen] = useInView(0.08)
  return <div ref={ref} className={`transition-all duration-700 ease-out ${seen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>{children}</div>
}
