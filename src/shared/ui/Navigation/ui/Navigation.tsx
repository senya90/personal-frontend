'use client'

import { useTranslations } from 'next-intl'

import { NavLink } from './NavigationLink/ui/NavigationLink'

interface IProps {
  className?: string
  onLinkClick?: () => void
}

export const Navigation = ({ className, onLinkClick }: IProps) => {
  const t = useTranslations('Nav')

  return (
    <nav className={className} role="navigation" aria-label={t('main_menu')}>
      <NavLink href="/" role="menuitem" onClick={onLinkClick}>
        {t('home')}
      </NavLink>
      <NavLink href="/education" role="menuitem" onClick={onLinkClick}>
        {t('education')}
      </NavLink>
      <NavLink href="/contacts" role="menuitem" onClick={onLinkClick}>
        {t('contacts')}
      </NavLink>
    </nav>
  )
}
