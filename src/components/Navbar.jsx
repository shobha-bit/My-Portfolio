import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { Sun, Moon, Menu, Close } from './Icons'

const links = [['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['RetailIQ', '#retailiq'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [prog, setProg] = useState(0)

  useEffect(() => {
    const on = () => { setScrolled(window.scrollY > 8); const h = document.documentElement.scrollHeight - window.innerHeight; setProg(h > 0 ? window.scrollY / h : 0) }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const els = links.map(([, h]) => document.getElementById(h.slice(1))).filter(Boolean)
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch (e) { /* storage unavailable */ }
    setDark(next)
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? 'border-line bg-bg/85 shadow-lg shadow-black/10 backdrop-blur-md' : 'border-transparent bg-transparent'}`}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent" style={{ transform: `scaleX(${prog})` }} />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">{profile.name}</a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map(([l, h]) => <li key={l}><a href={h} aria-current={active === h.slice(1) ? 'true' : undefined} className={`text-sm transition-colors hover:text-accent ${active === h.slice(1) ? 'font-semibold text-accent' : 'text-muted'}`}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#retailiq" className="btn-primary hidden sm:inline-flex">Explore RetailIQ</a>
          <button onClick={toggleTheme} className="btn-ghost !px-2.5" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun /> : <Moon />}</button>
          <button onClick={() => setOpen(!open)} className="btn-ghost !px-2.5 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">{open ? <Close /> : <Menu />}</button>
        </div>
      </nav>
      <div className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul id="mobile-menu" className={`overflow-hidden px-5 ${open ? 'visible border-t border-line pb-4' : 'invisible'}`}>
          {links.map(([l, h]) => <li key={l}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-base text-ink">{l}</a></li>)}
          <li className="pt-2"><a href="#retailiq" onClick={() => setOpen(false)} className="btn-primary w-full">Explore RetailIQ</a></li>
        </ul>
      </div>
    </header>
  )
}
