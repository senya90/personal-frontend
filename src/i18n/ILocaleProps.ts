import { Locale } from '@/i18n/routing'

export interface ILocaleProps {
  params: Promise<{ locale: Locale }>
}
