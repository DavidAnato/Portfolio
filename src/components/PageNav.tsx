import { Link } from 'react-router-dom'
import { IconArrowLeft, IconArrowRight } from './Icons'

type Item = { to: string; label: string }

type Props = {
  prev?: Item
  next?: Item
}

export function PageNav({ prev, next }: Props) {
  return (
    <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8">
      {prev ? (
        <Link
          to={prev.to}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-bright"
        >
          <IconArrowLeft size={14} />
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={next.to}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-bright ml-auto"
        >
          {next.label}
          <IconArrowRight size={14} />
        </Link>
      ) : null}
    </nav>
  )
}
