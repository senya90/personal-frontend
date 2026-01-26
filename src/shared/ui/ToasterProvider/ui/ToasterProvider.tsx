'use client'
import { Toaster } from 'sonner'

import { useTheme } from '@/shared/ui/ThemeToggle'

import styles from './styles.module.css'

export const ToasterProvider = () => {
  const { theme } = useTheme()

  return (
    <Toaster
      position="top-right"
      richColors
      theme={theme}
      toastOptions={{
        className: styles.toast,
      }}
    />
  )
}
