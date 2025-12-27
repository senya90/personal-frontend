import ExternalLink from './svg/externalLink.svg'
import Favicon from './svg/favicon.svg'
import Github from './svg/github.svg'
import Github2 from './svg/github2.svg'
import Mail from './svg/mail.svg'
import Mail2 from './svg/mail2.svg'
import Moon from './svg/moon.svg'
import Sun from './svg/sun.svg'
import System from './svg/system.svg'
import Telegram from './svg/telegram.svg'
import Telegram2 from './svg/telegram2.svg'

export const icons = {
  sun: Sun,
  moon: Moon,
  system: System,
  github: Github,
  github2: Github2,
  mail: Mail,
  mail2: Mail2,
  telegram: Telegram,
  telegram2: Telegram2,
  externalLink: ExternalLink,
  favicon: Favicon,
} as const

export const iconSizes = {
  xs: 16,
  s: 20,
  m: 28,
  l: 36,
  xl: 48,
} as const
