import { SendEmailFormData } from '@/features/send-email/ui/SendEmailForm'

export class EmailApi {
  constructor(private readonly baseUrl: string | undefined) {}

  async sendEmail(data: SendEmailFormData): Promise<void> {
    try {
      const res = await fetch(`${this.baseUrl}/api/v1/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}.`)
      }
    } catch (error) {
      throw new Error(
        `Request error /api/v1/email/send ${JSON.stringify(data)}. ${error}`
      )
    }
  }
}
