export function getErrorMessage(
  error: unknown,
  fallback: string = 'Неизвестная ошибка'
): string {
  if (error instanceof Error) return error.message

  if (typeof error === 'string') return error

  if (error && typeof error === 'object') {
    const messageKeys = ['message', 'error', 'err', 'detail', 'description']
    const errorObj = error as Record<string, unknown>

    for (const key of messageKeys) {
      const value = errorObj[key]
      if (typeof value === 'string') {
        return value
      }
    }

    try {
      return JSON.stringify(error)
    } catch (__e) {
      return fallback
    }
  }

  return fallback
}
