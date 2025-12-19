import { BottomOffset } from '@/shared/ui/styles/offsets/model/types'
import styles from '../ui/stylesMargin.module.css'

export const calcBottomOffset = (offset: BottomOffset | undefined): string => {
  if (offset === undefined) return ''

  return styles[`mb_${offset}`]
}
