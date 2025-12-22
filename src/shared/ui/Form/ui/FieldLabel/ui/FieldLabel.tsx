import { ReactNode } from 'react'

import styles from './styles.module.css'

interface IProps {
  forId: string
  children?: ReactNode
}

export const FieldLabel = ({ forId, children }: IProps) => {
  return (
    <label className={styles.label} htmlFor={forId}>
      {children}
    </label>
  )
}
