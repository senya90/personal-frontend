import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'
import { Icon } from '@/shared/ui/Icon/ui/Icon'
import { Link } from '@/shared/ui/Link'

export const Contacts = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          Контакты
        </Typography>

        <div>
          <Icon icon="sun" />
          <Link variant="lead" href="mailto:mamoshin_sem@mail.ru">
            mamoshin_sem@mail.ru
          </Link>
        </div>
        <div>
          <Icon icon="moon" />
          <Link variant="lead" href="https://t.me/senya90" target="_blank">
            @senya90
          </Link>
        </div>
        <div>
          <Icon icon="system" />
          <Link href="https://github.com/senya90" target="_blank">
            github.com/senya90
          </Link>
        </div>
      </div>
    </section>
  )
}
