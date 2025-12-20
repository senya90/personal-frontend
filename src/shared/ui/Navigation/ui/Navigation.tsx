'use client'

import { useTranslations } from 'next-intl'

import { NavLink } from './NavigationLink/ui/NavigationLink'

export const Navigation = () => {
  const t = useTranslations('Nav')

  return (
    <nav>
      <NavLink href="/">{t('home')}</NavLink>
      <NavLink href="/education">{t('education')}</NavLink>
      <NavLink href="/contacts">{t('contacts')}</NavLink>
    </nav>
  )
}
