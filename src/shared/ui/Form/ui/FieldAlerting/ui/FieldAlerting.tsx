import { IFieldAlertingProps } from '@/shared/ui/Form/ui/FieldAlerting/model/IFieldAlertingProps'
import { container, margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { FieldError } from '../model/FieldError'
import { FieldWarning } from '../model/FieldWarning'

export const FieldAlerting = ({ id, error, warning }: IFieldAlertingProps) => {
  const formatMessages = (messages: FieldError | FieldWarning): string[] => {
    if (!messages) return []

    if (typeof messages === 'string') return [messages]

    if (Array.isArray(messages)) {
      return messages
        .map((msg) => (typeof msg === 'string' ? msg : msg.message || ''))
        .filter(Boolean)
    }

    if (messages.message) {
      return [messages.message]
    }

    return []
  }

  const errorMessages = formatMessages(error)
  const warningMessages = formatMessages(warning)

  return (
    <>
      {errorMessages.length > 0 && (
        <div id={`${id}-error`} className={margins.mt_xs} role="alert">
          {errorMessages.map((message, idx) => (
            <Typography
              key={idx}
              color="error"
              variant="body2"
              component="span"
              className={container.db}
            >
              {message}
            </Typography>
          ))}
        </div>
      )}

      {warningMessages.length > 0 && errorMessages.length === 0 && (
        <div id={`${id}-warning`} className={margins.mt_xs}>
          {warningMessages.map((message, idx) => (
            <Typography
              key={idx}
              color="warning"
              variant="body2"
              component="span"
              className={container.db}
            >
              {message}
            </Typography>
          ))}
        </div>
      )}
    </>
  )
}
