import cn from 'classnames'
import { useTranslations } from 'next-intl'

import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'
import stylesPage from '../../../styles.module.css'

export const Greetings = () => {
  const t = useTranslations('Home')

  return (
    <section>
      <div className={cn(stylesPage.section, styles.sectionMain)}>
        <Typography variant="h1">Senior Frontend Developer</Typography>
        <Typography variant="lead">{t('greetings_desc')}</Typography>
      </div>

      <div className={styles.about}>
        <div className={stylesPage.section}>
          <Typography variant="h4" bottomOffset="m" align="center">
            {t('about_me')}
          </Typography>
          <Typography variant="lead" bottomOffset="s">
            {t('about_me_text.1')}
          </Typography>
          <Typography variant="lead" bottomOffset="s">
            {t('about_me_text.2')}
          </Typography>
          <Typography variant="lead" bottomOffset="s">
            {t('about_me_text.3')}
          </Typography>
          <Typography variant="lead" bottomOffset="s">
            {t('about_me_text.4')}
          </Typography>
        </div>
      </div>
    </section>
  )
}
