import { educationItemsRu } from './ru'
import { educationItemsEn } from './en'
import { Locale } from '@/i18n/routing'

export const educationItems = {
  ru: educationItemsRu,
  en: educationItemsEn,
} as const

export const getEducationItems = (locale: Locale = 'ru') => {
  return educationItems[locale]
}
