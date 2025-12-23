import { z } from 'zod'

import { sendEmailSchema } from '@/features/send-email/ui/SendEmailForm/ui/validationSchema'

export type SendEmailFormData = z.infer<typeof sendEmailSchema>
