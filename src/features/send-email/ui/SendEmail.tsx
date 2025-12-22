import cn from 'classnames'

import { Button } from '@/shared/ui/Button'
import { Input, Textarea } from '@/shared/ui/Form'
import { container } from '@/shared/ui/styles'

import styles from './styles.module.css'

interface IProps {
  className?: string
}

export const SendEmail = ({ className }: IProps) => {
  return (
    <form className={cn(styles.form, className)} action="">
      <Input label="Тема" name="theme" />
      <Input label="Куда отвечать (email)" name="email" />
      <Textarea name="description" label="Напиши мне" />

      <Button variant="secondary" className={container.full}>
        Отправить
      </Button>
    </form>
  )
}
