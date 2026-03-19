import { useEffect } from 'react'

export function useKeyDown(
  key: KeyboardEvent['key'],
  handler: () => void,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return

    const listener = (e: KeyboardEvent) => {
      if (e.key === key) handler()
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [key, handler, enabled])
}
