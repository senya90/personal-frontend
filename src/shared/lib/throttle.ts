/* eslint-disable @typescript-eslint/no-explicit-any */
export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay = 2000
): (...args: Parameters<T>) => void {
  let lastCall = 0

  return function (this: ThisParameterType<T>, ...args: any[]) {
    const now = Date.now()

    if (now - lastCall >= delay) {
      lastCall = now
      fn.apply(this, args)
    }
  }
}
