import { useTranslations } from 'next-intl'

import { getRecentProjectsItems } from '@/entities/recent/lib/constants'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'

import { Locale } from '@/i18n/routing'

import styles from '../../../styles.module.css'

interface IProps {
  locale: Locale
}

export const RecentProjects = ({ locale }: IProps) => {
  const t = useTranslations('Recent')
  const projects = getRecentProjectsItems(locale)

  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          {t('title')}
        </Typography>

        {projects.map((project) => (
          <Card
            key={project.id}
            link={{
              href: project.href,
              target: '_blank',
            }}
            title={project.title}
            subtitle={project.shortDescription}
            footer={project.components.join(', ')}
            description={project.description}
            bottomOffset="m"
          />
        ))}
      </div>
    </section>
  )
}
