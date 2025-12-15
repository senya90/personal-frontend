import { educationItems } from '@/entity/education/lib/constants'
import { EducationCard } from '@/entity/education/ui/EducationCard/EducationCard'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

interface IProps {
  params: Promise<{ locale: string }>
}

export default function Education({ params }: IProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('Education')

  return (
    <main className={container.main}>
      <section className={container.section}>
        <Typography variant="h1">{t('title')}</Typography>
      </section>

      <div>
        {educationItems.map((item) => (
          <EducationCard education={item} key={item.id} />
        ))}
      </div>
    </main>
  )
}
