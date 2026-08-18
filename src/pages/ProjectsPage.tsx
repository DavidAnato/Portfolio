import { useMemo, useState } from 'react'
import { projects } from '../data/content'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { PageNav } from '../components/PageNav'
import { usePageTitle } from '../hooks/usePageTitle'

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'odoo', label: 'Odoo' },
  { id: 'professional', label: 'Professionnels' },
  { id: 'personal', label: 'Perso & soutenance' },
  { id: 'ai', label: 'IA & Data' },
] as const

type FilterId = (typeof filters)[number]['id']

function countFor(id: FilterId) {
  if (id === 'all') return projects.length
  if (id === 'odoo') return projects.filter((p) => p.odoo).length
  if (id === 'professional') return projects.filter((p) => p.category === 'professional' && !p.odoo).length
  if (id === 'personal') return projects.filter((p) => p.category === 'personal' || p.category === 'featured').length
  return projects.filter((p) => p.category === 'ai').length
}

export function ProjectsPage() {
  usePageTitle('Projets')
  const [filter, setFilter] = useState<FilterId>('all')

  const items = useMemo(() => {
    if (filter === 'all') return projects
    if (filter === 'odoo') return projects.filter((p) => p.odoo)
    if (filter === 'professional') return projects.filter((p) => p.category === 'professional' && !p.odoo)
    if (filter === 'personal') return projects.filter((p) => p.category === 'personal' || p.category === 'featured')
    return projects.filter((p) => p.category === 'ai')
  }, [filter])

  const cols =
    filter === 'odoo' || filter === 'professional' || filter === 'ai'
      ? 'md:grid-cols-2'
      : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Projets"
          title="Réalisations"
          description="Chaque carte ouvre une page dédiée : contexte, rôle, livrables, stack et liens. Filtrez par type pour naviguer plus vite."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={
                filter === item.id
                  ? 'rounded-full bg-violet px-4 py-2 text-sm font-medium text-white'
                  : 'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:border-violet/40'
              }
            >
              {item.label}
              <span className="ml-1.5 text-xs opacity-70">{countFor(item.id)}</span>
            </button>
          ))}
        </div>

        <p className="text-sm text-zinc-500 mb-6">
          {items.length} projet{items.length > 1 ? 's' : ''} dans cette vue
        </p>

        <div className={`grid gap-4 sm:gap-5 ${cols}`}>
          {items.map((project) => (
            <ProjectCard key={project.name} project={project} compact featured={false} />
          ))}
        </div>

        <PageNav
          prev={{ to: '/experience', label: 'Expérience' }}
          next={{ to: '/competences', label: 'Compétences' }}
        />
      </div>
    </section>
  )
}
