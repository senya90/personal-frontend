import { Card } from '@/shared/ui/Card'
import { Timeline } from '@/shared/ui/Timeline'
import { Typography } from '@/shared/ui/Typography'

import { workExperience } from '@/app/[locale]/_ui/Work/lib/constants'

import styles from '../../../styles.module.css'

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
