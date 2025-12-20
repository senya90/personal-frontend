import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

interface IProps {
  tag: string
}

export const Tag = ({ tag }: IProps) => {
  return (
    <span className={styles.tag}>
      <Typography color="secondary" variant="body2">
        {tag}
      </Typography>
    </span>
  )
}
