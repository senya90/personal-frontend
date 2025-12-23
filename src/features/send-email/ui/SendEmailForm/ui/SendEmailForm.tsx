'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/Button'
import { Input, Textarea } from '@/shared/ui/Form'
import { container } from '@/shared/ui/styles'

import { INITIAL_SEND_EMAIL_DATA } from '@/features/send-email/ui/SendEmailForm/lib/constants'
import { SendEmailFormData } from '@/features/send-email/ui/SendEmailForm/model/SendEmailFormData'
import { sendEmailSchema } from '@/features/send-email/ui/SendEmailForm/ui/validationSchema'

interface IProps {
  className?: string
  onSubmitted: (data: SendEmailFormData) => Promise<boolean>
}

export const SendEmailForm = ({ className, onSubmitted }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailSchema),
    mode: 'onTouched',
    defaultValues: INITIAL_SEND_EMAIL_DATA,
  })

  return (
    <form
      className={cn(container.full, className)}
      noValidate
      onSubmit={handleSubmit(async (data) => {
        try {
          const res = await onSubmitted(data)
          if (res) reset()
        } catch (error) {
          console.error(error)
        }
      })}
    >
      <Input
        {...register('theme')}
        name="theme"
        error={errors.theme?.message}
        touched={touchedFields.theme}
        label="Тема"
      />
      <Input
        {...register('email')}
        name="email"
        error={errors.email?.message}
        touched={touchedFields.email}
        label="Куда отвечать (email)"
      />
      <Textarea
        {...register('description')}
        name="description"
        error={errors.description?.message}
        touched={touchedFields.description}
        label="Напиши мне"
      />

      <Button type="submit" className={container.full} disabled={isSubmitting}>
        Отправить
      </Button>
    </form>
  )
}
