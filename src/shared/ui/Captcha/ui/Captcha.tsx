'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { margins } from '@/shared/ui/styles'
import { THEME, useTheme } from '@/shared/ui/ThemeToggle'
import { Typography } from '@/shared/ui/Typography'

interface IProps {
  onVerify: (token: string) => void
  onError?: (message: string) => void
  onExpire?: (message: string) => void
  className?: string
}

export const Captcha = ({ onVerify, onExpire, onError, className }: IProps) => {
  const t = useTranslations('Captcha')
  const { theme } = useTheme()

  const [error, setError] = useState<string | null>(null)

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
    <div className={className}>
      <Turnstile
        siteKey={siteKey}
        onSuccess={(token) => {
          onVerify(token)
          setError(null)
        }}
        onError={() => {
          const message = t('on_error')
          setError(message)
          onError?.(message)
        }}
        onExpire={() => {
          const message = t('on_expired')
          setError(message)
          onExpire?.(message)
        }}
        options={{
          theme: captchTheme,
          size: 'flexible',
          retry: 'auto',
          retryInterval: 10000,
          refreshExpired: 'auto',
        }}
      />

      {error && (
        <Typography color="error" variant="caption" className={margins.mt_xs}>
          {error}
        </Typography>
      )}
    </div>
  )
}
