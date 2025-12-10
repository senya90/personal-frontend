import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Header } from '@/shared/ui/Header'
import { mainFont } from '@/shared/ui/fonts'
import './globals.css'
import './normalize.css'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Semoshin',
  description: 'Personal developer site',
}

interface IProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
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
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
