import { EmailApi } from '@/application/api/email/email'

const apiUrl = process.env.NEXT_PUBLIC_SERVICE_API

export const api = {
  email: new EmailApi(apiUrl),
}
