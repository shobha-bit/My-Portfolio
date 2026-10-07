import { useEffect, useRef } from 'react'

// Desktop-only ring that follows the pointer and expands over interactive elements. Native cursor stays visible.
export default function Cursor() {
  const ref = useRef(null)
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current; el.style.display = 'block'
    let x = 0, y = 0, cx = 0, cy = 0, raf
    const mv = (e) => { x = e.clientX; y = e.clientY; el.dataset.big = String(!!e.target.closest?.('a,button,[role=tab],li[tabindex],input,textarea')) }
    const loop = () => { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; el.style.transform = `translate3d(${cx}px,${cy}px,0)`; raf = requestAnimationFrame(loop) }
    addEventListener('mousemove', mv); raf = requestAnimationFrame(loop)
    return () => { removeEventListener('mousemove', mv); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} aria-hidden="true" className="cursor-ring" style={{ display: 'none' }} />
}
