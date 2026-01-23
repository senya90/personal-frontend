'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useTranslations } from 'next-intl'
import { useId } from 'react'

import { IFormField } from '@/shared/ui/Form'
import { FieldAlerting } from '@/shared/ui/Form/ui/FieldAlerting'
import { a11y } from '@/shared/ui/styles'
import { THEME, useTheme } from '@/shared/ui/ThemeToggle'
import { Typography } from '@/shared/ui/Typography'

interface IProps extends IFormField {
  onVerify: (token: string) => void
  onError?: (message: string) => void
  onExpire?: (message: string) => void
  className?: string
}

export const Captcha = ({
  onVerify,
  onExpire,
  onError,
  className,
  error,
  warning,
  touched: __touched,
  ...props
}: IProps) => {
  const id = useId()
  const t = useTranslations('Captcha')
  const { theme } = useTheme()

  const captchTheme =
    theme === THEME.DARK ? 'dark' : theme === THEME.LIGHT ? 'light' : 'auto'

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
  if (!siteKey) {
    return (
      <Typography color="error" variant="caption">
        {t('wrong_config')}
      </Typography>
    )
  }

  return (
    <div
      className={className}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? id : undefined}
      {...props}
    >
      <Turnstile
        siteKey={siteKey}
        onSuccess={(token) => {
          onVerify(token)
        }}
        onError={() => {
          onError?.(t('on_error'))
        }}
        onExpire={() => {
          onExpire?.(t('on_expired'))
        }}
        options={{
          theme: captchTheme,
          size: 'flexible',
          retry: 'auto',
          retryInterval: 10000,
          refreshExpired: 'auto',
        }}
      />

      {(error || warning) && (
        <FieldAlerting id={id} error={error} warning={warning} />
      )}

      {error && (
        <div id={id} role="alert" aria-live="polite" className={a11y.srOnly}>
          {error.toString()}
        </div>
      )}
    </div>
  )
}
