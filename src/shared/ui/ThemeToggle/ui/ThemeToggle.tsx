'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'
import { useClickOutside } from '../../../lib/hooks/useClickOutside'
import { useKeyDown } from '../../../lib/hooks/useKeyDown'
import { Icon } from '../../Icon'
import { useFavicon } from '../lib/useFavicon'
import { useTheme } from '../lib/useTheme'
import { getThemeOptions } from '../lib/utils'
import { THEME } from '../model/types'

interface IProps {
  onChange?: (theme: THEME) => void
}

export function ThemeToggle({ onChange }: IProps) {
  const t = useTranslations('Header')

  const THEME_OPTIONS = getThemeOptions({
    light: t('theme.light'),
    dark: t('theme.dark'),
    system: t('theme.system'),
    pyaterochka: t('theme.pyaterochka'),
    ubuntu: 'Ubuntu',
  })

  const [isOpen, setIsOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useFavicon(resolvedTheme)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const handleClose = useCallback(() => setIsOpen(false), [])
  useClickOutside(wrapperRef, handleClose, isOpen)
  useKeyDown('Escape', handleClose, isOpen)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={styles.trigger}>
        <Icon icon="system" size="s" fill="var(--color_system)" />
      </button>
    )
  }

  const handleSelect = (value: THEME) => {
    if (value !== theme) {
      setTheme(value)
      onChange?.(value)
    }
    setIsOpen(false)
  }

  const activeOption =
    THEME_OPTIONS.find((o) => o.value === resolvedTheme) ??
    THEME_OPTIONS.find((o) => o.value === THEME.SYSTEM)!

  return (
    <div ref={wrapperRef} className={styles.themeToggle}>
      {/* todo: переделать кнопку на UI-китовскую */}
      <button
        className={cn(styles.trigger, { [styles.triggerOpen]: isOpen })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon icon={activeOption?.icon} size="s" fill={activeOption?.color} />
      </button>

      {isOpen && (
        <ul
          className={styles.dropdown}
          role="listbox"
          aria-label="Theme options"
        >
          {THEME_OPTIONS.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={theme === option.value}
              className={cn(styles.option, {
                [styles.optionActive]: theme === option.value,
              })}
              onClick={() => handleSelect(option.value)}
            >
              <Icon
                icon={option.icon}
                size="s"
                fill={option.color}
                className={styles.optionIcon}
              />
              <span className={styles.optionLabel}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
