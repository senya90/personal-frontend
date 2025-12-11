'use client'

import { Icon } from '@/shared/ui/Icon/ui/Icon'
import { useTheme } from '../lib/useTheme'
import { THEME } from '../model/types'
import styles from './styles.module.css'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className={styles.themeToggle}>
      <Icon
        icon="sun"
        size="s"
        fill="var(--color_sun)"
        onClick={() => setTheme(THEME.LIGHT)}
      />

      <Icon
        icon="moon"
        size="s"
        fill={'var(--color_moon)'}
        onClick={() => setTheme(THEME.DARK)}
      />

      <Icon
        icon="system"
        size="s"
        fill={'var(--color_system)'}
        onClick={() => setTheme(THEME.SYSTEM)}
      />
    </div>
  )
}
