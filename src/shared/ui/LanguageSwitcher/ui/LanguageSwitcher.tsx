'use client'

import { Link, usePathname } from '@/i18n/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Link href={pathname} locale="ru">
        RU
      </Link>
      <Link href={pathname} locale="en">
        EN
      </Link>
    </div>
  )
}
