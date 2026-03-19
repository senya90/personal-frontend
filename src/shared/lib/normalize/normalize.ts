export function normalizeSize(value?: number | string | 'full') {
  if (value === 'full') return '100%'
  if (typeof value === 'number') return `${value}px`

  return value
}
