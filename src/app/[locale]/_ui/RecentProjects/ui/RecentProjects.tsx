import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'

export const RecentProjects = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2">
          Недавние проекты
        </Typography>

        <ul>
          <li>PRM система</li>
          <li>Кредитный конвейер</li>
          <li>Этот сайт</li>
        </ul>
      </div>
    </section>
  )
}
