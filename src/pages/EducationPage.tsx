import { education } from '../data/content'
import { educationExtras } from '../data/extras'
import { SectionHeading } from '../components/SectionHeading'
import { PageNav } from '../components/PageNav'
import { usePageTitle } from '../hooks/usePageTitle'
import { useReveal } from '../hooks/useReveal'
import { IconCalendar, IconCheck, IconGraduation } from '../components/Icons'

export function EducationPage() {
  usePageTitle('Formation')
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Formation"
          title="Parcours académique"
          description="Informatique de gestion, projets appliqués et intelligence artificielle."
        />
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-4 md:gap-6">
          {education.map((item) => {
            const extra = educationExtras[item.title]
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/8 bg-panel/55 p-6 sm:p-7 hover:border-violet/25 transition-colors"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-bright">
                  <IconGraduation size={20} />
                </div>
                <p className="inline-flex items-center gap-1.5 text-sm text-zinc-400 mb-2">
                  <IconCalendar size={14} className="opacity-70" />
                  {item.period}
                </p>
                <h3 className="font-display text-xl font-semibold text-white leading-snug">{item.title}</h3>
                <p className="mt-2 text-violet-bright">{item.school}</p>
                {extra?.description ? (
                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{extra.description}</p>
                ) : null}
                {extra?.topics?.length ? (
                  <ul className="mt-4 space-y-2">
                    {extra.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-zinc-300">
                        <IconCheck size={14} className="text-cyan shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            )
          })}
        </div>

        <PageNav
          prev={{ to: '/competences', label: 'Compétences' }}
          next={{ to: '/contact', label: 'Contact' }}
        />
      </div>
    </section>
  )
}
