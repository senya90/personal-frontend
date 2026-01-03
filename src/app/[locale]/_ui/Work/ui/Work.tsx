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
    <section aria-labelledby="work-experience-heading" role="region">
      <div className={styles.section}>
        <Typography
          variant="h3"
          component="h2"
          bottomOffset="l"
          id="work-experience-heading"
        >
          {t('title')}
        </Typography>

        <Timeline
          items={workExperience}
          asLeft={(item) => item.date}
          renderRight={(item) => (
            <Card
              title={item.title}
              link={{ href: item.href, target: '_blank' }}
              subtitle={item.position}
              description={item.description}
              tags={item.stack}
              role="article"
            />
          )}
        />
      </div>
    </section>
  )
}
