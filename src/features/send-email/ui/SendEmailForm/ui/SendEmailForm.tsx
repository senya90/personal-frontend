'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/Button'
import { IForm, Input, Textarea } from '@/shared/ui/Form'
import { container } from '@/shared/ui/styles'

import { INITIAL_SEND_EMAIL_DATA } from '@/features/send-email/ui/SendEmailForm/lib/constants'
import { SendEmailFormData } from '@/features/send-email/ui/SendEmailForm/model/SendEmailFormData'
import { createSendEmailSchema } from '@/features/send-email/ui/SendEmailForm/ui/validationSchema'

interface IProps extends IForm {
  className?: string
  onSubmitted: (data: SendEmailFormData) => Promise<boolean>
}

export const SendEmailForm = ({ className, onSubmitted, ...rest }: IProps) => {
  const t = useTranslations('Home')
  const tValidation = useTranslations('Validation')
  const validationSchema = createSendEmailSchema(tValidation)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(validationSchema),
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
        error={errors.theme?.message}
        touched={touchedFields.theme}
        label={t('write_to_me.subject')}
        {...rest}
      />
      <Input
        {...register('email')}
        error={errors.email?.message}
        touched={touchedFields.email}
        label={t('write_to_me.email')}
        {...rest}
      />
      <Textarea
        {...register('description')}
        error={errors.description?.message}
        touched={touchedFields.description}
        label={t('write_to_me.message')}
        {...rest}
      />

      <Button
        type="submit"
        className={container.full}
        disabled={isSubmitting}
        {...rest}
      >
        {t('write_to_me.send')}
      </Button>
    </form>
  )
}
