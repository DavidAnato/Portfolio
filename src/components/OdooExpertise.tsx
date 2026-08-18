import { odooExpertise, projects } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { IconCheck, IconCubes, IconExternalLink, IconGithub } from './Icons'

export function OdooExpertise() {
  const ref = useReveal<HTMLDivElement>()
  const odooProjects = projects.filter((p) => p.odoo)

  return (
    <section id="odoo" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Expertise Odoo"
          title="Odoo au cœur du métier"
          description={odooExpertise.lead}
        />

        <div
          ref={ref}
          className="reveal rounded-3xl border border-violet/25 bg-gradient-to-br from-violet/15 via-panel/70 to-cyan/5 p-6 sm:p-8 md:p-10"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet/30 bg-violet/20 text-violet-bright">
              <IconCubes size={22} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">Développeur Odoo</p>
              <p className="text-sm text-zinc-400">Modules · ERP · Intégrations · IA sur l’écosystème Apps</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {odooExpertise.capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-ink/40 p-5 hover:border-violet/35 transition-colors"
              >
                <h3 className="font-display text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {odooExpertise.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet/25 bg-violet/10 px-3 py-1.5 text-xs font-medium text-violet-bright"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {odooProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-white/8 bg-panel/55 p-6 hover:border-violet/35 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.badge ? (
                  <span className="rounded-full border border-violet/30 bg-violet/15 px-3 py-1 text-xs font-medium text-violet-bright">
                    {project.badge}
                  </span>
                ) : null}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.description}</p>
              {project.highlights?.length ? (
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <IconCheck size={14} className="text-cyan shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {project.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.map((link) => {
                    const isGithub = /github\.com/i.test(link.href) || /github/i.test(link.label)
                    return (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet/20 hover:border-violet/40 transition-colors"
                      >
                        {isGithub ? <IconGithub size={12} /> : <IconExternalLink size={12} />}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
