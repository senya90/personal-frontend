import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { ILocaleProps } from '@/i18n/ILocaleProps'

interface IProps extends ILocaleProps {}

export async function generateMetadata({ params }: IProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Contacts.meta' })

  return {
    title: t('title'),
  }
}

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
