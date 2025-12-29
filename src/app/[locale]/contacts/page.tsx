import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { PageTransition } from '@/shared/ui/animation'
import { container, margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { SendEmail } from '@/features/send-email/ui/SendEmail'
import { ILocaleProps } from '@/i18n/ILocaleProps'

import { ContactsList } from '@/app/[locale]/_ui/Contacts/ui/ContactsList'

import styles from './styles.module.css'

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
    <PageTransition>
      <main className={container.main}>
        <section className={cn(container.section, styles.container)}>
          <div className={margins.mb_xl}>
            <Typography variant="h1" bottomOffset="xl">
              {t('title')}
            </Typography>
            <ContactsList />
          </div>

          <div className={container.half}>
            <Typography variant="h1" component="h2" bottomOffset="xl">
              {t('write_to_me')}
            </Typography>

            <SendEmail />
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
