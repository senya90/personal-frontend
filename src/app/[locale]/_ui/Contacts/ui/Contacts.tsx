import cn from 'classnames'
import { useTranslations } from 'next-intl'

import { flex, margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { SendEmail } from '@/features/send-email/ui/SendEmail'

import { ContactsList } from '@/app/[locale]/_ui/Contacts/ui/ContactsList'

import styles from './styles.module.css'
import stylesMain from '../../../styles.module.css'

export const Contacts = () => {
  const t = useTranslations('Contacts')

  return (
    <section
      className={styles.contacts}
      aria-labelledby="contacts-heading"
      role="region"
    >
      <div className={cn(stylesMain.section, flex.flex)}>
        <div className={flex.flex_1}>
          <Typography
            variant="h3"
            component="h2"
            bottomOffset="l"
            id="contacts-heading"
          >
            {t('title')}
          </Typography>

          <div
            className={margins.mb_xl}
            role="list"
            aria-label={t('contact_methods')}
          >
            <ContactsList />
          </div>
        </div>

        <div className={flex.flex_1}>
          <Typography variant="h3" component="h3" bottomOffset="m" align="left">
            Напиши мне
          </Typography>
          <SendEmail className={cn(flex.self_end)} variant="secondary" />
        </div>
      </div>
    </section>
  )
}
