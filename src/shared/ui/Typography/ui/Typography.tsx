import React from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import {
  TypographyAlign,
  TypographyColor,
  TypographyUnderline,
  TypographyVariant,
} from '@/shared/ui/Typography/model/types'
import { variantForTagMapping } from '@/shared/ui/Typography/lib/utils'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: TypographyColor
  align?: TypographyAlign
  underline?: TypographyUnderline
  italic?: boolean
  strike?: boolean
  emphasis?: 'strong' | 'em' | 'code'
  component?: React.ElementType
  noWrap?: boolean
  gutterBottom?: boolean
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
  gutterBottom = false,
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
      [styles.gutterBottom]: gutterBottom,
    },
    className
  )

  return (
    <Component className={typographyClasses} style={style} {...props}>
      {children}
    </Component>
  )
}
