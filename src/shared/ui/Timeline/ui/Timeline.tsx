import styles from './styles.module.css'
import { Card2 } from '@/shared/ui/Card/ui/Card2/ui/Card2'
import { Typography } from '@/shared/ui/Typography'

type TimerLineItem = {
  date: string
  title: string
  subtitle: string
  description: string | string[]
  tags: string[]
}

interface IProps {
  items: TimerLineItem[]
}

export const Timeline = ({ items = [] }: IProps) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.leftSide}>
            <div className={styles.date}>
              <Typography align="right" variant="light2" color="secondary">
                {item.date}
              </Typography>
            </div>
          </div>

          <div className={styles.centerLine}>
            <div className={styles.line} />
            <div className={styles.bullet} />
          </div>

          <div className={styles.rightSide}>
            <Card2
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              tags={item.tags}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
