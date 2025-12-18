import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'

export const Experience = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" gutterBottom="l">
          Мой опыт
        </Typography>

        <div className={styles.textContainer}>
          <Typography variant="lead" gutterBottom="s">
            Специализируюсь на экосистеме React и построении современных
            приложений.
          </Typography>
          <Typography variant="lead" gutterBottom="s">
            Имею опыт разработки корпоративных систем для крупного банка:
            создавал интерфейсы внутренних систем со сложной ролевой моделью,
            которые используют сотрудники для работы с клиентами, партнерами и
            документами. Работал над архитектурой, git-flow проекта, стилем и
            качеством кода.
          </Typography>
          <Typography variant="lead" gutterBottom="s">
            Руководил frontend-разработкой на проекте: проводил код-ревью,
            собеседования, занимался менторингом junior-разработчиков, вёл
            документацию в Confluence.
          </Typography>
          <Typography variant="lead" gutterBottom="s">
            Есть опыт создания приложений для SmartTV и CMS для настройки
            трансляций Digital Signage.
          </Typography>
        </div>
      </div>
    </section>
  )
}
