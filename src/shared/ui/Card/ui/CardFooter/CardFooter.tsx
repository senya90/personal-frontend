import { Typography } from '@/shared/ui/Typography'
import styles from './styles.module.css'
import { ReactNode } from 'react'
import cn from 'classnames'

interface IProps {
  children?: ReactNode
  withDivider?: boolean
}

export const CardFooter = ({ children, withDivider = true }: IProps) => {
  if (!children) return null
  const isCustom = typeof children !== 'string'

  return (
    <footer
      className={cn(styles.footer, {
        [styles.withDivider]: withDivider,
      })}
    >
      {isCustom ? (
        children
      ) : (
        <Typography variant="caption" color="secondary">
          {children}
        </Typography>
      )}
    </footer>
  )
}
