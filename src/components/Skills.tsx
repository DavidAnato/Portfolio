import type { ComponentType } from 'react'
import { skills } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import {
  IconBrain,
  IconCloud,
  IconCode,
  IconCpu,
  IconDatabase,
  IconLayout,
  IconServer,
  IconWrench,
} from './Icons'

const skillIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Langages: IconCode,
  Frontend: IconLayout,
  Backend: IconServer,
  'Data & IA': IconBrain,
  'Base de données': IconDatabase,
  DevOps: IconCloud,
  Autres: IconWrench,
}

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
          {skills.map((group) => {
            const GroupIcon = skillIcons[group.category] ?? IconCpu
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-white/8 bg-panel/50 p-5 sm:p-6 hover:border-violet/25 transition-colors"
              >
                <h3 className="font-display text-base font-semibold text-violet-bright mb-4 inline-flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/25 bg-violet/10">
                    <GroupIcon size={16} />
                  </span>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
