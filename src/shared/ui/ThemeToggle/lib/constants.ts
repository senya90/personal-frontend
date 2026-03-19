import { IThemeOption, THEME } from '../model/types'

export const THEME_OPTIONS: IThemeOption[] = [
  {
    value: THEME.LIGHT,
    icon: 'sun',
    label: 'Light',
    color: 'var(--color_sun)',
  },
  {
    value: THEME.DARK,
    icon: 'moon',
    label: 'Dark',
    color: 'var(--color_moon)',
  },
  {
    value: THEME.SYSTEM,
    icon: 'system',
    label: 'System',
    color: 'var(--color_system)',
  },
]
