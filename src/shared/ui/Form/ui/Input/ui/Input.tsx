import cn from 'classnames'
import { forwardRef, InputHTMLAttributes, useId } from 'react'

import { FieldLabel } from '@/shared/ui/Form/ui/FieldLabel'

import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, variant = 'primary', ...props }, ref) => {
    const generatedId = useId()
    const id = generatedId + props.name

    return (
      <div className={cn(styles.field, className)}>
        <input
          ref={ref}
          id={id}
          type="text"
          className={cn(styles.input, styles[variant])}
          placeholder=" "
          {...props}
        />
        {label && <FieldLabel forId={id}>{label}</FieldLabel>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
