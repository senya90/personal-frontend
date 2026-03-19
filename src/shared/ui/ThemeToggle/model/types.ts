import { IconName } from '../../Icon'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export interface IThemeOption {
  value: THEME
  icon: IconName
  label: string
  color: string
}
