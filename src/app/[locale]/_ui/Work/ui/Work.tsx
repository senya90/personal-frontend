import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'

export const Work = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2">
          Места работы
        </Typography>

        <ul>
          <li>ОТП Банк</li>
          <li>Smartplayer</li>
          <li>Dial web / freelance</li>
          <li>Solution web</li>
        </ul>
      </div>
    </section>
  )
}
