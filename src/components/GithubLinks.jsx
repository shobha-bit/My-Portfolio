import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { GitHub, LinkedIn } from './Icons'

export default function GithubLinks() {
  const [repos, setRepos] = useState(null) // null = loading, [] = none/unavailable

  useEffect(() => {
    const ctl = new AbortController()
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`, { signal: ctl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => setRepos(Array.isArray(d) ? d.filter((r) => !r.fork).slice(0, 4) : []))
      .catch((e) => { if (e?.name !== 'AbortError') setRepos([]) })
    return () => ctl.abort()
  }, [])

  return (
    <section aria-labelledby="gh-h" className="section">
      <h2 id="gh-h" className="h2">Explore my code</h2>
      <p className="mt-4 max-w-2xl text-muted">The code, SQL and notebooks behind my projects are on GitHub. Recruiters can also find my professional profile on LinkedIn.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-primary justify-start"><GitHub /> github.com/{profile.githubUser}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-start"><LinkedIn /> LinkedIn profile</a>
        </div>
        <div className="panel p-5" aria-live="polite">
          <h3 className="font-display text-lg font-semibold">Latest repositories</h3>
          {repos === null && <p className="mt-3 text-sm text-muted">Loading repositories...</p>}
          {repos && repos.length === 0 && <p className="mt-3 text-sm text-muted">Live repository data is unavailable right now. <a className="text-accent underline" href={profile.github} target="_blank" rel="noopener noreferrer">Open my GitHub profile</a> to see all projects.</p>}
          {repos && repos.length > 0 && (
            <ul className="mt-3 divide-y divide-line">
              {repos.map((r) => (
                <li key={r.id} className="py-3">
                  <a href={r.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">{r.name}</a>
                  <p className="text-sm text-muted">{r.description || 'No description yet.'}{r.language ? ` Language: ${r.language}.` : ''}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
