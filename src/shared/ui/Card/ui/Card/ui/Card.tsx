import cn from 'classnames'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

import { Icon } from '@/shared/ui/Icon/ui/Icon'
import { Link } from '@/shared/ui/Link'
import { BottomOffset, calcBottomOffset } from '@/shared/ui/styles'
import { Tag } from '@/shared/ui/Tag/ui/Tag'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

interface IProps {
  title: string
  link?: {
    href: string | undefined
    target?: HTMLAttributeAnchorTarget
    text?: string
  }
  subtitle?: string
  footnote?: string | string[]
  description?: string | string[]
  tags?: string[]
  footer?: ReactNode
  bottomOffset?: BottomOffset
}

export const Card = ({
  title,
  link,
  subtitle,
  footnote,
  description,
  tags,
  footer,
  bottomOffset,
}: IProps) => {
  return (
    <article
      className={cn(styles.content, {
        [calcBottomOffset(bottomOffset)]: bottomOffset,
      })}
    >
      <header className={styles.header}>
        <div>
          <Typography variant="h6" component="span" bottomOffset="xs">
            {title}
          </Typography>

          {link?.href && (
            <Link
              href={link.href}
              target={link.target}
              variant="caption"
              component="span"
              permanent
              className={styles.linkWrapper}
              linkClassName={styles.link}
            >
              <Icon icon="externalLink" size="xs" fill="var(--link-content)" />
              {link.text}
            </Link>
          )}
        </div>

        <Typography
          color="accent"
          variant="body2"
          bottomOffset={!footnote && !description ? undefined : 's'}
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
                    variant="body2"
                  >
                    {note}
                  </Typography>
                ))}
              </>
            ) : (
              <Typography align="right" color="secondary" variant="body2">
                {footnote}
              </Typography>
            )}
          </div>
        )}
      </header>

      <section>
        {description && (
          <>
            {Array.isArray(description) ? (
              <>
                {description.map((d, idx) => (
                  <Typography key={idx} bottomOffset="s">
                    {d}
                  </Typography>
                ))}
              </>
            ) : (
              <Typography bottomOffset="s">{description}</Typography>
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
      </section>

      {footer && (
        <footer className={styles.footer}>
          {typeof footer === 'string' ? (
            <Typography color="secondary" variant="body2">
              {footer}
            </Typography>
          ) : (
            <>{footer}</>
          )}
        </footer>
      )}
    </article>
  )
}
