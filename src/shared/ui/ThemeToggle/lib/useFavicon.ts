'use client'

import { useEffect } from 'react'

import { THEME } from '../model/types'

const FAVICONS: Record<THEME, string> = {
  [THEME.LIGHT]: '/favicon.ico',
  [THEME.DARK]: '/favicon-dark.ico',
  [THEME.SYSTEM]: '/favicon.ico',
  [THEME.PYATEROCHKA]: '/favicon.ico',
  [THEME.UBUNTU]: '/favicon-dark.ico',
}

export function useFavicon(theme: THEME) {
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>("link[rel='icon']")
    if (!link) return

    const resolvedTheme =
      theme === THEME.SYSTEM
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? THEME.DARK
          : THEME.LIGHT
        : theme

    link.href = FAVICONS[resolvedTheme]
  }, [theme])
}
