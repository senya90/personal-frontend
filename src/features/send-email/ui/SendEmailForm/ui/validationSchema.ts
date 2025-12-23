import { z } from 'zod'

export const sendEmailSchema = z.object({
  theme: z
    .string()
    .min(1, 'Обязательное поле')
    .max(100, 'Не более 100 символов'),
  email: z
    .email('Неверный формат email')
    .min(1, 'Обязательное поле')
    .max(500, 'Не более 500 символов'),
  description: z
    .string()
    .min(10, 'Сообщение должно быть минимум 10 символов')
    .max(1000, 'Не более 1000 символов'),
})
