import { Link } from 'react-router-dom'
import { about, profile } from '../data/content'
import { aboutFocus, aboutHowIWork, aboutStory } from '../data/extras'
import { SectionHeading } from '../components/SectionHeading'
import { PageNav } from '../components/PageNav'
import { usePageTitle } from '../hooks/usePageTitle'
import { useReveal } from '../hooks/useReveal'
import { IconCheckCircle, IconLayers, IconSparkles } from '../components/Icons'

const icons = [IconLayers, IconSparkles, IconCheckCircle]

export function AboutPage() {
  usePageTitle('À propos')
  const ref = useReveal<HTMLDivElement>()
  const storyRef = useReveal<HTMLDivElement>()
  const howRef = useReveal<HTMLDivElement>()

  return (
    <section className="section-pad pt-28 sm:pt-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="À propos"
          title="Développeur Full-Stack"
          description={about.lead}
        />

        <div className="mb-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel/80">
              <img
                src={profile.photo}
                alt={`Portrait de ${profile.name}`}
                width={480}
                height={480}
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              {profile.name} · {profile.location}
            </p>
          </div>

          <div ref={storyRef} className="reveal space-y-5">
            {aboutStory.map((p) => (
              <p key={p.slice(0, 24)} className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/experience"
                className="inline-flex rounded-full bg-violet/20 border border-violet/30 px-4 py-2 text-sm font-medium text-violet-bright hover:bg-violet/30"
              >
                Voir l’expérience
              </Link>
              <Link
                to="/projets"
                className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Voir les projets
              </Link>
            </div>
          </div>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {aboutFocus.map((point, index) => {
            const PointIcon = icons[index] ?? IconLayers
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

        <div ref={howRef} className="reveal">
          <h2 className="font-display text-2xl font-semibold text-white mb-6">Comment je travaille</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {aboutHowIWork.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/8 bg-panel/40 p-6"
              >
                <h3 className="font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <PageNav next={{ to: '/experience', label: 'Expérience' }} />
      </div>
    </section>
  )
}
