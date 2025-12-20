import cn from 'classnames'
import { ReactNode } from 'react'

import { BottomOffset, calcBottomOffset } from '@/shared/ui/styles'
import { Tag } from '@/shared/ui/Tag/ui/Tag'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

interface IProps {
  title: string
  subtitle?: string
  footnote?: string | string[]
  description?: string | string[]
  tags?: string[]
  footer?: ReactNode
  bottomOffset?: BottomOffset
}

export const Card = ({
  title,
  subtitle,
  footnote,
  description,
  tags,
  footer,
  bottomOffset,
}: IProps) => {
  return (
    <div
      className={cn(styles.content, {
        [calcBottomOffset(bottomOffset)]: bottomOffset,
      })}
    >
      <header className={styles.header}>
        <Typography variant="h6" component="p" bottomOffset="xs">
          {title}
        </Typography>
        <Typography
          color="accent"
          bottomOffset={!footnote && !description ? undefined : 'm'}
        >
          {subtitle}
        </Typography>

        {footnote && (
          <div className={styles.footnote}>
            {Array.isArray(footnote) ? (
              <>
                {footnote.map((note, idx) => (
                  <Typography
                    align="right"
                    key={idx}
                    color="secondary"
                    variant="light2"
                  >
                    {note}
                  </Typography>
                ))}
              </>
            ) : (
              <Typography align="right" color="secondary" variant="light2">
                {footnote}
              </Typography>
            )}
          </div>
        )}
      </header>

      {description && (
        <>
          {Array.isArray(description) ? (
            <>
              {description.map((d, idx) => (
                <Typography key={idx} color="secondary" bottomOffset="s">
                  {d}
                </Typography>
              ))}
            </>
          ) : (
            <Typography color="secondary" bottomOffset="s">
              {description}
            </Typography>
          )}
        </>
      )}

      {tags && (
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <Tag tag={tag} key={idx} />
          ))}
        </div>
      )}

      {footer && (
        <footer className={styles.footer}>
          {typeof footer === 'string' ? (
            <Typography color="secondary" variant="light2">
              {footer}
            </Typography>
          ) : (
            <>{footer}</>
          )}
        </footer>
      )}
    </div>
  )
}
