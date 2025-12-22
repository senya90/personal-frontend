import cn from 'classnames'

import { flex } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { SendEmail } from '@/features/send-email/ui/SendEmail'

import styles from './styles.module.css'
import stylesPage from '../../../styles.module.css'

export const Greetings = () => {
  return (
    <section>
      <div className={cn(stylesPage.section, styles.sectionMain)}>
        <div>
          <Typography variant="h1">Senior Frontend Developer</Typography>

          <Typography variant="lead" bottomOffset="xl">
            Более 9&nbsp;лет в&nbsp;web&#8209;разработке. Создаю масштабируемые
            Entrerprise приложения
          </Typography>
        </div>

        <div className={styles.textContainer}>
          <SendEmail className={cn(flex.self_end, flex.flex_1)} />
          <div className={cn(styles.textContainerInner, flex.flex_1)}>
            <Typography variant="h5" bottomOffset="xs" align="justify">
              Обо мне
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              Специализируюсь на экосистеме React и построении современных
              приложений.
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              Имею опыт разработки корпоративных систем для крупного банка:
              создавал интерфейсы внутренних систем со сложной ролевой моделью,
              которые используют сотрудники для работы с клиентами, партнерами и
              документами. Работал над архитектурой, git-flow проекта, стилем и
              качеством кода.
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              Руководил frontend-разработкой на проекте: проводил код-ревью,
              собеседования, занимался менторингом junior-разработчиков, вёл
              документацию в Confluence.
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              Есть опыт создания приложений для SmartTV и CMS для настройки
              трансляций Digital Signage.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}
