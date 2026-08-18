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
  IconDesktop,
  IconLayout,
  IconMobile,
  IconServer,
  IconUsers,
  IconWrench,
} from './Icons'

const skillIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Langages: IconCode,
  Frontend: IconLayout,
  Mobile: IconMobile,
  Desktop: IconDesktop,
  Backend: IconServer,
  'Data & IA': IconBrain,
  'Base de données': IconDatabase,
  DevOps: IconCloud,
  Autres: IconWrench,
  'Compétences passives': IconUsers,
}

export function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="competences" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Compétences"
          title="Stack technique"
          description="Frontend, backend, mobile, data et outillage pour concevoir et livrer des produits."
        />

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skills.map((group) => {
            const GroupIcon = skillIcons[group.category] ?? IconCpu
            const wide = group.category === 'Compétences passives'
            return (
              <div
                key={group.category}
                className={
                  wide
                    ? 'rounded-2xl border border-white/8 bg-panel/50 p-5 sm:p-6 hover:border-violet/25 transition-colors sm:col-span-2 lg:col-span-3'
                    : 'rounded-2xl border border-white/8 bg-panel/50 p-5 sm:p-6 hover:border-violet/25 transition-colors'
                }
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
