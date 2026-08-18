import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/content'
import { projectExtras } from '../data/extras'
import { toSlug } from '../lib/slug'
import { usePageTitle } from '../hooks/usePageTitle'
import { IconArrowLeft, IconCheck, IconExternalLink, IconGithub } from '../components/Icons'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => toSlug(p.name) === slug)
  const extra = project ? projectExtras[project.name] : undefined

  usePageTitle(project?.name)

  if (!project) {
    return <Navigate to="/projets" replace />
  }

  const related = projects
    .filter((p) => p.name !== project.name && (p.odoo === project.odoo || p.category === project.category))
    .slice(0, 3)

  const bullets = extra?.details?.length ? extra.details : (project.highlights ?? [])

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow max-w-4xl">
        <Link
          to="/projets"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-bright mb-8"
        >
          <IconArrowLeft size={14} />
          Tous les projets
        </Link>

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
          {project.odoo ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              Groupe Odoo
            </span>
          ) : null}
          {project.context ? <span className="text-xs text-zinc-500">{project.context}</span> : null}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">{project.name}</h1>
        <p className="mt-5 text-lg text-zinc-300 leading-relaxed">{project.description}</p>
        {extra?.longDescription ? (
          <p className="mt-4 text-zinc-300 leading-relaxed">{extra.longDescription}</p>
        ) : null}

        {extra && (extra.setting || extra.role) ? (
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {extra.setting ? (
              <div className="rounded-2xl border border-white/8 bg-panel/55 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-violet-bright mb-2">Contexte</p>
                <p className="text-sm text-zinc-300 leading-relaxed">{extra.setting}</p>
              </div>
            ) : null}
            {extra.role ? (
              <div className="rounded-2xl border border-white/8 bg-panel/55 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-violet-bright mb-2">Mon rôle</p>
                <p className="text-sm text-zinc-300 leading-relaxed">{extra.role}</p>
              </div>
            ) : null}
          </div>
        ) : null}

        {bullets.length ? (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-white mb-4">Ce qui a été fait</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
                >
                  <IconCheck size={14} className="text-cyan shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.technologies?.length ? (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-white mb-4">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-ink/40 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.links?.length ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((link) => {
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
        ) : null}

        {related.length ? (
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold text-white mb-4">Dans le même esprit</h2>
            <ul className="grid sm:grid-cols-3 gap-3">
              {related.map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/projets/${toSlug(item.name)}`}
                    className="block rounded-2xl border border-white/8 bg-panel/55 p-4 hover:border-violet/35 transition-colors"
                  >
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
