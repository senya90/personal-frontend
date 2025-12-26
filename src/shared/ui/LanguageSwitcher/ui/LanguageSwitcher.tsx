'use client'

import cn from 'classnames'
import { useLocale } from 'next-intl'

import { constantsButtons } from '@/shared/ui/LanguageSwitcher/lib/constants'

import { usePathname, Link } from '@/i18n/navigation'
import { Locale } from '@/i18n/routing'

import styles from './styles.module.css'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale() as Locale

  return (
    <div className={styles.wrapper}>
      {constantsButtons.map((l) => (
        <Link
          key={l.locale}
          locale={l.locale}
          href={pathname}
          className={cn(styles.languageLink, {
            [styles.active]: l.locale === locale,
          })}
        >
          {l.title}
        </Link>
      ))}
    </div>
  )
}
