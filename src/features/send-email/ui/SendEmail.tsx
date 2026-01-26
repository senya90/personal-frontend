'use client'

import { FormVariant } from '@/shared/ui/Form'

import { api } from '@/application/api'
import {
  SendEmailForm,
  SendEmailFormData,
} from '@/features/send-email/ui/SendEmailForm'

interface IProps {
  className?: string
  variant?: FormVariant
}

export const SendEmail = (props: IProps) => {
  const sendEmail = async (data: SendEmailFormData) => {
    await api.email.sendEmail(data)
  }

  return <SendEmailForm onSubmitted={sendEmail} {...props} />
}
