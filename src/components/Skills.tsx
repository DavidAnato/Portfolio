import { skills } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="competences" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Compétences"
          title="Stack technique"
          description="Une vue claire des technologies utilisées au quotidien — sans pourcentages arbitraires."
        />

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/8 bg-panel/50 p-5 sm:p-6 hover:border-violet/25 transition-colors"
            >
              <h3 className="font-display text-base font-semibold text-violet-bright mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-ink/50 px-2.5 py-1.5 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
