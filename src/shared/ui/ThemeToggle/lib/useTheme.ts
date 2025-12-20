'use client'

import { useCallback, useEffect, useState } from 'react'

import { THEME } from '../model/types'

const isClient = typeof window !== 'undefined'

export function useTheme() {
  const [theme, setTheme] = useState<THEME>(() => {
    if (!isClient) return THEME.SYSTEM
    return (localStorage.getItem('theme') as THEME) ?? THEME.SYSTEM
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme === THEME.SYSTEM) {
      root.removeAttribute('data-theme')
      localStorage.removeItem('theme')
    } else {
      root.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const setAppTheme = useCallback((value: THEME) => {
    setTheme(value)
  }, [])

  return { theme, setTheme: setAppTheme }
}
