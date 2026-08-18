import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Page introuvable')
  return (
    <section className="section-pad pt-32 min-h-[60vh]">
      <div className="container-narrow max-w-xl text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-violet-bright mb-3">404</p>
        <h1 className="font-display text-4xl font-bold text-white">Page introuvable</h1>
        <p className="mt-4 text-zinc-400">Cette URL n’existe pas dans le portfolio.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white hover:bg-violet-bright"
          >
            Accueil
          </Link>
          <Link
            to="/projets"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Projets
          </Link>
        </div>
      </div>
    </section>
  )
}
