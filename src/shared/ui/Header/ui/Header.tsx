'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useLayoutEffect, useState } from 'react'

import { useSmartHide } from '@/shared/ui/Header/lib/useSmartHide'
import { BurgerButton } from '@/shared/ui/Header/ui/ui/MobileMenu/ui/BurgerButton'
import { DropdownNavMenu } from '@/shared/ui/Header/ui/ui/MobileMenu/ui/DropdownNavMenu'
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { Link } from '@/shared/ui/Link'
import { Navigation } from '@/shared/ui/Navigation'
import { container, margins } from '@/shared/ui/styles'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

export const Header = () => {
  const t = useTranslations('Header')
  const { isHide } = useSmartHide()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1023)

      if (window.innerWidth > 1023) {
        setIsMenuOpen(false)
      }
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const handleMenuItemClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

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
            <ThemeToggle />
            <div className={margins.ml_s}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {isMobile && (
          <div className={styles.mobileMenuContainer}>
            <BurgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <DropdownNavMenu
              isOpen={isMenuOpen}
              onOverlayClick={() => setIsMenuOpen(false)}
              onItemClick={handleMenuItemClick}
            />
          </div>
        )}
      </div>
    </header>
  )
}
