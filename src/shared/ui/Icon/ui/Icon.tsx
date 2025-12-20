import cn from 'classnames'
import { forwardRef, SVGProps } from 'react'

import { icons, iconSizes } from '@/shared/ui/Icon/lib/constants'
import {
  IconName,
  IconSize,
  SvgIconComponent,
} from '@/shared/ui/Icon/model/types'

import styles from './styles.module.css'

interface IProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  icon: IconName
  size?: IconSize
}

interface IProps {
  icon: IconName
  size?: IconSize
  className?: string
  onClick?: () => void
}

export const Icon = forwardRef<SVGSVGElement, IProps>(
  ({ icon, size = 'm', fill = 'var(--text)', className, ...rest }, ref) => {
    const SvgIcon: SvgIconComponent = icons[icon]
    const pixelSize = iconSizes[size]

    return (
      <SvgIcon
        ref={ref}
        className={cn(styles.icon, className)}
        width={pixelSize}
        height={pixelSize}
        fill={fill}
        {...rest}
      />
    )
  }
)

Icon.displayName = 'Icon'
