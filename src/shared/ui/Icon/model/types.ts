import { icons, iconSizes } from '@/shared/ui/Icon/lib/constants'

export type IconName = keyof typeof icons
export type IconSize = keyof typeof iconSizes
export type SvgIconComponent = React.FC<React.SVGProps<SVGSVGElement>>
