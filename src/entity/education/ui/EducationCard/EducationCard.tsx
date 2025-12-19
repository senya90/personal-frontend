import { Education } from '@/entity/education/model/Education'
import { Card } from '@/shared/ui/Card'
import { BottomOffset } from '@/shared/ui/styles'
import { useTranslations } from 'next-intl'

interface IProps {
  education: Education
  bottomOffset?: BottomOffset
}

export const EducationCard = ({ education, ...rest }: IProps) => {
  const t = useTranslations('Education')
  const { degree, description, field, finalWork, period, title } = education

  return (
    <Card
      title={title}
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
