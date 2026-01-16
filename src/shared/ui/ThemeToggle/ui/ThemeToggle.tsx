'use client'

import cn from 'classnames'

import { Icon } from '@/shared/ui/Icon/ui/Icon'

import styles from './styles.module.css'
import { useTheme } from '../lib/useTheme'
import { THEME } from '../model/types'

interface IProps {
  onChanged?: (theme: THEME) => void
}

export function ThemeToggle({ onChanged }: IProps) {
  const { setTheme } = useTheme()

  const handler = (theme: THEME) => {
    setTheme(theme)
    onChanged?.(theme)
  }

  return (
    <div className={styles.themeToggle}>
      <Icon
        className={cn(styles.item, styles.sun)}
        icon="sun"
        size="s"
        fill="var(--color_sun)"
        onClick={() => {
          handler(THEME.LIGHT)
        }}
      />

      <Icon
        className={cn(styles.item, styles.moon)}
        icon="moon"
        size="s"
        fill={'var(--color_moon)'}
        onClick={() => handler(THEME.DARK)}
      />

      <Icon
        className={cn(styles.item)}
        icon="system"
        size="s"
        fill={'var(--color_system)'}
        onClick={() => handler(THEME.SYSTEM)}
      />
    </div>
  )
}
