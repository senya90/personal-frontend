import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { mainFont } from '@/shared/ui/fonts'
import { Header } from '@/shared/ui/Header'
import { ToasterProvider } from '@/shared/ui/ToasterProvider'

import { ILocaleProps } from '@/i18n/ILocaleProps'
import { routing } from '@/i18n/routing'

import './globals.css'
import './normalize.css'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Semoshin',
  description: 'Personal developer site',
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
