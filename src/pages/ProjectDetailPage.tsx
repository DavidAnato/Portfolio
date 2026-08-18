import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/content'
import { projectExtras } from '../data/extras'
import { affinityLabels, projectAffinity, projectDeepDive } from '../data/affinity'
import { getRelatedProjects } from '../lib/relatedProjects'
import { toSlug } from '../lib/slug'
import { usePageTitle } from '../hooks/usePageTitle'
import { IconArrowLeft, IconCheck, IconExternalLink, IconGithub } from '../components/Icons'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => toSlug(p.name) === slug)
  const extra = project ? projectExtras[project.name] : undefined
  const dive = project ? projectDeepDive[project.name] : undefined
  const tags = project ? (projectAffinity[project.name]?.tags ?? []) : []

  usePageTitle(project?.name)

  if (!project) {
    return <Navigate to="/projets" replace />
  }

  const related = getRelatedProjects(project, projects, 3)
  const bullets = extra?.details?.length ? extra.details : (project.highlights ?? [])
  const siteLinks = project.links?.filter((link) => !/github/i.test(link.label) && !/github\.com/i.test(link.href)) ?? []
  const repoLinks = project.links?.filter((link) => /github/i.test(link.label) || /github\.com/i.test(link.href)) ?? []

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow">
        <Link
          to="/projets"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-bright mb-8"
        >
          <IconArrowLeft size={14} />
          Tous les projets
        </Link>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_17.5rem] gap-10 lg:gap-14 items-start">
          <div>
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
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {affinityLabels[tag] ?? tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            {extra?.setting ? (
              <p className="mt-3 text-sm text-zinc-500">{extra.setting}</p>
            ) : project.context ? (
              <p className="mt-3 text-sm text-zinc-500">{project.context}</p>
            ) : null}

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              {extra?.longDescription ?? project.description}
            </p>

            {dive ? (
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <article className="rounded-2xl border border-white/8 bg-panel/55 p-5">
                  <h2 className="text-xs uppercase tracking-[0.16em] text-violet-bright mb-2">Le besoin</h2>
                  <p className="text-sm text-zinc-300 leading-relaxed">{dive.need}</p>
                </article>
                <article className="rounded-2xl border border-white/8 bg-panel/55 p-5">
                  <h2 className="text-xs uppercase tracking-[0.16em] text-violet-bright mb-2">Comment c’est construit</h2>
                  <p className="text-sm text-zinc-300 leading-relaxed">{dive.build}</p>
                </article>
              </div>
            ) : null}

            {extra?.role ? (
              <p className="mt-6 text-sm text-zinc-400 leading-relaxed">
                <span className="text-zinc-500">Mon rôle : </span>
                {extra.role}
              </p>
            ) : null}

            {bullets.length ? (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-white mb-4">Livrables</h2>
                <ul className="space-y-2">
                  {bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300"
                    >
                      <IconCheck size={14} className="text-cyan shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.highlights?.length && extra?.details?.length ? (
              <div className="mt-8">
                <h2 className="font-display text-lg font-semibold text-white mb-3">En résumé</h2>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-ink/40 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 space-y-4">
            {project.technologies?.length ? (
              <div className="rounded-2xl border border-white/8 bg-panel/55 p-5">
                <h2 className="text-xs uppercase tracking-[0.16em] text-violet-bright mb-3">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-ink/40 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {siteLinks.length || repoLinks.length ? (
              <div className="rounded-2xl border border-white/8 bg-panel/55 p-5">
                <h2 className="text-xs uppercase tracking-[0.16em] text-violet-bright mb-3">Liens</h2>
                <div className="flex flex-col gap-2">
                  {siteLinks.map((link) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-violet-bright"
                    >
                      <IconExternalLink size={13} />
                      {link.label}
                    </a>
                  ))}
                  {repoLinks.map((link) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-violet-bright"
                    >
                      <IconGithub size={13} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>

        {related.length ? (
          <div className="mt-16 pt-10 border-t border-white/8">
            <h2 className="font-display text-xl font-semibold text-white mb-6">Projets compatibles</h2>
            <ul className="grid sm:grid-cols-3 gap-4">
              {related.map(({ project: item, reasons }) => (
                <li key={item.name}>
                  <Link
                    to={`/projets/${toSlug(item.name)}`}
                    className="block h-full rounded-2xl border border-white/8 bg-panel/55 p-5 hover:border-violet/35 transition-colors"
                  >
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">{item.description}</p>
                    {reasons.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {reasons.map((reason) => (
                          <span
                            key={reason}
                            className="rounded-full border border-violet/25 bg-violet/10 px-2 py-0.5 text-[11px] text-violet-bright"
                          >
                            {reason}
                          </span>
                        ))}
                      </div>
                    ) : null}
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
