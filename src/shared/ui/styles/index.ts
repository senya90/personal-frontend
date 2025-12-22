import container from './container/stylesContainer.module.css'
import flex from './flex/flex.module.css'
import margins from './offsets/ui/stylesMargin.module.css'
import paddings from './offsets/ui/stylesPadding.module.css'

export { container, margins, paddings, flex }
export type { BottomOffset } from './offsets/model/types'
export { calcBottomOffset } from './offsets/lib/utils'
