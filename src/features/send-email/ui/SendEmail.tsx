'use client'

import { FormVariant } from '@/shared/ui/Form'

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
    try {
      console.log('data', data)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return <SendEmailForm onSubmitted={sendEmail} {...props} />
}
