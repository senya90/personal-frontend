import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { mainFont } from '@/shared/ui/fonts'
import { Header } from '@/shared/ui/Header'
import { ToasterProvider } from '@/shared/ui/ToasterProvider'

import { ILocaleProps } from '@/i18n/ILocaleProps'
import { routing } from '@/i18n/routing'

import './globals.css'
import './normalize.css'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Home' })

  const baseUrl = 'https://semoshin.ru'
  const url = `${baseUrl}/${locale}`

  console.log('url', url)

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    icons: {
      icon: [{ url: '/favicon.ico' }],
    },

    openGraph: {
      title: t('meta.og:title'),
      description: t('meta.og:description'),
      url,
      siteName: 'semoshin.ru',
      type: 'website',
      images: [
        {
          url: 'https://semoshin.ru/icons/chrome-192x192.png',
          width: 192,
          height: 192,
          alt: 'semoshin.ru favicon logo',
        },
      ],
    },

    twitter: {
      card: 'summary',
      title: t('meta.og:title'),
      description: t('meta.og:description'),
      images: ['https://semoshin.ru/icons/chrome-192x192.png'],
    },

    alternates: {
      canonical: url,
      languages: {
        ru: `${baseUrl}/ru`,
        en: `${baseUrl}/en`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

interface IProps extends ILocaleProps {
  children: React.ReactNode
}

export default async function LocaleLayout({ children, params }: IProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} className={mainFont.variable}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <ToasterProvider />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
