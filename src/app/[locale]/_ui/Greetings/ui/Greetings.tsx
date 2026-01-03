import cn from 'classnames'
import { useTranslations } from 'next-intl'

import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'
import stylesPage from '../../../styles.module.css'

export const Greetings = () => {
  const t = useTranslations('Home')

  return (
    <section aria-labelledby="greetings-heading">
      <div className={cn(stylesPage.section, styles.sectionMain)}>
        <Typography id="greetings-heading" variant="h1">
          Senior Frontend Developer
        </Typography>
        <Typography
          variant="lead"
          role="doc-subtitle"
          aria-describedby="greetings-heading"
        >
          {t('greetings_desc')}
        </Typography>
      </div>

      <div
        className={styles.about}
        role="region"
        aria-labelledby="about-heading"
      >
        <div className={stylesPage.section}>
          <Typography
            variant="h4"
            bottomOffset="m"
            align="center"
            id="about-heading"
          >
            {t('about_me')}
          </Typography>
          <Typography variant="lead" bottomOffset="s" role="paragraph">
            {t('about_me_text.1')}
          </Typography>
          <Typography variant="lead" bottomOffset="s" role="paragraph">
            {t('about_me_text.2')}
          </Typography>
          <Typography variant="lead" bottomOffset="s" role="paragraph">
            {t('about_me_text.3')}
          </Typography>
          <Typography variant="lead" bottomOffset="s" role="paragraph">
            {t('about_me_text.4')}
          </Typography>
        </div>
      </div>
    </section>
  )
}
