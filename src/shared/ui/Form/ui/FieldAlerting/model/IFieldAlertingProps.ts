import { FieldError } from '@/shared/ui/Form/ui/FieldAlerting/model/FieldError'
import { FieldWarning } from '@/shared/ui/Form/ui/FieldAlerting/model/FieldWarning'

export interface IFieldAlertingProps {
  id?: string
  error?: FieldError
  warning?: FieldWarning
}
