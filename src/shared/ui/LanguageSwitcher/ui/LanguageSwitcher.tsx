'use client'

import cn from 'classnames'
import { useLocale, useTranslations } from 'next-intl'

import { constantsButtons } from '@/shared/ui/LanguageSwitcher/lib/constants'

import { usePathname, Link } from '@/i18n/navigation'
import { Locale } from '@/i18n/routing'

import styles from './styles.module.css'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const t = useTranslations('Header')

  return (
    <div className={styles.wrapper} aria-label={t('switch_language')}>
      {constantsButtons.map((l) => (
        <Link
          key={l.locale}
          locale={l.locale}
          href={pathname}
          className={cn(styles.languageLink, {
            [styles.active]: l.locale === locale,
          })}
          aria-label={
            l.title === 'EN'
              ? 'English'
              : l.title === 'RU'
                ? 'Russian'
                : l.title
          }
          aria-current={l.locale === locale ? 'true' : undefined}
          role="radio"
          aria-checked={l.locale === locale}
        >
          {l.title}
        </Link>
      ))}
    </div>
  )
}
