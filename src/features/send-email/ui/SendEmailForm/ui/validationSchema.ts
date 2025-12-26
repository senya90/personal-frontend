import { z } from 'zod'

import { TranslationFunction } from '@/shared/model/TranslationFunction'

export const createSendEmailSchema = (t: TranslationFunction) => {
  return z.object({
    theme: z
      .string()
      .min(1, t('required'))
      .max(100, t('max', { count: 100 })),
    email: z
      .email(t('wrong_email'))
      .min(1, t('required'))
      .max(100, t('max', { count: 100 })),
    description: z
      .string()
      .min(10, t('min', { count: 10 }))
      .max(1000, t('max', { count: 1000 })),
  })
}
