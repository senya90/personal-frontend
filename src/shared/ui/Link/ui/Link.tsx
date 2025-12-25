import cn from 'classnames'
import NextLink from 'next/link'
import { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

import { BottomOffset } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'
import {
  TypographyColor,
  TypographyUnderline,
  TypographyVariant,
} from '@/shared/ui/Typography/model/types'

import styles from './styles.module.css'

interface IProps
  extends
    NextLinkProps,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof NextLinkProps | 'href'
    > {
  children: ReactNode
  className?: string
  variant?: TypographyVariant
  color?: TypographyColor
  underline?: TypographyUnderline
  italic?: boolean
  strike?: boolean
  emphasis?: 'strong' | 'em' | 'code'
  component?: React.ElementType
  bottomOffset?: BottomOffset
  permanent?: boolean
}

export const Link = ({
  children,
  variant,
  color = 'accent',
  underline,
  italic,
  strike,
  emphasis,
  component = 'span',
  bottomOffset,
  permanent = false,
  className,
  ...rest
}: IProps) => {
  const typography = {
    variant,
    color,
    underline,
    italic,
    strike,
    emphasis,
    component,
    bottomOffset,
  }
  return (
    <Typography {...typography}>
      <NextLink
        {...rest}
        className={cn(className, { [styles.permanent]: permanent })}
      >
        {children}
      </NextLink>
    </Typography>
  )
}
