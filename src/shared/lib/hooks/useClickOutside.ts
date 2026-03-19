import { useEffect, RefObject } from 'react'

export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return

    const listener = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) handler()
    }

    document.addEventListener('pointerdown', listener)

    return () => {
      document.removeEventListener('pointerdown', listener)
    }
  }, [ref, handler, enabled])
}
