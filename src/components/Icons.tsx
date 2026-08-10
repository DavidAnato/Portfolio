import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Icon({ size = 20, className, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  )
}

export function IconFolder({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.4a2 2 0 0 1-1.7-.9l-.9-1.2A2 2 0 0 0 8.4 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
    </Icon>
  )
}

export function IconFileText({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </Icon>
  )
}

export function IconMail({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  )
}

export function IconGithub({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 20}
      height={size ?? 20}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.4 3.7 18.4 4 18.4 4a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  )
}

export function IconPhone({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.7a2 2 0 0 1 1.6 2z" />
    </Icon>
  )
}

export function IconWhatsApp({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 20}
      height={size ?? 20}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.5 6.5A7.8 7.8 0 0 0 4.7 15.3L3.5 20l4.8-1.3A7.8 7.8 0 1 0 17.5 6.5zm1.2 7.8a6.5 6.5 0 0 1-9.5 4.8l-.3-.2-2.8.7.8-2.7-.2-.3a6.5 6.5 0 1 1 12 2.3zM14.9 13.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.5.7-.7.8-.3.1-.5 0a5.3 5.3 0 0 1-1.6-1 5.9 5.9 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.1-.2c0-.1 0-.2 0-.3s-.5-1.1-.6-1.5c-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.3.1-.5.3s-.7.7-.7 1.6.7 1.9.8 2 .1.1 1.3 2.1a9.3 9.3 0 0 0 3.3 2.7c.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1.1-.2 1.3-.7.2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2z" />
    </svg>
  )
}

export function IconExternalLink({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </Icon>
  )
}

export function IconLayers({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m12 2 9 5-9 5-9-5 9-5z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </Icon>
  )
}

export function IconSparkles({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
    </Icon>
  )
}

export function IconCheckCircle({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </Icon>
  )
}

export function IconBriefcase({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </Icon>
  )
}

export function IconCalendar({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 11h18" />
    </Icon>
  )
}

export function IconCode({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </Icon>
  )
}

export function IconCpu({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v3" />
      <path d="M15 2v3" />
      <path d="M9 19v3" />
      <path d="M15 19v3" />
      <path d="M2 9h3" />
      <path d="M2 15h3" />
      <path d="M19 9h3" />
      <path d="M19 15h3" />
    </Icon>
  )
}

export function IconDatabase({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  )
}

export function IconServer({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01" />
      <path d="M7 16.5h.01" />
    </Icon>
  )
}

export function IconBrain({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M12 5a4 4 0 0 0-4 4v1a3 3 0 0 0-2 2.8V15a3 3 0 0 0 3 3h1" />
      <path d="M12 5a4 4 0 0 1 4 4v1a3 3 0 0 1 2 2.8V15a3 3 0 0 1-3 3h-1" />
      <path d="M9 18v2" />
      <path d="M15 18v2" />
      <path d="M12 12v6" />
    </Icon>
  )
}

export function IconCloud({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M17.5 19a4.5 4.5 0 1 0-.9-8.9A6 6 0 0 0 5.2 12 3.5 3.5 0 0 0 6.5 19z" />
    </Icon>
  )
}

export function IconWrench({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18v3h3l6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.5-2.5z" />
    </Icon>
  )
}

export function IconGraduation({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m22 9-10-5L2 9l10 5 10-5z" />
      <path d="M6 12v5c0 .8 2.7 3 6 3s6-2.2 6-3v-5" />
      <path d="M22 9v6" />
    </Icon>
  )
}

export function IconSend({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m22 2-7 20-4-9-9-4z" />
      <path d="M22 2 11 13" />
    </Icon>
  )
}

export function IconArrowUp({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </Icon>
  )
}

export function IconDownload({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </Icon>
  )
}

export function IconCheck({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Icon>
  )
}

export function IconLayout({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </Icon>
  )
}

export function IconMessage({ size, className }: IconProps) {
  return (
    <Icon size={size} className={className}>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 1 1 18 0z" />
    </Icon>
  )
}
