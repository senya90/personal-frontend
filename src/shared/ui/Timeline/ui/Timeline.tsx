import { ReactNode } from 'react'

import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

interface IProps<T extends Record<string, unknown>> {
  items: T[]
  asLeft: (item: T) => ReactNode
  renderRight?: (item: T) => ReactNode
}

export const Timeline = <T extends Record<string, unknown>>({
  items = [],
  asLeft,
  renderRight,
}: IProps<T>) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.leftSide}>
            <div className={styles.leftText}>
              <Typography align="right" variant="light2" color="secondary">
                {asLeft(item)}
              </Typography>
            </div>
          </div>

          <div className={styles.centerLine}>
            <div className={styles.line} />
            <div className={styles.bullet} />
          </div>

          <div className={styles.rightSide}>{renderRight?.(item)}</div>
        </div>
      ))}
    </div>
  )
}
