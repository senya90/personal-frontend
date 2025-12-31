import { useEffect, useRef, useState } from 'react'

import { throttle } from '@/shared/lib/throttle'

export const useSmartHide = () => {
  const [isHide, setIsHide] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY
      const SCROLL_TOP_BORDER = 100

      const isHide =
        currentScrollY > lastScrollY.current &&
        currentScrollY > SCROLL_TOP_BORDER

      setIsHide(isHide)
      lastScrollY.current = currentScrollY
    }, 100)

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isHide }
}
