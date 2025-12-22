import Image, { StaticImageData } from 'next/image'

import { margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

interface IProps {
  title: string
  description?: string
  icon?: StaticImageData
}

export const StackCard = ({ title, description, icon }: IProps) => {
  return (
    <div className={styles.stackCard}>
      {icon && (
        <Image src={icon} alt="js logo" height={50} className={margins.mb_s} />
      )}
      <Typography>{title}</Typography>
      {description && (
        <Typography color="secondary" variant="light2" align="center">
          {description}
        </Typography>
      )}
    </div>
  )
}
