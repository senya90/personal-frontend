import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { SendEmailForm } from './SendEmailForm'

vi.mock('next-intl', () => {
  return {
    useTranslations: () => (key: string, params?: Record<string, unknown>) => {
      if (params?.count) return `${key}_${params.count}`
      return key
    },
  }
})

vi.mock('sonner', () => {
  return {
    toast: {
      success: vi.fn(),
      error: vi.fn(),
    },
  }
})

interface CaptchaMock {
  onVerify: (token: string) => void
}

vi.mock('@/shared/ui/Captcha', () => {
  return {
    Captcha: ({ onVerify }: CaptchaMock) => (
      <button
        type="button"
        data-testid="captcha"
        onClick={() => onVerify('test-token')}
      >
        Verify Captcha
      </button>
    ),
  }
})

const onSubmitted = vi.fn()

const renderForm = () => {
  const user = userEvent.setup()
  render(<SendEmailForm onSubmitted={onSubmitted} />)
  return { user }
}

const getFields = () => ({
  theme: screen.getByRole('textbox', { name: /write_to_me.subject/i }),
  email: screen.getByRole('textbox', { name: /write_to_me.email/i }),
  description: screen.getByRole('textbox', { name: /write_to_me.message/i }),
  submit: screen.getByRole('button', { name: /write_to_me.send/i }),
  captcha: screen.getByTestId('captcha'),
})

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  const fields = getFields()
  await user.type(fields.theme, 'Theme 1')
  await user.type(fields.email, 'test@example.com')
  await user.type(fields.description, 'Some descriptions for message')
  await user.click(fields.captcha)
}

describe('SendEmailForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    onSubmitted.mockResolvedValue(undefined)
  })

  it('render all fields', () => {
    renderForm()
    const fields = getFields()

    expect(fields.theme).toBeInTheDocument()
    expect(fields.email).toBeInTheDocument()
    expect(fields.description).toBeInTheDocument()
    expect(fields.submit).toBeInTheDocument()
    expect(fields.captcha).toBeInTheDocument()
  })

  it('validation errors for an empty form', async () => {
    const { user } = renderForm()
    await user.click(getFields().submit)

    await waitFor(() => {
      expect(screen.getAllByRole('alert').length).toBeGreaterThan(0)
    })

    expect(onSubmitted).not.toHaveBeenCalled()
  })

  it('valid email', async () => {
    const { user } = renderForm()
    await user.type(getFields().email, 'text@test.com')
    await user.tab()

    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toHaveLength(0)
    })
  })

  it('invalid email', async () => {
    const { user } = renderForm()
    await user.type(getFields().email, 'emailtesttext')
    await user.tab()

    await waitFor(() => {
      expect(screen.getAllByText('wrong_email').length).toBeGreaterThan(0)
    })
  })

  it('valid description', async () => {
    const { user } = renderForm()
    await user.type(getFields().description, 'Some description message')
    await user.tab()

    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toHaveLength(0)
    })
  })

  it('invalid description min', async () => {
    const { user } = renderForm()
    await user.type(getFields().description, 'Some')
    await user.tab()

    await waitFor(() => {
      expect(screen.getAllByText('min_10').length).toBeGreaterThan(0)
    })
  })

  it('valid theme', async () => {
    const { user } = renderForm()
    await user.type(getFields().theme, 'Some theme')
    await user.tab()

    await waitFor(() => {
      expect(screen.queryAllByRole('alert')).toHaveLength(0)
    })
  })

  it('invalid theme max', async () => {
    const { user } = renderForm()
    await user.type(getFields().theme, '12345678901'.repeat(10))
    await user.tab()

    await waitFor(() => {
      expect(screen.getAllByText('max_100').length).toBeGreaterThan(0)
    })
  })

  it('invalid captcha', async () => {
    const { user } = renderForm()
    const fields = getFields()

    await user.type(fields.theme, 'Theme')
    await user.type(fields.email, 'some@mail.com')
    await user.type(fields.description, 'Description for message')
    await user.click(fields.submit)

    await waitFor(() => {
      expect(screen.getAllByText('Verify Captcha').length).toBeGreaterThan(0)
    })

    expect(onSubmitted).not.toHaveBeenCalled()
  })

  it('valid captcha', async () => {
    const { user } = renderForm()
    await fillValidForm(user)
    await user.click(getFields().submit)

    await waitFor(() => {
      expect(onSubmitted).toHaveBeenCalledWith({
        theme: 'Theme 1',
        email: 'test@example.com',
        description: 'Some descriptions for message',
        token: 'test-token',
      })
    })
  })

  it('reset form', async () => {
    const { user } = renderForm()
    const fields = getFields()
    await fillValidForm(user)
    await user.click(fields.submit)

    await waitFor(() => {
      expect(fields.theme).toHaveValue('')
      expect(fields.email).toHaveValue('')
      expect(fields.description).toHaveValue('')
    })
  })

  it('the send button is disabled', async () => {
    onSubmitted.mockImplementation(() => new Promise(() => {})) // unresolved

    const { user } = renderForm()
    await fillValidForm(user)
    await user.click(getFields().submit)

    await waitFor(() => {
      expect(getFields().submit).toBeDisabled()
    })
  })
})
