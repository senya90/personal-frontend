'use client'

import cn from 'classnames'

import { Icon } from '@/shared/ui/Icon/ui/Icon'

import styles from './styles.module.css'
import { useTheme } from '../lib/useTheme'
import { THEME } from '../model/types'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  const changeTheme = (newTheme: THEME) => {
    setTheme(newTheme)
  }

  return (
    <div className={styles.themeToggle}>
      <Icon
        className={cn(styles.item, styles.sun)}
        icon="sun"
        size="s"
        fill="var(--color_sun)"
        onClick={() => {
          changeTheme(THEME.LIGHT)
        }}
      />

      <Icon
        className={cn(styles.item, styles.moon)}
        icon="moon"
        size="s"
        fill={'var(--color_moon)'}
        onClick={() => changeTheme(THEME.DARK)}
      />

      <Icon
        className={cn(styles.item)}
        icon="system"
        size="s"
        fill={'var(--color_system)'}
        onClick={() => changeTheme(THEME.SYSTEM)}
      />
    </div>
  )
}
