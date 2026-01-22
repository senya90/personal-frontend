import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { Navigation } from '@/shared/ui/Navigation'
import { margins } from '@/shared/ui/styles'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'

import styles from './styles.module.css'

interface IProps {
  isOpen: boolean
  onOverlayClick?: () => void
  onItemClick?: () => void
}

export const DropdownNavMenu = ({
  isOpen,
  onOverlayClick,
  onItemClick,
}: IProps) => {
  const t = useTranslations('Header')

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdownMenu}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.dropdownContent}>
              <Navigation
                className={styles.mobileNavigation}
                onLinkClick={onItemClick}
              />

              <div
                className={styles.mobileControls}
                aria-label={t('theme_lang')}
              >
                <ThemeToggle />
                <div className={margins.ml_m}>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className={styles.menuOverlay} onClick={onOverlayClick} />
      )}
    </>
  )
}
