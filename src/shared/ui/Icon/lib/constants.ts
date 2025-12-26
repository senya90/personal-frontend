import ExternalLink from './svg/externalLink.svg'
import Github from './svg/github.svg'
import Mail from './svg/mail.svg'
import Moon from './svg/moon.svg'
import Sun from './svg/sun.svg'
import System from './svg/system.svg'
import Telegram from './svg/telegram.svg'

export const icons = {
  sun: Sun,
  moon: Moon,
  system: System,
  github: Github,
  mail: Mail,
  telegram: Telegram,
  externalLink: ExternalLink,
} as const

export const iconSizes = {
  xs: 16,
  s: 20,
  m: 28,
  l: 36,
  xl: 48,
} as const
