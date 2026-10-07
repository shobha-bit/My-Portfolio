import { useState } from 'react'
import { profile } from '../data/profile'
import { Mail, Phone, GitHub, LinkedIn } from './Icons'

// No backend: this form builds a pre-filled email in the visitor's own mail app (mailto).
// To send straight from the page instead, see README ("Contact form").
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
  const field = 'mt-1 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-ink'
  return (
    <section id="contact" aria-labelledby="contact-h" className="section">
      <h2 id="contact-h" className="h2">Have a problem worth solving with data?</h2>
      <p className="mt-4 max-w-2xl text-muted">I'm open to entry-level opportunities in Data Analytics, Business Intelligence, Reporting and related roles.</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ul className="space-y-4">
          <li><a className="flex items-center gap-3 hover:text-accent" href={`mailto:${profile.email}`}><Mail /> {profile.email}</a></li>
          <li><a className="flex items-center gap-3 hover:text-accent" href={`tel:${profile.phoneHref}`}><Phone /> {profile.phone}</a></li>
          <li><a className="flex items-center gap-3 hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /> LinkedIn</a></li>
          <li><a className="flex items-center gap-3 hover:text-accent" href={profile.github} target="_blank" rel="noopener noreferrer"><GitHub /> GitHub</a></li>
        </ul>
        <form onSubmit={submit} className="panel p-5">
          <label className="block text-sm font-medium">Name<input required value={f.name} onChange={set('name')} autoComplete="name" className={field} /></label>
          <label className="mt-4 block text-sm font-medium">Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" className={field} /></label>
          <label className="mt-4 block text-sm font-medium">Message<textarea required rows="4" value={f.message} onChange={set('message')} className={field} /></label>
          <button type="submit" className="btn-primary mt-5">Let's Connect</button>
          <p className="mt-3 text-xs text-muted">This opens your email app with the message pre-filled. Nothing is sent until you press send there.</p>
        </form>
      </div>
    </section>
  )
}
