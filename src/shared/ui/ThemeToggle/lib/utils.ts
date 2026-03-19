import { IThemeOption, THEME } from '../model/types'

export const getThemeOptions = (
  labels: Record<THEME, string>
): IThemeOption[] => [
  {
    value: THEME.LIGHT,
    icon: 'sun',
    label: labels.light,
    color: 'var(--color_sun)',
  },
  {
    value: THEME.DARK,
    icon: 'moon',
    label: labels.dark,
    color: 'var(--color_moon)',
  },
  {
    value: THEME.SYSTEM,
    icon: 'system',
    label: labels.system,
    color: 'var(--color_system)',
  },
]
