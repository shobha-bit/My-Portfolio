import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Background from './components/Background'
import Cursor from './components/Cursor'

// Lightweight hash routing keeps GitHub Pages / Netlify / Vercel deploys working with no server config.
const isProject = () => window.location.hash.startsWith('#/project/')

export default function App() {
  const [project, setProject] = useState(isProject())

  useEffect(() => {
    const onHash = () => setProject(isProject())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // After a route change, scroll to the requested section (or top).
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (project) return window.scrollTo(0, 0)
    const el = id && !id.startsWith('/') ? document.getElementById(id) : null
    el ? el.scrollIntoView() : window.scrollTo(0, 0)
  }, [project])

  return (
    <>
      <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }} className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accentink">Skip to content</a>
      <Background />
      <Cursor />
      <Navbar />
      <main id="main" key={project ? 'detail' : 'home'} tabIndex="-1" className="rise outline-none">{project ? <ProjectDetails /> : <Home />}</main>
      <Footer />
    </>
  )
}
