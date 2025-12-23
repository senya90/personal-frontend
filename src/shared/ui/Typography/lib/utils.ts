import { TypographyVariant } from '@/shared/ui/Typography/model/types'

export const variantForTagMapping: Record<
  TypographyVariant,
  React.ElementType
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  lead: 'p',
  light: 'p',
  light2: 'p',
  light3: 'p',
  button: 'span',
  caption: 'span',
  overline: 'span',
}
