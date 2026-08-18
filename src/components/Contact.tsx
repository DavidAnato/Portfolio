import { useState, type FormEvent } from 'react'
import { profile } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import {
  IconDownload,
  IconGithub,
  IconMail,
  IconPhone,
  IconSend,
  IconWhatsApp,
} from './Icons'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [status, setStatus] = useState<'idle' | 'ready'>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()

    const subject = encodeURIComponent(`Contact portfolio — ${name}`)
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('ready')
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Un projet ? Parlons-en."
          description="Ouvert aux missions Odoo, au Full-Stack et à l’IA — collaborations, projets et opportunités remote."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-panel/55 p-5 hover:border-violet/35 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/15 text-violet-bright">
                <IconMail size={20} />
              </span>
              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <p className="text-white font-medium break-all">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-panel/55 p-5 hover:border-violet/35 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-zinc-200">
                <IconGithub size={20} />
              </span>
              <div>
                <p className="text-sm text-zinc-400">GitHub</p>
                <p className="text-white font-medium">github.com/DavidAnato</p>
              </div>
            </a>

            <a
              href={profile.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-panel/55 p-5 hover:border-violet/35 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <IconPhone size={20} />
              </span>
              <div>
                <p className="text-sm text-zinc-400">Téléphone</p>
                <p className="text-white font-medium">{profile.phone}</p>
              </div>
            </a>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-panel/55 p-5 hover:border-emerald-400/30 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <IconWhatsApp size={20} />
              </span>
              <div>
                <p className="text-sm text-zinc-400">WhatsApp</p>
                <p className="text-white font-medium">Écrire sur WhatsApp</p>
              </div>
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-violet/35 bg-violet/15 px-5 py-3 text-sm font-semibold text-violet-bright hover:bg-violet/25 transition-colors"
            >
              <IconDownload size={16} />
              Télécharger / Voir mon CV
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/8 bg-panel/55 p-6 sm:p-8 space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-300 mb-2">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet/50 focus:outline-none"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-zinc-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet/50 focus:outline-none"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-violet/50 focus:outline-none resize-y min-h-32"
                placeholder="Parlez-moi de votre projet ou de l’opportunité…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white hover:bg-violet-bright transition-colors"
            >
              <IconSend size={16} />
              Envoyer le message
            </button>
            {status === 'ready' ? (
              <p className="text-sm text-zinc-400" role="status">
                Ouverture de votre client email…
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
