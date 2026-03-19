import { IconName } from '../../Icon'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
  PYATEROCHKA = 'pyaterochka',
  UBUNTU = 'ubuntu',
}

export interface IThemeOption {
  value: THEME
  icon: IconName
  label: string
  color: string
}
