import { about } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { IconCheckCircle, IconCubes, IconLayers } from './Icons'

const aboutIcons = [IconCubes, IconLayers, IconCheckCircle]

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="apropos" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="À propos"
          title="Full-Stack, Odoo et produit"
          description={about.lead}
        />
        <div ref={ref} className="reveal grid md:grid-cols-3 gap-4 md:gap-6">
          {about.points.map((point, index) => {
            const PointIcon = aboutIcons[index] ?? IconLayers
            return (
              <article
                key={point.title}
                className="rounded-2xl border border-white/8 bg-panel/60 p-6 hover:border-violet/30 transition-colors"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-bright">
                  <PointIcon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{point.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
