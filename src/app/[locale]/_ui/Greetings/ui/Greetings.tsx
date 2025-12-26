import cn from 'classnames'
import { useTranslations } from 'next-intl'

import { flex } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { SendEmail } from '@/features/send-email/ui/SendEmail'

import styles from './styles.module.css'
import stylesPage from '../../../styles.module.css'

export const Greetings = () => {
  const t = useTranslations('Home')

  return (
    <section>
      <div className={cn(stylesPage.section, styles.sectionMain)}>
        <div>
          <Typography variant="h1">Senior Frontend Developer</Typography>

          <Typography variant="lead" bottomOffset="xl">
            {t('greetings_desc')}
          </Typography>
        </div>

        <div className={styles.textContainer}>
          <div className={cn(flex.flex_1, flex.flex, flex.flex_column)}>
            <Typography variant="h5" bottomOffset="s" align="justify">
              {t('write_to_me.title')}
            </Typography>

            <SendEmail className={cn(flex.self_end)} />
          </div>

          <div className={cn(styles.textContainerInner, flex.flex_1)}>
            <Typography variant="h5" bottomOffset="xs" align="justify">
              {t('about_me')}
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              {t('about_me_text.1')}
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              {t('about_me_text.2')}
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              {t('about_me_text.3')}
            </Typography>
            <Typography variant="body2" bottomOffset="xs" align="justify">
              {t('about_me_text.4')}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}
