import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'
import { Timeline } from '@/shared/ui/Timeline'
import { workExperience } from '@/app/[locale]/_ui/Work/lib/constants'
import { Card } from '@/shared/ui/Card'

export const Work = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          Места работы
        </Typography>

        <Timeline
          items={workExperience}
          asLeft={(item) => item.date}
          renderRight={(item) => (
            <Card
              title={item.title}
              subtitle={item.position}
              description={item.description}
              tags={item.stack}
            />
          )}
        />
      </div>
    </section>
  )
}
