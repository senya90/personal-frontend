'use client'

import cn from 'classnames'

import { Icon } from '@/shared/ui/Icon/ui/Icon'

import styles from './styles.module.css'
import { useTheme } from '../lib/useTheme'
import { THEME } from '../model/types'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className={styles.themeToggle}>
      <Icon
        className={cn(styles.item, styles.sun)}
        icon="sun"
        size="s"
        fill="var(--color_sun)"
        onClick={() => setTheme(THEME.LIGHT)}
      />

      <Icon
        className={cn(styles.item, styles.moon)}
        icon="moon"
        size="s"
        fill={'var(--color_moon)'}
        onClick={() => setTheme(THEME.DARK)}
      />

      <Icon
        className={cn(styles.item)}
        icon="system"
        size="s"
        fill={'var(--color_system)'}
        onClick={() => setTheme(THEME.SYSTEM)}
      />
    </div>
  )
}
