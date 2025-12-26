import { z } from 'zod'

import { createSendEmailSchema } from '@/features/send-email/ui/SendEmailForm/ui/validationSchema'

type SchemaType = ReturnType<typeof createSendEmailSchema>
export type SendEmailFormData = z.infer<SchemaType>
