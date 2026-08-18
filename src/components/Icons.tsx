import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBriefcase,
  faCalendarDays,
  faCheck,
  faCircleCheck,
  faCloud,
  faCode,
  faDatabase,
  faDownload,
  faEnvelope,
  faFolderOpen,
  faGraduationCap,
  faLayerGroup,
  faMicrochip,
  faMobileScreen,
  faDesktop,
  faPaperPlane,
  faPhone,
  faServer,
  faTableCellsLarge,
  faUpRightFromSquare,
  faWandMagicSparkles,
  faWrench,
  faSun,
  faMoon,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

type IconProps = {
  size?: number
  className?: string
}

function Fa({ icon, size = 20, className }: IconProps & { icon: IconDefinition }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}

export function IconFolder({ size, className }: IconProps) {
  return <Fa icon={faFolderOpen} size={size} className={className} />
}

export function IconFileText({ size, className }: IconProps) {
  return <Fa icon={faCode} size={size} className={className} />
}

export function IconMail({ size, className }: IconProps) {
  return <Fa icon={faEnvelope} size={size} className={className} />
}

export function IconGithub({ size, className }: IconProps) {
  return <Fa icon={faGithub} size={size} className={className} />
}

export function IconLinkedIn({ size, className }: IconProps) {
  return <Fa icon={faLinkedin} size={size} className={className} />
}

export function IconPhone({ size, className }: IconProps) {
  return <Fa icon={faPhone} size={size} className={className} />
}

export function IconWhatsApp({ size, className }: IconProps) {
  return <Fa icon={faWhatsapp} size={size} className={className} />
}

export function IconExternalLink({ size, className }: IconProps) {
  return <Fa icon={faUpRightFromSquare} size={size} className={className} />
}

export function IconLayers({ size, className }: IconProps) {
  return <Fa icon={faLayerGroup} size={size} className={className} />
}

export function IconSparkles({ size, className }: IconProps) {
  return <Fa icon={faWandMagicSparkles} size={size} className={className} />
}

export function IconCheckCircle({ size, className }: IconProps) {
  return <Fa icon={faCircleCheck} size={size} className={className} />
}

export function IconBriefcase({ size, className }: IconProps) {
  return <Fa icon={faBriefcase} size={size} className={className} />
}

export function IconCalendar({ size, className }: IconProps) {
  return <Fa icon={faCalendarDays} size={size} className={className} />
}

export function IconCode({ size, className }: IconProps) {
  return <Fa icon={faCode} size={size} className={className} />
}

export function IconCpu({ size, className }: IconProps) {
  return <Fa icon={faMicrochip} size={size} className={className} />
}

export function IconDatabase({ size, className }: IconProps) {
  return <Fa icon={faDatabase} size={size} className={className} />
}

export function IconServer({ size, className }: IconProps) {
  return <Fa icon={faServer} size={size} className={className} />
}

export function IconBrain({ size, className }: IconProps) {
  return <Fa icon={faBrain} size={size} className={className} />
}

export function IconCloud({ size, className }: IconProps) {
  return <Fa icon={faCloud} size={size} className={className} />
}

export function IconWrench({ size, className }: IconProps) {
  return <Fa icon={faWrench} size={size} className={className} />
}

export function IconGraduation({ size, className }: IconProps) {
  return <Fa icon={faGraduationCap} size={size} className={className} />
}

export function IconSend({ size, className }: IconProps) {
  return <Fa icon={faPaperPlane} size={size} className={className} />
}

export function IconArrowLeft({ size, className }: IconProps) {
  return <Fa icon={faArrowLeft} size={size} className={className} />
}

export function IconArrowRight({ size, className }: IconProps) {
  return <Fa icon={faArrowRight} size={size} className={className} />
}

export function IconArrowUp({ size, className }: IconProps) {
  return <Fa icon={faArrowUp} size={size} className={className} />
}

export function IconDownload({ size, className }: IconProps) {
  return <Fa icon={faDownload} size={size} className={className} />
}

export function IconCheck({ size, className }: IconProps) {
  return <Fa icon={faCheck} size={size} className={className} />
}

export function IconLayout({ size, className }: IconProps) {
  return <Fa icon={faTableCellsLarge} size={size} className={className} />
}

export function IconMobile({ size, className }: IconProps) {
  return <Fa icon={faMobileScreen} size={size} className={className} />
}

export function IconDesktop({ size, className }: IconProps) {
  return <Fa icon={faDesktop} size={size} className={className} />
}

export function IconUsers({ size, className }: IconProps) {
  return <Fa icon={faUserGroup} size={size} className={className} />
}

export function IconSun({ size, className }: IconProps) {
  return <Fa icon={faSun} size={size} className={className} />
}

export function IconMoon({ size, className }: IconProps) {
  return <Fa icon={faMoon} size={size} className={className} />
}

export function IconMessage({ size, className }: IconProps) {
  return <Fa icon={faEnvelope} size={size} className={className} />
}
