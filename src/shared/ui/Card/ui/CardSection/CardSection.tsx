import { Typography } from '@/shared/ui/Typography'
import styles from './styles.module.css'
import { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

export const CardSection = ({ children }: IProps) => {
  if (!children) return null
  const isCustom = children && typeof children !== 'string'

  return (
    <section className={styles.section}>
      {isCustom && children}
      {children && !isCustom && <Typography>{children}</Typography>}
    </section>
  )
}
