import { motion, Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

import styles from './styles.module.css'

interface IProps {
  isOpen: boolean
  onClick?: () => void
}

export const BurgerButton = ({ isOpen, onClick }: IProps) => {
  const t = useTranslations('Header')

  const topLineVariants: Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 4 },
  }

  const middleLineVariants: Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants: Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  }

  return (
    <button
      onClick={onClick}
      className={styles.burgerButton}
      aria-label={isOpen ? t('close_menu') : t('open_menu')}
      aria-expanded={isOpen}
    >
      <motion.div
        className={styles.burgerLine}
        variants={topLineVariants}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{
          duration: 0.05,
        }}
      />
      <motion.div
        className={styles.burgerLine}
        variants={middleLineVariants}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{
          duration: 0.05,
        }}
      />
      <motion.div
        className={styles.burgerLine}
        variants={bottomLineVariants}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{
          duration: 0.05,
        }}
      />
    </button>
  )
}
