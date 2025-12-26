import { Formats } from 'next-intl'

export type TranslationFunction = (
  key: string,
  values?: Record<string, string | number | Date> | undefined,
  formats?: Formats | undefined
) => string
