import { about } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="apropos" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="À propos"
          title="Un profil Full-Stack orienté produit"
          description={about.lead}
        />
        <div ref={ref} className="reveal grid md:grid-cols-3 gap-4 md:gap-6">
          {about.points.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-white/8 bg-panel/60 p-6 hover:border-violet/30 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-3">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
