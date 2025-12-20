import cn from 'classnames'
import React from 'react'

import { BottomOffset, calcBottomOffset } from '@/shared/ui/styles'
import { variantForTagMapping } from '@/shared/ui/Typography/lib/utils'
import {
  TypographyAlign,
  TypographyColor,
  TypographyUnderline,
  TypographyVariant,
} from '@/shared/ui/Typography/model/types'

import styles from './styles.module.css'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: TypographyColor
  align?: TypographyAlign
  underline?: TypographyUnderline
  italic?: boolean
  strike?: boolean
  emphasis?: 'strong' | 'em' | 'code'
  component?: React.ElementType
  noWrap?: boolean
  bottomOffset?: BottomOffset
  children: React.ReactNode
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  align = 'left',
  italic = false,
  underline = 'none',
  strike = false,
  emphasis,
  component,
  noWrap = false,
  bottomOffset,
  children,
  className,
  style,
  ...props
}) => {
  let Component: React.ElementType

  if (emphasis === 'strong') {
    Component = 'strong'
  } else if (emphasis === 'em') {
    Component = 'em'
  } else if (emphasis === 'code') {
    Component = 'code'
  } else {
    Component = component || variantForTagMapping[variant]
  }

  const typographyClasses = cn(
    styles.root,
    styles[variant],
    styles[color],
    styles[align],
    {
      [styles.italic]: italic && emphasis !== 'em',
      [styles.underline]: underline === 'underline',
      [styles.underlineDashed]: underline === 'dashed',
      [styles.underlineHover]: underline === 'hover',
      [styles.strike]: strike,
      [styles.strong]: emphasis === 'strong',
      [styles.em]: emphasis === 'em',
      [styles.code]: emphasis === 'code',
      [styles.noWrap]: noWrap,
      [calcBottomOffset(bottomOffset)]: bottomOffset,
    },
    className
  )

  return (
    <Component className={typographyClasses} style={style} {...props}>
      {children}
    </Component>
  )
}
