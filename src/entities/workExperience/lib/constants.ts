import { Locale } from '@/i18n/routing'

import { workExperienceEn } from './en'
import { workExperienceRu } from './ru'

export const workItems = {
  ru: workExperienceRu,
  en: workExperienceEn,
} as const

export const getWorkItems = (locale: Locale = 'ru') => {
  return workItems[locale]
}
