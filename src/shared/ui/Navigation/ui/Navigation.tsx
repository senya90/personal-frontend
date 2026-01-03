'use client'

import { useTranslations } from 'next-intl'

import { NavLink } from './NavigationLink/ui/NavigationLink'

export const Navigation = () => {
  const t = useTranslations('Nav')

  return (
    <nav role="navigation" aria-label={t('main_menu')}>
      <NavLink href="/" role="menuitem">
        {t('home')}
      </NavLink>
      <NavLink href="/education" role="menuitem">
        {t('education')}
      </NavLink>
      <NavLink href="/contacts" role="menuitem">
        {t('contacts')}
      </NavLink>
    </nav>
  )
}
