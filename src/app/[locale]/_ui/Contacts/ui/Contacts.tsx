import { Icon } from '@/shared/ui/Icon/ui/Icon'
import { Link } from '@/shared/ui/Link'
import { margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'
import stylesMain from '../../../styles.module.css'

export const Contacts = () => {
  return (
    <section>
      <div className={stylesMain.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          Контакты
        </Typography>

        <div className={styles.line}>
          <span className={margins.mr_s}>
            <Icon icon="mail" />
          </span>
          <Link variant="h5" href="mailto:mamoshin_sem@mail.ru">
            mamoshin_sem@mail.ru
          </Link>
        </div>

        <div className={styles.line}>
          <span className={margins.mr_s}>
            <Icon icon="telegram" />
          </span>
          <Link variant="h5" href="https://t.me/senya90" target="_blank">
            @senya90
          </Link>
        </div>

        <div className={styles.line}>
          <span className={margins.mr_s}>
            <Icon icon="github" />
          </span>
          <Link variant="h5" href="https://github.com/senya90" target="_blank">
            github.com/senya90
          </Link>
        </div>
      </div>
    </section>
  )
}
