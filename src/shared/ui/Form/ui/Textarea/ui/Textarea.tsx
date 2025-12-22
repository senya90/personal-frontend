import cn from 'classnames'
import { forwardRef, TextareaHTMLAttributes, useId } from 'react'

import { FieldLabel } from '@/shared/ui/Form/ui/FieldLabel'

import styles from './styles.module.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, variant = 'primary', ...props }, ref) => {
    const generatedId = useId()
    const id = generatedId + props.name

    return (
      <div className={cn(styles.field, className)}>
        <textarea
          ref={ref}
          id={id}
          className={cn(styles.textarea, styles[variant])}
          placeholder=" "
          {...props}
        />
        {label && <FieldLabel forId={id}>{label}</FieldLabel>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
