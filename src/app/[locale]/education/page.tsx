import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { EducationCard, getEducationItems } from '@/entities/education'
import { PageTransition } from '@/shared/ui/animation'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { ILocaleProps } from '@/i18n/ILocaleProps'
import { Locale } from '@/i18n/routing'

interface IProps extends ILocaleProps {}

export async function generateMetadata({ params }: IProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Education.meta' })

  return {
    title: t('title'),
  }
}

export default function Education({ params }: IProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('Education')
  const educationItems = getEducationItems(locale as Locale)

  return (
    <PageTransition>
      <main className={container.main}>
        <section className={container.section}>
          <Typography variant="h1">{t('title')}</Typography>
        </section>

        <div>
          {educationItems.map((item) => (
            <EducationCard education={item} key={item.id} bottomOffset="l" />
          ))}
        </div>
      </main>
    </PageTransition>
  )
}
