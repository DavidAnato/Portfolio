import { Link } from 'react-router-dom'
import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { IconDownload, IconFolder, IconMail } from './Icons'

export function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="accueil" className="relative overflow-hidden pt-28 sm:pt-32 pb-16 md:pb-24">
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/25 blur-3xl"
      />
      <div className="container-narrow section-pad !pt-8 !pb-8">
        <div ref={ref} className="reveal grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs sm:text-sm text-emerald-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </div>

            <p className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-3">Portfolio</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-gradient">
              {profile.title}
            </p>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 tracking-wide">
              {profile.tags.join(' · ')}
            </p>

            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
              {profile.heroText}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/projets"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white hover:bg-violet-bright transition-colors shadow-lg shadow-violet/25"
              >
                <IconFolder size={16} />
                Voir mes projets
              </Link>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <IconDownload size={16} />
                Voir mon CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/30 px-6 py-3 text-sm font-semibold text-cyan hover:bg-cyan/10 transition-colors"
              >
                <IconMail size={16} />
                Me contacter
              </Link>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet/30 via-transparent to-cyan/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel/80 shadow-2xl shadow-black/40">
              <img
                src={profile.photo}
                alt={`Portrait de ${profile.name}`}
                width={640}
                height={640}
                className="aspect-square w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16 photo-caption">
                <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
                <p className="text-sm text-zinc-300">{profile.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
