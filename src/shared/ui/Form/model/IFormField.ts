import { IFieldAlertingProps } from '@/shared/ui/Form/ui/FieldAlerting'

export interface IFormField extends IFieldAlertingProps {
  variant?: 'primary' | 'secondary'
  fieldStatus?: 'regular' | 'warning' | 'error'
}
