import cn from 'classnames'

import styles from './styles.module.css'
import { normalizeSize } from '../../../lib/normalize/normalize'
import { Size } from '../../../model/Size'
import { SKELETON_SIZE_MAP } from '../lib/constants'

interface SkeletonProps {
  width?: number | string | 'full'
  height?: number | string | 'full'
  size?: Size
  radius?: number | string
  className?: string
}

export const Skeleton = ({
  width,
  height,
  size = 'm',
  radius = 'var(--radius-xs)',
  className,
}: SkeletonProps) => {
  const finalWidth = size ? SKELETON_SIZE_MAP[size] : width
  const finalHeight = size ? SKELETON_SIZE_MAP[size] : height

  const style: React.CSSProperties = {
    width: normalizeSize(finalWidth),
    height: normalizeSize(finalHeight),
    borderRadius: normalizeSize(radius),
  }

  return (
    <div
      className={cn(styles.skeleton, className)}
      style={style}
      role="presentation"
    />
  )
}
