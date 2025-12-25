import { useTranslations } from 'next-intl'

import { getWorkItems } from '@/entities/workExperience/lib/constants'
import { Card } from '@/shared/ui/Card'
import { Timeline } from '@/shared/ui/Timeline'
import { Typography } from '@/shared/ui/Typography'

import { Locale } from '@/i18n/routing'

import styles from '../../../styles.module.css'

interface IProps {
  locale: Locale
}

export const Work = ({ locale }: IProps) => {
  const t = useTranslations('Work_Experience')

  const workExperience = getWorkItems(locale as Locale)

  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          {t('title')}
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
