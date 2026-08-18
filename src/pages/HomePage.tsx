import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { profile, projects, experiences, skills } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import { useReveal } from '../hooks/useReveal'
import { IconBriefcase, IconFolder, IconMail } from '../components/Icons'

export function HomePage() {
  usePageTitle()
  const ref = useReveal<HTMLDivElement>()
  const featured = projects.find((p) => p.category === 'featured')
  const currentJob = experiences.find((e) => e.current)
  const previewSkills = skills.flatMap((g) => g.items).slice(0, 12)
  const moreProjects = projects.filter((p) => p.category !== 'featured').slice(0, 4)

  return (
    <>
      <Hero />
      <section className="section-pad !pt-6">
        <div ref={ref} className="reveal container-narrow">
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            <div className="rounded-2xl border border-white/8 bg-panel/40 px-5 py-4">
              <p className="text-2xl font-display font-semibold text-white">{projects.length}</p>
              <p className="text-sm text-muted mt-1">Projets détaillés</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-panel/40 px-5 py-4">
              <p className="text-2xl font-display font-semibold text-white">Depuis 2023</p>
              <p className="text-sm text-muted mt-1">Missions, stage et projets</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-panel/40 px-5 py-4">
              <p className="text-2xl font-display font-semibold text-white">{profile.location}</p>
              <p className="text-sm text-muted mt-1">Disponible en remote</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/a-propos"
              className="rounded-2xl border border-white/8 bg-panel/55 p-6 hover:border-violet/35 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-violet-bright mb-2">Profil</p>
              <h2 className="font-display text-xl font-semibold text-white">Full-Stack & IA</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Web, mobile, APIs et produits de bout en bout. Lire le détail du parcours.
              </p>
            </Link>
            <Link
              to="/experience"
              className="rounded-2xl border border-white/8 bg-panel/55 p-6 hover:border-violet/35 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-violet-bright mb-2">En cours</p>
              <h2 className="font-display text-xl font-semibold text-white inline-flex items-center gap-2">
                <IconBriefcase size={18} />
                {currentJob?.company ?? 'Missions'}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {currentJob?.role} — {currentJob?.period}
              </p>
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border border-white/8 bg-panel/55 p-6 hover:border-violet/35 transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-violet-bright mb-2">Contact</p>
              <h2 className="font-display text-xl font-semibold text-white inline-flex items-center gap-2">
                <IconMail size={18} />
                Travaillons ensemble
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{profile.availability}</p>
            </Link>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="section-pad !pt-0">
          <div className="container-narrow">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium tracking-[0.18em] uppercase text-violet-bright/90 mb-2">
                  Projet phare
                </p>
                <h2 className="font-display text-3xl font-semibold text-white">{featured.name}</h2>
              </div>
              <Link to="/projets" className="text-sm text-violet-bright hover:underline inline-flex items-center gap-2">
                <IconFolder size={14} />
                Tous les projets
              </Link>
            </div>
            <ProjectCard project={featured} featured />
          </div>
        </section>
      ) : null}

      <section className="section-pad !pt-0">
        <div className="container-narrow">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-[0.18em] uppercase text-violet-bright/90 mb-2">
                Autres réalisations
              </p>
              <h2 className="font-display text-2xl font-semibold text-white">Un aperçu, le détail est sur chaque page</h2>
            </div>
            <Link to="/projets" className="text-sm text-violet-bright hover:underline">
              Voir tout
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {moreProjects.map((project) => (
              <ProjectCard key={project.name} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad !pt-0 pb-24">
        <div className="container-narrow rounded-3xl border border-white/8 bg-panel/40 p-8">
          <h2 className="font-display text-2xl font-semibold text-white mb-4">Stack en un coup d’œil</h2>
          <div className="flex flex-wrap gap-2">
            {previewSkills.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-ink/50 px-2.5 py-1.5 text-sm text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            to="/competences"
            className="mt-6 inline-flex text-sm font-medium text-violet-bright hover:underline"
          >
            Voir toutes les compétences
          </Link>
        </div>
      </section>
    </>
  )
}
