import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { PageTransition } from '@/shared/ui/animation'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { ILocaleProps } from '@/i18n/ILocaleProps'

interface IProps extends ILocaleProps {}

export async function generateMetadata({ params }: IProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Typography.meta' })

  return {
    title: t('title'),
  }
}

export default function TypographyPage({ params }: IProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('Typography')

  return (
    <PageTransition>
      <main className={container.main}>
        <section className={container.section}>
          <Typography variant="h1">{t('title')}</Typography>
        </section>

        <div>
          <Typography variant={'h1'}>h1 {t('pangram')}</Typography>
          <Typography variant={'h2'}>h2 {t('pangram')}</Typography>
          <Typography variant={'h3'}>h3 {t('pangram')}</Typography>
          <Typography variant={'h4'}>h4 {t('pangram')}</Typography>
          <Typography variant={'h5'}>h5 {t('pangram')}</Typography>
          <Typography variant={'h6'}>h6 {t('pangram')}</Typography>

          <Typography variant={'subtitle1'}>
            subtitle1 {t('pangram')}
          </Typography>
          <Typography variant={'subtitle2'}>
            subtitle2 {t('pangram')}
          </Typography>

          <Typography variant={'lead'}>
            lead {t('pangram')} {t('pangram')} {t('pangram')}
          </Typography>

          <Typography variant={'body1'}>
            body1 {t('pangram')} {t('pangram')} {t('pangram')}
          </Typography>
          <Typography variant={'body2'}>
            body2 {t('pangram')} {t('pangram')} {t('pangram')}
          </Typography>

          <div>
            <Typography variant={'caption'}>
              caption {t('pangram')} {t('pangram')} {t('pangram')}
            </Typography>
          </div>

          <div>
            <Typography variant={'overline'}>
              overline {t('pangram')} {t('pangram')} {t('pangram')}
            </Typography>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
