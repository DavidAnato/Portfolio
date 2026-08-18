import { useEffect } from 'react'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} - David Anato`
      : 'David Anato - Développeur Full-Stack & IA'
  }, [title])
}
