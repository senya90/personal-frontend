import { FieldError as FieldErrorRHF } from 'react-hook-form'

export type FieldError =
  | string
  | string[]
  | FieldErrorRHF
  | FieldErrorRHF[]
  | undefined
