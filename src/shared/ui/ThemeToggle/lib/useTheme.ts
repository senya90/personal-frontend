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
    const setFavicon = (theme: THEME) => {
      const link = document.querySelector<HTMLLinkElement>("link[rel='icon']")
      if (!link) return
      link.href = theme === 'dark' ? '/favicon-dark.ico' : '/favicon.ico'
    }

    const root = document.documentElement

    setFavicon(theme)
    if (theme === THEME.SYSTEM) {
      root.removeAttribute('data-theme')
      localStorage.removeItem('theme')
      return
    }

    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const setAppTheme = useCallback((value: THEME) => {
    setTheme(value)
  }, [])

  return { theme, setTheme: setAppTheme }
}
