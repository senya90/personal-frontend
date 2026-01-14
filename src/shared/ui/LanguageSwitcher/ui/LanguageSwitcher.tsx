'use client'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/dropdown'
import cn from 'classnames'
import { useLocale, useTranslations } from 'next-intl'

import { Icon } from '@/shared/ui/Icon/ui/Icon'
import { constantsButtons } from '@/shared/ui/LanguageSwitcher/lib/constants'
import { container } from '@/shared/ui/styles'

import { usePathname, Link } from '@/i18n/navigation'
import { Locale } from '@/i18n/routing'

import styles from './styles.module.css'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const t = useTranslations('Header')

  return (
    <div className={styles.wrapper} aria-label={t('switch_language')}>
      <Dropdown placement="bottom-end">
        <DropdownTrigger className={styles.trigger}>
          <Icon icon="languages" size="s" className={container.pointer} />
        </DropdownTrigger>
        <DropdownMenu
          className={styles.menu}
          variant="solid"
          aria-label="Languages"
        >
          <>
            {constantsButtons.map((l) => (
              <DropdownItem key={l.locale}>
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
              </DropdownItem>
            ))}
          </>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
