import { projects, type Project } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
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
        {project.context ? (
          <span className="text-xs text-zinc-500">{project.context}</span>
        ) : null}
      </div>

      <h3
        className={`font-display font-semibold text-white tracking-tight ${
          featured ? 'text-3xl sm:text-4xl' : 'text-xl'
        }`}
      >
        {project.name}
      </h3>

      <p className={`mt-3 text-zinc-300 leading-relaxed ${featured ? 'text-base sm:text-lg max-w-3xl' : 'text-sm'}`}>
        {project.description}
      </p>

      {project.highlights?.length ? (
        <ul className="mt-6 grid sm:grid-cols-2 gap-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" aria-hidden />
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

      {project.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-violet/20 hover:border-violet/40 transition-colors"
            >
              {link.label}
              <span aria-hidden className="ml-2 text-zinc-400">
                ↗
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}

function ProjectGrid({ items, columns = 'md:grid-cols-2 lg:grid-cols-3' }: { items: Project[]; columns?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal grid gap-4 sm:gap-5 ${columns}`}>
      {items.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  )
}

export function Projects() {
  const featured = projects.find((p) => p.category === 'featured')
  const professional = projects.filter((p) => p.category === 'professional')
  const soutenance = projects.find((p) => p.badge === 'Projet de soutenance')
  const personal = projects.filter(
    (p) => p.category === 'personal' && p.badge !== 'Projet de soutenance',
  )
  const ai = projects.filter((p) => p.category === 'ai')
  const featuredRef = useReveal<HTMLDivElement>()
  const soutenanceRef = useReveal<HTMLDivElement>()

  return (
    <section id="projets" className="section-pad">
      <div className="container-narrow space-y-16 md:space-y-20">
        <div>
          <SectionHeading
            eyebrow="Projets"
            title="Sélection de réalisations"
            description="Du produit principal aux missions professionnelles, en passant par les expérimentations personnelles et l’IA."
          />

          {featured ? (
            <div ref={featuredRef} className="reveal">
              <ProjectCard project={featured} featured />
            </div>
          ) : null}
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-white mb-2">Projets professionnels</h3>
          <p className="text-muted mb-8 max-w-2xl">
            Missions et livraisons réalisées en contexte entreprise ou client.
          </p>
          <ProjectGrid items={professional} />
        </div>

        {soutenance ? (
          <div>
            <h3 className="font-display text-2xl font-semibold text-white mb-2">Projet de soutenance</h3>
            <p className="text-muted mb-8 max-w-2xl">
              Écosystème santé numérique — Doto+, DotoHub et DotoCard.
            </p>
            <div ref={soutenanceRef} className="reveal">
              <ProjectCard project={soutenance} featured />
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="font-display text-2xl font-semibold text-white mb-2">Autres projets</h3>
          <p className="text-muted mb-8 max-w-2xl">
            Projets personnels et expérimentaux — e-commerce, sites vitrines et plateformes web.
          </p>
          <ProjectGrid items={personal} />
        </div>

        <div>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-2">IA & Data</h3>
              <p className="text-muted max-w-2xl">
                Projets autour du Machine Learning, du NLP et du traitement de données.
              </p>
            </div>
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
              Intelligence artificielle
            </span>
          </div>
          <ProjectGrid items={ai} columns="md:grid-cols-2" />
        </div>
      </div>
    </section>
  )
}
