'use client'

import { usePathname, redirect } from '@/i18n/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <a onClick={() => redirect({ locale: 'ru', href: pathname })}>RU</a>
      <a onClick={() => redirect({ locale: 'en', href: pathname })}>EN</a>
    </div>
  )
}
