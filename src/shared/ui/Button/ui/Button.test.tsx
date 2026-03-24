import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, it, expect, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('Render children', () => {
    render(<Button>Click me!</Button>)
    expect(
      screen.getByRole('button', { name: 'Click me!' })
    ).toBeInTheDocument()
  })

  it('Has displayName', () => {
    expect(Button.displayName).toBe('Button')
  })

  it('Primary as default', () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('primary')
    expect(btn.className).not.toContain('secondary')
  })

  it('Secondary', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('secondary')
    expect(btn.className).not.toContain('primary')
  })

  it('Disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('Disabled: uses CSS class', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button').className).toMatch(/disabled/i)
  })

  it("Not disabled: doesn't use CSS class", () => {
    render(<Button>Active</Button>)
    expect(screen.getByRole('button').className).not.toMatch(/disabled/i)
  })

  it('Add some class', () => {
    render(<Button className="my-custom-class">Text</Button>)
    expect(screen.getByRole('button')).toHaveClass('my-custom-class')
  })

  it('Click', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Btn</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Click for disabled', async () => {
    const handleClick = vi.fn()
    render(
      <Button disabled onClick={handleClick}>
        Btn
      </Button>
    )
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('HTML attributes', () => {
    render(
      <Button type="submit" aria-label="Send">
        Send
      </Button>
    )
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('type', 'submit')
    expect(btn).toHaveAttribute('aria-label', 'Send')
  })

  it('Ref', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
