import { BottomOffset } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'
import {
  TypographyColor,
  TypographyUnderline,
  TypographyVariant,
} from '@/shared/ui/Typography/model/types'
import NextLink from 'next/link'
import { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

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
    <NextLink {...rest}>
      <Typography {...typography}>{children}</Typography>
    </NextLink>
  )
}
