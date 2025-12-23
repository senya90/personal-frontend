import { SendEmailFormData } from '@/features/send-email/ui/SendEmailForm/model/SendEmailFormData'

export const INITIAL_SEND_EMAIL_DATA: SendEmailFormData = {
  theme: '',
  email: '',
  description: '',
}

type FieldsSet = keyof SendEmailFormData

export const SendEmailFormDataFields: Record<FieldsSet, FieldsSet> = {
  theme: 'theme',
  email: 'email',
  description: 'description',
}
