import cn from 'classnames'
import Link from 'next/link'
import { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

import { Typography } from '@/shared/ui/Typography'

import { usePathname } from '@/i18n/navigation'

import styles from './styles.module.css'

interface IProps
  extends
    NextLinkProps,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof NextLinkProps | 'href'
    > {
  href: string
  children: ReactNode
}

export const NavLink = ({ href, children, ...rest }: IProps) => {
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
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      <Typography component="span" variant="overline">
        {children}
      </Typography>
    </Link>
  )
}
