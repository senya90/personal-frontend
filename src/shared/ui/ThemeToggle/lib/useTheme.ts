'use client'

import { useTheme as useNextTheme } from 'next-themes'

import { THEME } from '../model/types'

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme()

  return {
    theme: (theme ?? THEME.SYSTEM) as THEME,
    resolvedTheme: resolvedTheme as THEME,
    setTheme,
  }
}
