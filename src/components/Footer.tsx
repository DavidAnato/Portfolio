import { profile } from '../data/content'
import { IconArrowUp, IconGithub, IconMail } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-narrow px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {year} {profile.name}. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4 text-sm">
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
          <a
            href="#accueil"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-violet-bright transition-colors"
          >
            <IconArrowUp size={14} />
            Haut de page
          </a>
        </div>
      </div>
    </footer>
  )
}
