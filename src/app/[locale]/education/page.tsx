import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { EducationCard, getEducationItems } from '@/entities/education'
import { PageTransition } from '@/shared/ui/animation'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { ILocaleProps } from '@/i18n/ILocaleProps'
import { Locale } from '@/i18n/routing'

import stylesMain from '@/app/[locale]/styles.module.css'

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
      <main>
        <section
          className={cn(container.section, stylesMain.section)}
          aria-labelledby="education-heading"
          role="region"
        >
          <Typography variant="h1" bottomOffset="xl" id="education-heading">
            {t('title')}
          </Typography>

          <div role="list">
            {educationItems.map((item) => (
              <EducationCard
                education={item}
                key={item.id}
                bottomOffset="l"
                role="listitem"
              />
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
