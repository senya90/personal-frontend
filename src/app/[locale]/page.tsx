import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { use } from 'react'

interface IProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
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
    <div className="">
      <main className="">
        <div className="">
          <h1 className="">{t('greetings')}</h1>
        </div>
      </main>
    </div>
  )
}
