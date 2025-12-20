import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'
import { Card } from '@/shared/ui/Card'

export const RecentProjects = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          Недавние проекты
        </Typography>

        <Card
          title="PRM (Partner Relationship Management) система"
          subtitle="Регистрация, документооборот, выдача кредитов"
          bottomOffset="m"
        />

        <Card
          title="Кредитный конвейер"
          subtitle="Заведение завки, интеграция со скорингом, сделка с клиентом"
          bottomOffset="m"
        />

        <Card title="Этот сайт :)" subtitle="mydomain.ru" bottomOffset="m" />
      </div>
    </section>
  )
}
