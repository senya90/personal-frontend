import cn from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'

import { Typography } from '@/shared/ui/Typography'

import { usePathname } from '@/i18n/navigation'

import styles from './styles.module.css'

interface IProps {
  href: string
  children: ReactNode
}

export const NavLink = ({ href, children }: IProps) => {
  const pathname = usePathname()

  const isActive = ((): boolean => {
    if (href === '/') return pathname === '/' || pathname === ''

    return pathname === href || pathname.startsWith(`${href}/`)
  })()

  return (
    <Link
      href={href}
      className={cn(styles.link, {
        [styles.active]: isActive,
      })}
    >
      <Typography component="span" variant="overline">
        {children}
      </Typography>
    </Link>
  )
}
