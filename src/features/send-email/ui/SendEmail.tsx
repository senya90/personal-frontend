'use client'

import {
  SendEmailForm,
  SendEmailFormData,
} from '@/features/send-email/ui/SendEmailForm'

interface IProps {
  className?: string
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
