import { ILocaleProps } from '@/i18n/ILocaleProps'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'
import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

interface IProps extends ILocaleProps {
  children: React.ReactNode
}

export async function generateMetadata({ params }: IProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Home.meta' })

  return {
    title: t('title'),
  }
}

export default function Home({ params }: IProps) {
  const { locale } = use(params)

  setRequestLocale(locale)
  const t = useTranslations('Home')

  return (
    <main className={container.main}>
      <Typography variant="h1">{t('greetings')}</Typography>
    </main>
  )
}
