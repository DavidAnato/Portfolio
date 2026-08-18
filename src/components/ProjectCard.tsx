import { Link } from 'react-router-dom'
import type { Project } from '../data/content'
import { toSlug } from '../lib/slug'
import { IconArrowRight, IconCheck, IconExternalLink, IconGithub } from './Icons'

type Props = {
  project: Project
  featured?: boolean
  compact?: boolean
}

function kindLabel(project: Project) {
  if (project.odoo) return 'Odoo'
  if (project.category === 'featured') return 'Phare'
  if (project.category === 'professional') return 'Professionnel'
  if (project.category === 'ai') return 'IA & Data'
  if (project.badge === 'Projet de soutenance') return 'Soutenance'
  return 'Personnel'
}

export function ProjectCard({ project, featured = false, compact = false }: Props) {
  const slug = toSlug(project.name)

  if (compact && !featured) {
    return (
      <article className="group h-full rounded-2xl border border-white/8 bg-panel/55 p-5 sm:p-6 transition-colors hover:border-violet/35">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-zinc-400">
            {kindLabel(project)}
          </span>
          {project.status ? (
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-0.5 text-[11px] text-amber-200">
              {project.status}
            </span>
          ) : null}
        </div>
        <h3 className="font-display text-lg font-semibold text-white tracking-tight">
          <Link to={`/projets/${slug}`} className="hover:text-violet-bright transition-colors">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">{project.description}</p>
        {project.technologies?.length ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-ink/40 px-2.5 py-0.5 text-[11px] text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}
        <Link
          to={`/projets/${slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-bright hover:underline"
        >
          Voir la fiche
          <IconArrowRight size={12} />
        </Link>
      </article>
    )
  }

  const highlights = project.highlights

  return (
    <article
      className={`group h-full rounded-2xl border border-white/8 bg-panel/55 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet/35 hover:shadow-xl hover:shadow-violet/5 ${
        featured ? 'md:p-9 lg:p-10' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {project.badge ? (
          <span className="rounded-full border border-violet/30 bg-violet/15 px-3 py-1 text-xs font-medium text-violet-bright">
            {project.badge}
          </span>
        ) : null}
        {project.status ? (
          <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
            {project.status}
          </span>
        ) : null}
        {project.context ? <span className="text-xs text-zinc-500">{project.context}</span> : null}
      </div>

      <h3
        className={`font-display font-semibold text-white tracking-tight ${
          featured ? 'text-3xl sm:text-4xl' : 'text-xl'
        }`}
      >
        <Link to={`/projets/${slug}`} className="hover:text-violet-bright transition-colors">
          {project.name}
        </Link>
      </h3>

      <p className={`mt-3 text-zinc-300 leading-relaxed ${featured ? 'text-base sm:text-lg max-w-3xl' : 'text-sm'}`}>
        {project.description}
      </p>

      {highlights?.length ? (
        <ul className={`mt-6 grid gap-2 ${featured ? 'sm:grid-cols-2' : 'sm:grid-cols-1'}`}>
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300"
            >
              <IconCheck size={14} className="text-cyan shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {project.technologies?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-ink/40 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to={`/projets/${slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-violet/20 border border-violet/30 px-4 py-2 text-sm font-medium text-violet-bright hover:bg-violet/30 transition-colors"
        >
          Voir la fiche
        </Link>
        {project.links?.slice(0, 2).map((link) => {
          const isGithub = /github\.com/i.test(link.href) || /github/i.test(link.label)
          return (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-violet/20 hover:border-violet/40 transition-colors"
            >
              {isGithub ? <IconGithub size={14} /> : <IconExternalLink size={14} />}
              {link.label}
            </a>
          )
        })}
      </div>
    </article>
  )
}
