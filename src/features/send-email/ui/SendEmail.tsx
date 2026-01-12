'use client'

import { FormVariant } from '@/shared/ui/Form'

import {
  SendEmailForm,
  SendEmailFormData,
} from '@/features/send-email/ui/SendEmailForm'

const apiUrl = process.env.NEXT_PUBLIC_SERVICE_API

interface IProps {
  className?: string
  variant?: FormVariant
}

export const SendEmail = (props: IProps) => {
  const sendEmail = async (data: SendEmailFormData) => {
    try {
      const res = await fetch(`${apiUrl}/api/v1/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      return res.ok
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return <SendEmailForm onSubmitted={sendEmail} {...props} />
}
