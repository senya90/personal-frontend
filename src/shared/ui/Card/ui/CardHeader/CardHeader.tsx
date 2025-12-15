import { Typography } from '@/shared/ui/Typography'
import styles from './styles.module.css'
import { ReactNode } from 'react'
import cn from 'classnames'

interface IProps {
  title: string
  additional?: ReactNode
  withDivider?: boolean
}

export const CardHeader = ({
  title,
  additional,
  withDivider = true,
}: IProps) => {
  const isCustom = additional && typeof additional !== 'string'

  return (
    <header
      className={cn(styles.header, {
        [styles.withDivider]: withDivider,
      })}
    >
      <Typography variant="subtitle1" component={'h2'}>
        {title}
      </Typography>

      {isCustom && <div className={styles.additional}>{additional}</div>}
      {additional && !isCustom && (
        <div className={styles.additional}>
          <Typography variant="overline" color={'secondary'} align="right">
            {additional}
          </Typography>
        </div>
      )}
    </header>
  )
}
