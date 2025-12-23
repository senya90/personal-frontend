import cn from 'classnames'
import { forwardRef, InputHTMLAttributes, useId } from 'react'

import { IFormField } from '@/shared/ui/Form/model/IFormField'
import { FieldAlerting } from '@/shared/ui/Form/ui/FieldAlerting'
import { FieldLabel } from '@/shared/ui/Form/ui/FieldLabel'

import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, IFormField {
  label?: string
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
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
          <input
            ref={ref}
            id={id}
            type="text"
            className={cn(styles.input, styles[actualStatus], styles[variant], {
              [styles.touched]: touched,
            })}
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

Input.displayName = 'Input'

export { Input }
