import { Typography } from '@/shared/ui/Typography'
import styles from './styles.module.css'

interface IProps {
  title: string
  additional?: string | React.ReactNode
}

export const CardHeader = ({ title, additional }: IProps) => {
  const isCustom = additional && typeof additional !== 'string'

  return (
    <header className={styles.header}>
      <div>
        <Typography variant="subtitle1" component={'h2'}>
          {title}
        </Typography>
      </div>
      {isCustom && <div className={styles.additional}>{additional}</div>}
      {additional && !isCustom && (
        <div className={styles.additional}>
          <Typography variant="overline" color={'secondary'}>
            {additional}
          </Typography>
        </div>
      )}
    </header>
  )
}
