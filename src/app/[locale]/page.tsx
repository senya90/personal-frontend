import { ILocaleProps } from '@/i18n/ILocaleProps'
import { container } from '@/shared/ui/styles'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import { Greetings } from '@/app/[locale]/_ui/Greetings'
import { Experience } from '@/app/[locale]/_ui/Experience'
import { Stack } from '@/app/[locale]/_ui/Stack'
import { Work } from '@/app/[locale]/_ui/Work'
import { RecentProjects } from '@/app/[locale]/_ui/RecentProjects'
import { Contacts } from '@/app/[locale]/_ui/Contacts'

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
    <main>
      <article className={container.bg}>
        <Greetings />

        <Experience />

        <Stack />

        <Work />

        <RecentProjects />

        <Contacts />
      </article>
    </main>
  )
}
