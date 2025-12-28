import { useTranslations } from 'next-intl'

import { Typography } from '@/shared/ui/Typography'

import { ContactsList } from '@/app/[locale]/_ui/Contacts/ui/ContactsList'

import stylesMain from '../../../styles.module.css'

export const Contacts = () => {
  const t = useTranslations('Contacts')

  return (
    <section>
      <div className={stylesMain.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          {t('title')}
        </Typography>

        <ContactsList />
      </div>
    </section>
  )
}
