import { Education } from '@/entity/education/model/Education'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { useTranslations } from 'next-intl'

interface IProps {
  education: Education
}

export const EducationCard = ({ education }: IProps) => {
  const t = useTranslations('Education')
  const { degree, description, field, finalWork, id, period, title } = education

  return (
    <Card key={id}>
      <Card.Header title={title} additional={degree} />

      <Card.Section>
        <Typography align="right" variant="light2" color="secondary">
          {t('specialization')}: {field.specialization}
        </Typography>

        {education.field.faculty && (
          <Typography align="right" variant="light2" color="secondary">
            {t('faculty')}: {field.faculty}
          </Typography>
        )}
      </Card.Section>

      <Card.Section>
        <Typography>{description}</Typography>
      </Card.Section>

      <Card.Section>
        <Typography>Диплом: {finalWork.title}</Typography>
      </Card.Section>

      <Card.Section>
        {Array.isArray(finalWork.description) &&
          finalWork.description.map((desc, idx) => (
            <Typography key={idx} gutterBottom italic variant="light">
              {desc}
            </Typography>
          ))}
        <Typography>
          {typeof finalWork.description === 'string' && finalWork.description}
        </Typography>
      </Card.Section>

      <Card.Footer withDivider={false}>
        <time dateTime={period.from}>
          <Typography variant="caption" color="secondary">
            {period.from}
          </Typography>
        </time>
        <time dateTime={period.to}>
          <Typography variant="caption" color="secondary">
            -{period.to}
          </Typography>
        </time>
      </Card.Footer>
    </Card>
  )
}
