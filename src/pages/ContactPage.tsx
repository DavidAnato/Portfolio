import { Contact } from '../components/Contact'
import { usePageTitle } from '../hooks/usePageTitle'

export function ContactPage() {
  usePageTitle('Contact')
  return <Contact />
}
