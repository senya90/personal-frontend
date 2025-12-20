import container from './container/stylesContainer.module.css'
import margins from './offsets/ui/stylesMargin.module.css'
import paddings from './offsets/ui/stylesPadding.module.css'

// const container = {
//   main: stylesContainer.container,
//   pure: stylesContainer.container_pure,
// }

export { container, margins, paddings }
export type { BottomOffset } from './offsets/model/types'
export { calcBottomOffset } from './offsets/lib/utils'
