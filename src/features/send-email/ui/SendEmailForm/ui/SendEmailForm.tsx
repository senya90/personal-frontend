'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/Button'
import { Captcha } from '@/shared/ui/Captcha'
import { IForm, Input, Textarea } from '@/shared/ui/Form'
import { a11y, container, margins } from '@/shared/ui/styles'

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

  const [captchaToken, setCaptchaToken] = useState('')
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [captchaError, setCaptchaError] = useState('')

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

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
    setIsCaptchaValid(true)
    setCaptchaError('')
  }

  const handleCaptchaError = () => {
    setIsCaptchaValid(false)
    setCaptchaToken('')
  }

  return (
    <form
      className={cn(container.full, className)}
      noValidate
      onSubmit={handleSubmit(async (data) => {
        if (!isCaptchaValid) {
          setCaptchaError('Пожалуйста, подтвердите, что вы не робот')
          return
        }

        const formDataWithCaptcha = {
          ...data,
          captcha: captchaToken,
        }

        try {
          const res = await onSubmitted(formDataWithCaptcha)
          if (res) reset()
        } catch (error) {
          console.error(error)
        }
      })}
      aria-label={t('write_to_me.title')}
      role="form"
    >
      <Input
        {...register('theme')}
        error={errors.theme?.message}
        touched={touchedFields.theme}
        label={t('write_to_me.subject')}
        required
        aria-required="true"
        aria-invalid={errors.theme ? 'true' : 'false'}
        aria-describedby={errors.theme ? 'theme-error' : undefined}
        {...rest}
      />
      {errors.theme && (
        <div
          id="theme-error"
          role="alert"
          aria-live="polite"
          className={a11y.srOnly}
        >
          {errors.theme.message}
        </div>
      )}

      <Input
        {...register('email')}
        error={errors.email?.message}
        touched={touchedFields.email}
        label={t('write_to_me.email')}
        required
        aria-required="true"
        aria-invalid={errors.email ? 'true' : 'false'}
        aria-describedby={errors.email ? 'email-error' : undefined}
        autoComplete="email"
        {...rest}
      />
      {errors.email && (
        <div
          id="email-error"
          role="alert"
          aria-live="polite"
          className={a11y.srOnly}
        >
          {errors.email.message}
        </div>
      )}

      <Textarea
        {...register('description')}
        error={errors.description?.message}
        touched={touchedFields.description}
        label={t('write_to_me.message')}
        required
        aria-required="true"
        aria-invalid={errors.description ? 'true' : 'false'}
        aria-describedby={errors.description ? 'message-error' : undefined}
        {...rest}
      />
      {errors.description && (
        <div
          id="message-error"
          role="alert"
          aria-live="polite"
          className={a11y.srOnly}
        >
          {errors.description.message}
        </div>
      )}

      <Button
        type="submit"
        className={container.full}
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        aria-busy={isSubmitting}
        {...rest}
      >
        {t('write_to_me.send')}
      </Button>

      <Captcha
        className={margins.mt_s}
        onVerify={handleCaptchaVerify}
        onError={handleCaptchaError}
        onExpire={handleCaptchaError}
        aria-required="true"
        aria-invalid={errors.captcha ? 'true' : 'false'}
        aria-describedby={errors.captcha ? 'captcha-error' : undefined}
      />
      {errors.captcha && (
        <div
          id="captcha-error"
          role="alert"
          aria-live="polite"
          className={a11y.srOnly}
        >
          {errors.captcha.message}
        </div>
      )}
    </form>
  )
}
