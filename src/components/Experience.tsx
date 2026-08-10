import { experiences } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Expérience"
          title="Parcours professionnel"
          description="Des missions concrètes en développement d’applications web et mobiles, avec une capacité à intervenir sur toute la stack."
        />

        <div ref={ref} className="reveal relative space-y-6">
          <div
            aria-hidden
            className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-violet/50 via-white/10 to-transparent hidden sm:block"
          />

          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="relative sm:pl-10 rounded-2xl border border-white/8 bg-panel/50 p-6 sm:p-7 hover:border-violet/25 transition-colors"
            >
              <span
                aria-hidden
                className="hidden sm:block absolute left-[7px] top-8 h-2.5 w-2.5 rounded-full bg-violet ring-4 ring-ink"
              />

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
                <p className="text-sm text-zinc-400 shrink-0">{item.period}</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">{item.description}</p>

              {item.projects?.length ? (
                <p className="mt-4 text-sm text-zinc-400">
                  <span className="text-zinc-500">Projets associés :</span>{' '}
                  {item.projects.join(' · ')}
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
          ))}
        </div>
      </div>
    </section>
  )
}
