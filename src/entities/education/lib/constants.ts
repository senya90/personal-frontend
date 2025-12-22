import { Locale } from '@/i18n/routing'

import { educationItemsEn } from './en'
import { educationItemsRu } from './ru'

export const educationItems = {
  ru: educationItemsRu,
  en: educationItemsEn,
} as const

export const getEducationItems = (locale: Locale = 'ru') => {
  return educationItems[locale]
}
