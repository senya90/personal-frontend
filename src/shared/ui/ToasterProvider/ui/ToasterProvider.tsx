'use client'
import { Toaster } from 'sonner'

import { THEME, useTheme } from '@/shared/ui/ThemeToggle'

import styles from './styles.module.css'

export const ToasterProvider = () => {
  const { theme } = useTheme()

  const convertTheme = (theme: THEME): 'dark' | 'light' | 'system' => {
    if (theme === THEME.SYSTEM) return 'system'

    const darkThemes: THEME[] = [THEME.DARK, THEME.UBUNTU] as const
    if (darkThemes.includes(theme)) return 'dark'

    return 'light'
  }

  const targetTheme = convertTheme(theme)

  return (
    <Toaster
      position="top-right"
      richColors
      theme={targetTheme}
      toastOptions={{
        className: styles.toast,
      }}
    />
  )
}
