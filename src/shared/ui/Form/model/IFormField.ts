import { FormVariant } from '@/shared/ui/Form/model/types'
import { IFieldAlertingProps } from '@/shared/ui/Form/ui/FieldAlerting'

export interface IFormField extends IFieldAlertingProps {
  variant?: FormVariant
}
