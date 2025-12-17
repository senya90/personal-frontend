import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'

export const Contacts = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2">
          Контакты
        </Typography>

        <ul>
          <li>mamoshin_sem@mail.ru</li>
          <li>@senya90</li>
          <li>github.com/senya90</li>
        </ul>
      </div>
    </section>
  )
}
