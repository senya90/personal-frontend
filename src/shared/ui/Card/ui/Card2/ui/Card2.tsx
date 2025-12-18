import { Tag } from '@/shared/ui/Tag/ui/Tag'
import styles from './styles.module.css'
import { Typography } from '@/shared/ui/Typography'

interface IProps {
  title: string
  subtitle?: string
  description?: string | string[]
  tags?: string[]
}

export const Card2 = ({ title, subtitle, description, tags }: IProps) => {
  return (
    <div className={styles.content}>
      <Typography variant="h6" component="header" gutterBottom="xs">
        {title}
      </Typography>
      <Typography color="accent" gutterBottom="m">
        {subtitle}
      </Typography>
      {Array.isArray(description) ? (
        <>
          {description.map((d, idx) => (
            <Typography key={idx} color="secondary" gutterBottom="s">
              {d}
            </Typography>
          ))}
        </>
      ) : (
        <Typography color="secondary" gutterBottom="s">
          {description}
        </Typography>
      )}

      {tags && (
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <Tag tag={tag} key={idx} />
          ))}
        </div>
      )}
    </div>
  )
}
