import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display font-bold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>
        <ul className="flex gap-5 text-sm">
          <li><a className="hover:text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-accent" href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
        <p className="text-sm text-muted">&copy; {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
