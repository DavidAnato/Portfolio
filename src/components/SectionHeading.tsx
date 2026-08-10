import { useReveal } from '../hooks/useReveal'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, id }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="reveal mb-12 md:mb-16 max-w-2xl" id={id}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-[0.18em] uppercase text-violet-bright/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description ? <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">{description}</p> : null}
    </div>
  )
}
