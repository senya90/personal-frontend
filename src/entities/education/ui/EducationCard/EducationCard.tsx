import { useTranslations } from 'next-intl'

import { Education } from '@/entities/education/model/Education'
import { Card } from '@/shared/ui/Card'
import { BottomOffset } from '@/shared/ui/styles'

interface IProps extends React.HTMLAttributes<HTMLElement> {
  education: Education
  bottomOffset?: BottomOffset
}

export const EducationCard = ({ education, ...rest }: IProps) => {
  const t = useTranslations('Education')
  const { degree, description, field, finalWork, period, title, href } =
    education

  return (
    <Card
      title={title}
      link={{
        href,
        target: '_blank',
      }}
      subtitle={degree}
      footnote={[
        `${t('specialization')}: ${field.specialization}`,
        `${t('faculty')}: ${field.faculty}`,
      ]}
      description={[description, finalWork.title]}
      footer={`${period.from}-${period.to}`}
      {...rest}
    />
  )
}
