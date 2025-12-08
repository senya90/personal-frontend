'use client'

import { useTheme } from '../lib/useTheme'
import { THEME } from '../model/types'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button onClick={() => setTheme(THEME.LIGHT)}>☀️</button>
      <button onClick={() => setTheme(THEME.DARK)}>🌙</button>
      <button onClick={() => setTheme(THEME.SYSTEM)}>🖥️</button>
    </div>
  )
}
