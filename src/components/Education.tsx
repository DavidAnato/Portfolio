import { education } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export function Education() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="formation" className="section-pad">
      <div className="container-narrow">
        <SectionHeading eyebrow="Formation" title="Parcours académique" />
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-4 md:gap-6">
          {education.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/8 bg-panel/55 p-6 sm:p-7 hover:border-violet/25 transition-colors"
            >
              <p className="text-sm text-zinc-400 mb-2">{item.period}</p>
              <h3 className="font-display text-xl font-semibold text-white leading-snug">{item.title}</h3>
              <p className="mt-2 text-violet-bright">{item.school}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
