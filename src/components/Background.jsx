import { useEffect, useRef } from 'react'

// Light canvas: ~28 slow data points with faint connection lines. Off on phones; static for reduced motion.
export default function Background() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    if (!c || innerWidth < 768) return
    const ctx = c.getContext('2d'), still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const dots = Array.from({ length: 28 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00004, vy: (Math.random() - 0.5) * 0.00004 }))
    let w, h, raf, col = '60,199,184', n = 0
    const size = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    const draw = () => {
      if (n++ % 40 === 0) col = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim().split(' ').join(',')
      if (!document.hidden) {
        ctx.clearRect(0, 0, w, h)
        dots.forEach((d) => { d.x = (d.x + d.vx * 16 + 1) % 1; d.y = (d.y + d.vy * 16 + 1) % 1 })
        for (let i = 0; i < dots.length; i++) {
          const a = dots[i]
          ctx.fillStyle = `rgba(${col},.35)`; ctx.fillRect(a.x * w - 1, a.y * h - 1, 2, 2)
          for (let j = i + 1; j < dots.length; j++) {
            const b = dots[j], dx = (a.x - b.x) * w, dy = (a.y - b.y) * h, dist = Math.hypot(dx, dy)
            if (dist < 190) { ctx.strokeStyle = `rgba(${col},${0.16 * (1 - dist / 190)})`; ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke() }
          }
        }
      }
      if (!still) raf = requestAnimationFrame(draw)
    }
    size(); draw(); addEventListener('resize', size)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden md:block" />
}
