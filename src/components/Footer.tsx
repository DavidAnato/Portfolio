import { Link } from 'react-router-dom'
import { navLinks, profile } from '../data/content'
import { IconArrowUp, IconGithub, IconLinkedIn, IconMail } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-narrow px-5 sm:px-8 lg:px-10 flex flex-col gap-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {year} {profile.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <IconLinkedIn size={14} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <IconGithub size={14} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <IconMail size={14} />
              Email
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-violet-bright transition-colors"
            >
              <IconArrowUp size={14} />
              Accueil
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
