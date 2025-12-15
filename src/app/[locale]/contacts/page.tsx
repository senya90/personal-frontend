import { ILocaleProps } from '@/i18n/ILocaleProps'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

interface IProps extends ILocaleProps {}

export default function Contacts({ params }: IProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('Contacts')

  return (
    <main className={container.main}>
      <section className={container.section}>
        <Typography variant="h1">{t('title')}</Typography>
      </section>
    </main>
  )
}
