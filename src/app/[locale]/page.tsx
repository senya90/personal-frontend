import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { PageTransition } from '@/shared/ui/animation'
import { container } from '@/shared/ui/styles'

import { ILocaleProps } from '@/i18n/ILocaleProps'
import { Locale } from '@/i18n/routing'

import { Contacts } from '@/app/[locale]/_ui/Contacts'
import { Greetings } from '@/app/[locale]/_ui/Greetings'
import { RecentProjects } from '@/app/[locale]/_ui/RecentProjects'
import { Stack } from '@/app/[locale]/_ui/Stack'
import { Work } from '@/app/[locale]/_ui/Work'

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

  return (
    <PageTransition>
      <main>
        <article className={container.bg}>
          <Greetings />
          <Stack />
          <Work locale={locale as Locale} />
          <RecentProjects locale={locale as Locale} />
          <Contacts />
        </article>
      </main>
    </PageTransition>
  )
}
