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

  const groups = useMemo(
    () => [
      {
        id: 'featured' as const,
        title: 'Projet phare',
        description: 'Réseau social visuel, web et mobile.',
        items: projects.filter((p) => p.category === 'featured'),
        featured: true,
      },
      {
        id: 'odoo' as const,
        title: 'Odoo',
        description: 'Modules et intégrations Odoo.',
        items: projects.filter((p) => p.odoo),
      },
      {
        id: 'professional' as const,
        title: 'Professionnels',
        description: 'Web, mobile et APIs en contexte entreprise ou client.',
        items: projects.filter((p) => p.category === 'professional' && !p.odoo),
      },
      {
        id: 'personal' as const,
        title: 'Perso & soutenance',
        description: 'E-commerce, e-learning, santé numérique et sites.',
        items: projects.filter((p) => p.category === 'personal'),
      },
      {
        id: 'ai' as const,
        title: 'IA & Data',
        description: 'TAL, voix, scraping et expérimentations.',
        items: projects.filter((p) => p.category === 'ai'),
      },
    ],
    [],
  )

  const visible = groups.filter((group) => {
    if (filter === 'all') return group.items.length > 0
    if (filter === 'personal') return group.id === 'personal' || group.id === 'featured'
    return group.id === filter
  })

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Projets"
          title="Réalisations"
          description="Applications web, mobiles et APIs, missions professionnelles et projets personnels."
        />

        <div className="flex flex-wrap gap-2 mb-12">
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

        <div className="space-y-16">
          {visible.map((group) => (
            <section key={group.id}>
              <div className="mb-6 max-w-2xl">
                <h2 className="font-display text-2xl font-semibold text-white">{group.title}</h2>
                {group.description ? (
                  <p className="mt-2 text-sm text-muted leading-relaxed">{group.description}</p>
                ) : null}
              </div>
              {group.featured ? (
                <div className="grid gap-4">
                  {group.items.map((project) => (
                    <ProjectCard key={project.name} project={project} featured />
                  ))}
                </div>
              ) : (
                <div
                  className={`grid gap-4 ${
                    group.id === 'odoo' || group.id === 'professional' || group.id === 'ai'
                      ? 'md:grid-cols-2'
                      : 'md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {group.items.map((project) => (
                    <ProjectCard key={project.name} project={project} compact />
                  ))}
                </div>
              )}
            </section>
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
