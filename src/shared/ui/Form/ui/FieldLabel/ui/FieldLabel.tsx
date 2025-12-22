import cn from 'classnames'
import { ReactNode } from 'react'

import { IFieldAlertingProps } from '@/shared/ui/Form/ui/FieldAlerting'

import styles from './styles.module.css'

interface IProps extends IFieldAlertingProps {
  forId: string
  children?: ReactNode
}

export const FieldLabel = ({ forId, children, error, warning }: IProps) => {
  const actualStatus = error ? 'error' : warning ? 'warning' : ''

  return (
    <label className={cn(styles.label, styles[actualStatus])} htmlFor={forId}>
      {children}
    </label>
  )
}
