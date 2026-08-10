import { education } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { IconCalendar, IconGraduation } from './Icons'

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
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-bright">
                <IconGraduation size={20} />
              </div>
              <p className="inline-flex items-center gap-1.5 text-sm text-zinc-400 mb-2">
                <IconCalendar size={14} className="opacity-70" />
                {item.period}
              </p>
              <h3 className="font-display text-xl font-semibold text-white leading-snug">{item.title}</h3>
              <p className="mt-2 text-violet-bright">{item.school}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
