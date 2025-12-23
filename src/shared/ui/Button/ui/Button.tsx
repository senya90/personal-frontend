import cn from 'classnames'
import { forwardRef, ButtonHTMLAttributes } from 'react'

import { container } from '@/shared/ui/styles'

import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'primary' | 'secondary'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.button,
          variant === 'secondary' ? styles.secondary : styles.primary,
          {
            [container.disabled]: disabled,
          },
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
