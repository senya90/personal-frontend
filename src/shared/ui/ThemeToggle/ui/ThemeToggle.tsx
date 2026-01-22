'use client'

import cn from 'classnames'

import { Icon } from '@/shared/ui/Icon/ui/Icon'

import styles from './styles.module.css'
import { useTheme } from '../lib/useTheme'
import { THEME } from '../model/types'

interface IProps {
  onChange?: (theme: THEME) => void
}

export function ThemeToggle({ onChange }: IProps) {
  const { theme, setTheme } = useTheme()

  const changeTheme = (newTheme: THEME) => {
    if (newTheme !== theme) {
      setTheme(newTheme)
      onChange?.(theme)
    }
  }

  return (
    <div className={styles.themeToggle}>
      <Icon
        className={cn(styles.item, styles.sun, {
          [styles.active]: theme === THEME.LIGHT,
        })}
        icon="sun"
        size="s"
        fill="var(--color_sun)"
        onClick={() => {
          changeTheme(THEME.LIGHT)
        }}
      />

      <Icon
        className={cn(styles.item, styles.moon, {
          [styles.active]: theme === THEME.DARK,
        })}
        icon="moon"
        size="s"
        fill={'var(--color_moon)'}
        onClick={() => changeTheme(THEME.DARK)}
      />

      <Icon
        className={cn(styles.item, {
          [styles.active]: theme === THEME.SYSTEM,
        })}
        icon="system"
        size="s"
        fill={'var(--color_system)'}
        onClick={() => changeTheme(THEME.SYSTEM)}
      />
    </div>
  )
}
