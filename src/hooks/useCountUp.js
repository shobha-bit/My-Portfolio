import { useEffect, useState } from 'react'
const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

// Counts from 0 to `target` once `start` is true. Jumps straight to target for reduced-motion users.
export default function useCountUp(target, start, ms = 1200) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!start) return
    if (reduced()) { setV(target); return }
    let raf, t0
    const tick = (t) => {
      t0 = t0 ?? t
      const p = Math.min((t - t0) / ms, 1)
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, ms])
  return v
}
