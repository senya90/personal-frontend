import cn from 'classnames'
import { forwardRef, TextareaHTMLAttributes, useId } from 'react'

import { IFormField } from '@/shared/ui/Form/model/IFormField'
import { FieldAlerting } from '@/shared/ui/Form/ui/FieldAlerting'
import { FieldLabel } from '@/shared/ui/Form/ui/FieldLabel'

import styles from './styles.module.css'

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>, IFormField {
  label?: string
  className?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      className,
      variant = 'primary',
      error,
      warning,
      touched,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const id = generatedId + props.name
    const actualStatus = error ? 'error' : warning ? 'warning' : ''

    return (
      <div className={cn(styles.field, className)}>
        <div className={styles.fieldInner}>
          <textarea
            ref={ref}
            id={id}
            className={cn(
              styles.textarea,
              styles[actualStatus],
              styles[variant],
              {
                [styles.touched]: touched,
              }
            )}
            placeholder=" "
            {...props}
          />

          {label && (
            <FieldLabel forId={id} error={error} warning={warning}>
              {label}
            </FieldLabel>
          )}
        </div>

        {(error || warning) && (
          <FieldAlerting id={id} error={error} warning={warning} />
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
