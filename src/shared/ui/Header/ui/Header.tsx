'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'

import { useSmartHide } from '@/shared/ui/Header/lib/useSmartHide'
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { Link } from '@/shared/ui/Link'
import { Navigation } from '@/shared/ui/Navigation'
import { container, margins } from '@/shared/ui/styles'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

export const Header = () => {
  const { isHide } = useSmartHide()
  const t = useTranslations('Header')

  return (
    <header
      className={cn(styles.header, { [styles.hidden]: isHide })}
      role="banner"
      aria-label={t('title')}
      aria-hidden={isHide}
    >
      <div className={cn(container.main, styles.container)}>
        <Link href="/" linkClassName={styles.logo} aria-current="page">
          <Typography variant="lead">SEMOSHIN</Typography>
        </Link>

        <div className={styles.rightBlock}>
          <Navigation />
          <div className={styles.rightCtrls} aria-label={t('theme_lang')}>
            <div className={margins.mb_xs}>
              <ThemeToggle />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
