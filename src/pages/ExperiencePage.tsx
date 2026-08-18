import { Link } from 'react-router-dom'
import { experiences } from '../data/content'
import { experienceExtras } from '../data/extras'
import { toSlug } from '../lib/slug'
import { SectionHeading } from '../components/SectionHeading'
import { PageNav } from '../components/PageNav'
import { usePageTitle } from '../hooks/usePageTitle'
import { useReveal } from '../hooks/useReveal'
import { IconBriefcase, IconCalendar, IconCheck, IconFolder } from '../components/Icons'

export function ExperiencePage() {
  usePageTitle('Expérience')
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Expérience"
          title="Parcours professionnel"
          description="Web, mobile et APIs, en entreprise et chez des clients."
        />

        <div ref={ref} className="reveal relative space-y-6">
          <div
            aria-hidden
            className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-violet/50 via-white/10 to-transparent hidden sm:block"
          />

          {experiences.map((item) => {
            const extra = experienceExtras[item.company]
            return (
              <article
                key={`${item.company}-${item.period}`}
                className="relative sm:pl-14 rounded-2xl border border-white/8 bg-panel/50 p-6 sm:p-7 hover:border-violet/25 transition-colors"
              >
                <span
                  aria-hidden
                  className="hidden sm:flex absolute left-2 top-7 h-9 w-9 items-center justify-center rounded-xl border border-violet/30 bg-ink text-violet-bright ring-4 ring-ink"
                >
                  <IconBriefcase size={16} />
                </span>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-xl font-semibold text-white">{item.company}</h3>
                      {item.current ? (
                        <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 text-xs text-emerald-300">
                          En cours
                        </span>
                      ) : null}
                      {item.kind === 'project' ? (
                        <span className="rounded-full bg-cyan/10 border border-cyan/20 px-2.5 py-0.5 text-xs text-cyan">
                          Projet
                        </span>
                      ) : null}
                    </div>
                    <p className="text-violet-bright font-medium">{item.role}</p>
                  </div>
                  <p className="inline-flex items-center gap-1.5 text-sm text-zinc-400 shrink-0">
                    <IconCalendar size={14} className="opacity-70" />
                    {item.period}
                  </p>
                </div>

                <p className="text-zinc-300 leading-relaxed">{extra?.summary ?? item.description}</p>

                {extra?.contributions?.length ? (
                  <ul className="mt-5 space-y-2">
                    {extra.contributions.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-zinc-300">
                        <IconCheck size={14} className="text-cyan shrink-0 mt-0.5" />
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.projects?.length ? (
                  <p className="mt-5 inline-flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                    <IconFolder size={14} className="text-zinc-500" />
                    <span className="text-zinc-500">Projets :</span>
                    {item.projects.map((name, i) => (
                      <span key={name}>
                        <Link to={`/projets/${toSlug(name)}`} className="text-violet-bright hover:underline">
                          {name}
                        </Link>
                        {i < item.projects!.length - 1 ? <span className="text-zinc-600"> · </span> : null}
                      </span>
                    ))}
                  </p>
                ) : null}

                {item.technologies?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>

        <PageNav
          prev={{ to: '/a-propos', label: 'À propos' }}
          next={{ to: '/projets', label: 'Projets' }}
        />
      </div>
    </section>
  )
}
