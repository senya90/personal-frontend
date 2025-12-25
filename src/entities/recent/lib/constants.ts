import { Locale } from '@/i18n/routing'

import { recentPorjectsItemsEn } from './en'
import { recentPorjectsItemsRu } from './ru'

export const recentProjectsItems = {
  ru: recentPorjectsItemsRu,
  en: recentPorjectsItemsEn,
} as const

export const getRecentProjectsItems = (locale: Locale = 'ru') => {
  return recentProjectsItems[locale]
}
